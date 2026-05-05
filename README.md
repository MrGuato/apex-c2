# VERTEX C2

Hardened command and control architecture for autonomous systems operating in contested RF environments. Open security research. No certification. No warranty.

## Status

Active research. v0.4.2 alpha. Reproducible on a single Linux host. SITL only; this repository contains no live RF testing, no airframe firmware, and no operational keys.

## Why this exists

Commercial autonomy stacks assume a benign electromagnetic spectrum and a benign network. Operational reality contradicts both assumptions.

MAVLink, the de facto control protocol for the open autopilot ecosystem, ships without encryption or peer authentication. Most ground control software accepts commands from any host that can reach its UDP socket. Most operator interfaces expose inbound ports to the broader network. The link is trusted by topology rather than by signature.

VERTEX C2 reproduces three of the resulting failure modes in a controlled simulation, implements a hardened ground control stack that closes them, and maps the implementation to the NIST SP 800-171 controls that DoD contractors are required to satisfy under CMMC. The repository is intended to be read end to end as a single technical brief: threat model, implementation, reproduction, compliance mapping.

## Threat model

The work is scoped to three failure modes that recur across COTS autonomy stacks. Each is reproduced in `attack/` and mitigated in `infra/`.

**T-01: Plaintext MAVLink.** MAVLink v2 transmits in cleartext by default. On the LAN segment between an ArduPilot SITL instance and a typical GCS, every command (ARM, SET_MODE, MISSION_ITEM_INT) is readable in Wireshark within seconds. No specialized tooling is required.

**T-02: No peer authentication.** Common GCS implementations accept commands from any host that can reach the MAVLink endpoint. A second `mavproxy` instance on the link can re-task or disarm the airframe without a key, certificate, or challenge.

**T-03: Implicit network trust.** GCS hosts routinely expose inbound ports to the LAN, the operator subnet, or the open internet. The attack surface is coextensive with the network surface, and reachable hosts are treated as trusted by default.

Each threat has a corresponding entry in `docs/threat-model.md` with the specific protocol behavior, observed traffic patterns, and the mitigation applied in this repository.

## Architecture

The hardened path replaces the default control channel with an end to end encrypted, mutually authenticated, fully observable stack.

| Layer | Default posture | VERTEX C2 posture |
| --- | --- | --- |
| Airframe | ArduPilot SITL | ArduPilot SITL |
| Transport | MAVLink udp/14550 (plaintext) | WireGuard tunnel (ChaCha20-Poly1305 + PSK) |
| Ingress | Implicit trust on LAN | Traefik with mutual TLS |
| Operator access | Direct port exposure | Cloudflare Tunnel, no inbound ports |
| Telemetry | Local console | Prometheus metrics + Loki audit logs |
| Configuration | Manual, ad hoc | FluxCD reconciled from Git |
| Compute | Operator workstation | k3s on Pi-class hardware or a hardened VM |

Design constraints:

1. The link is treated as adversarial. Encryption and authentication are not optional layers.
2. Every payload is verified by signature, not by source. Topology proves nothing.
3. Every state change is observable. Commands, link transitions, and ingress events are logged with sufficient fidelity for after-action review.
4. Configuration is declarative. The full topology is reconstructable from the repository.

A full architectural walkthrough lives in `docs/architecture.md`, including the WireGuard peering topology, the Traefik mTLS chain, the Loki retention policy, and the FluxCD reconciliation interval.

## Reproduction

Tested on Ubuntu 22.04 LTS and Debian 12. Requires Docker, `make`, and roughly 4 GB of free RAM. No physical hardware required.

```bash
git clone https://github.com/your-handle/vertex-c2.git
cd vertex-c2
make bootstrap        # installs k3s, Flux, and the SITL container
make attack           # runs the unmitigated capture against plaintext MAVLink
make harden           # brings up WireGuard, Traefik mTLS, and Cloudflare Tunnel
make verify           # reruns the capture and confirms the link is encrypted
make clean            # tears the cluster and tunnel down
```

`make attack` produces a `pcap` file in `attack/output/` and prints the decoded MAVLink commands directly to stdout. `make verify` produces a second `pcap` against the same SITL session, now routed through the WireGuard interface, and confirms via `tcpdump` that the payloads are no longer recoverable.

Step by step instructions, including how to inspect the captures in Wireshark and how to swap the cryptographic primitives for FIPS-validated modules, are in `docs/reproduction.md`.

## Repository layout

```
vertex-c2/
├── README.md                        # this file
├── LICENSE                          # Apache 2.0
├── Makefile                         # bootstrap, attack, harden, verify, clean
├── docs/
│   ├── threat-model.md              # T-01 through T-03 in detail
│   ├── architecture.md              # hardened stack walkthrough
│   ├── reproduction.md              # step by step demo guide
│   └── compliance/
│       └── cmmc-mapping.md          # full NIST SP 800-171 mapping
├── infra/
│   ├── k3s/                         # cluster bootstrap manifests
│   ├── flux/                        # GitOps reconciliation config
│   ├── traefik/                     # ingress, mTLS certificate chain
│   ├── wireguard/                   # tunnel templates (no keys committed)
│   ├── cloudflare/                  # tunnel config templates
│   └── observability/
│       ├── prometheus/              # scrape config, alert rules
│       └── loki/                    # log pipeline, retention
├── sitl/
│   ├── docker-compose.yml           # ArduPilot SITL container
│   └── missions/                    # sample mission plans
├── attack/
│   ├── capture.sh                   # Wireshark capture against plaintext MAVLink
│   ├── inject.py                    # MAVLink injection proof of concept
│   └── output/                      # pcap files (gitignored)
└── scripts/
    ├── bootstrap.sh
    ├── verify.sh
    └── teardown.sh
```

No private keys, certificates, or operator credentials are ever committed. All sensitive material is generated locally during `make bootstrap` and is gitignored. The Cloudflare Tunnel token is read from an environment variable.

## Compliance mapping

The implementation is mapped to ten NIST SP 800-171 controls representing the load-bearing subset for a hardened C2 stack. The mapping is partial by design. This repository is research, not an attestation, and is not intended to substitute for a formal CMMC assessment.

| Control | Requirement | Implementation |
| --- | --- | --- |
| AC.L1-3.1.1 | Limit access to authorized users | WireGuard peer keys; GCS mTLS |
| AC.L1-3.1.2 | Limit transactions and functions | Traefik route-level RBAC; scoped GCS commands |
| IA.L1-3.5.2 | Authenticate users and devices | Mutual TLS at ingress; WireGuard pre-shared keys |
| SC.L1-3.13.1 | Monitor and protect communications | WireGuard tunnel; Prometheus link telemetry |
| SC.L1-3.13.5 | Subnetwork separation for public-facing components | Cloudflare Tunnel; zero inbound ports on GCS |
| AU.L2-3.3.1 | Create and retain audit logs | Loki and Promtail capture of all GCS commands |
| AU.L2-3.3.2 | Ensure individual operator accountability | Per-operator certificates; signed FluxCD commit history |
| SC.L2-3.13.8 | Cryptographic protection in transit | ChaCha20-Poly1305 (data); TLS 1.3 (control) |
| CM.L2-3.4.1 | Establish baseline configurations | FluxCD-managed declarative manifests in Git |
| SI.L1-3.14.1 | Identify, report, and correct system flaws | Prometheus alerting; ingress anomaly metrics |

Full mapping notes, including which control families are deliberately out of scope (PE, PS, MA), live in `docs/compliance/cmmc-mapping.md`.

## Stack

| Component | Role |
| --- | --- |
| ArduPilot SITL | Simulated airframe and autopilot |
| MAVLink v2 | Application-layer control protocol |
| WireGuard | Encrypted, authenticated transport |
| Traefik | GCS ingress with mutual TLS |
| Cloudflare Tunnel | Operator access without inbound ports |
| Prometheus | Metrics, link telemetry, alerting |
| Loki + Promtail | Command and event audit logs |
| k3s | Lightweight Kubernetes for the GCS stack |
| FluxCD | Declarative GitOps reconciliation |
| Wireshark, tcpdump | Capture and analysis tooling for the attack demo |

Cryptographic primitives are chosen for transparency and reproducibility. Documentation in `docs/architecture.md` describes the substitutions required for environments that mandate FIPS 140-3 validated modules (`wireguard-go` with FIPS-built Go runtime, OpenSSL FIPS provider for Traefik).

## Scope and non-goals

In scope:

1. Reproduction of three named MAVLink failure modes against ArduPilot SITL.
2. A hardened ground control stack that mitigates them.
3. A partial mapping to NIST SP 800-171 and CMMC Level 2 controls.
4. Single-host reproduction in under ten minutes.

Out of scope:

1. Live RF testing or any work involving a physical airframe.
2. Jamming, spoofing, or any active interference with regulated spectrum.
3. Modification of ArduPilot firmware. The autopilot is treated as an unmodified upstream dependency.
4. Formal CMMC assessment, certification, or attestation of any kind.
5. Operator training, mission planning, or anything outside the C2 link itself.

## Roadmap

1. v0.5: Hardware-in-the-loop reproduction on a Pi-class compute module.
2. v0.6: Replace the static WireGuard PSK with a key rotation mechanism backed by short-lived SPIFFE identities.
3. v0.7: Extend the threat model to include link degradation and graceful failover behavior under packet loss.
4. v1.0: Public technical write-up and second-party review of the compliance mapping.

## Contributing

Issues and pull requests are welcome. Before opening a PR, please read `docs/threat-model.md` and confirm that the proposed change either closes a documented threat, improves reproducibility, or strengthens the compliance mapping. Cosmetic changes and tooling additions outside that scope will likely be declined.

## License

Apache License 2.0. See `LICENSE`.

## Citation

If this work is referenced in a paper, brief, or proposal, the preferred citation is:

```
VERTEX C2: Hardened Command and Control Architecture for Autonomous Systems
in Contested RF Environments. v0.4.2-alpha, 2026.
https://github.com/your-handle/vertex-c2
```