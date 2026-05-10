import {
  Shield,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ChevronRight,
  Radio,
  Crosshair,
  Network,
  KeyRound,
  CheckCircle2,
  AlertTriangle,
  Activity,
  Play,
  Lock,
  Eye,
  ServerCog,
  GitBranch,
  FileText,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-zinc-100 antialiased selection:bg-radar/30 selection:text-radar">
      <BackgroundLayers />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Architecture />
        <Demo />
        <Compliance />
        <About />
      </main>
      <Footer />
    </div>
  );
}

/* ──────────────────── Background ──────────────────── */

function BackgroundLayers() {
  return (
    <>
      <div
        aria-hidden
        className="bg-grid pointer-events-none fixed inset-0 -z-20 opacity-[0.18]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,255,157,0.06),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-black to-transparent"
      />
    </>
  );
}

/* ──────────────────── Navigation ──────────────────── */

function Nav() {
  const links = [
    { href: "#problem", label: "Problem" },
    { href: "#architecture", label: "Architecture" },
    { href: "#demo", label: "Demo" },
    { href: "#compliance", label: "Compliance" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <div className="grid h-7 w-7 place-items-center border border-radar/40 bg-radar/10">
            <Shield className="h-3.5 w-3.5 text-radar" strokeWidth={2.5} />
          </div>
          <span className="font-mono text-sm tracking-widest text-zinc-200">
            VERTEX<span className="text-radar">_</span>C2
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-zinc-400 transition hover:text-radar"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/MrGuato/vertex-c2"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900/50 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-zinc-300 transition hover:border-radar hover:text-radar hover:shadow-glow"
        >
          <Github className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Repo</span>
        </a>
      </div>
    </nav>
  );
}

/* ──────────────────── Reusable Section Header ──────────────────── */

function SectionHeader({ number, eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-radar">
        / {number} — {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function CornerTicks() {
  const base = "absolute h-3 w-3 border-radar/60";
  return (
    <>
      <div className={`${base} left-4 top-4 border-l border-t`} />
      <div className={`${base} right-4 top-4 border-r border-t`} />
      <div className={`${base} bottom-4 left-4 border-b border-l`} />
      <div className={`${base} bottom-4 right-4 border-b border-r`} />
    </>
  );
}

/* ──────────────────── Hero ──────────────────── */

function Hero() {
  const specs = [
    { label: "Sim", value: "ARDUPILOT SITL" },
    { label: "Tunnel", value: "WIREGUARD" },
    { label: "Posture", value: "CMMC L2" },
    { label: "Ops", value: "K3S · FLUXCD" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-zinc-800/80">
      <CornerTicks />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        {/* Status bar */}
        <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-radar opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-radar" />
            </span>
            <span className="uppercase tracking-[0.2em]">SYS://OPERATIONAL</span>
          </div>
          <span className="hidden uppercase tracking-[0.2em] sm:inline">
            BUILD 0.4.2-α
          </span>
          <span className="hidden uppercase tracking-[0.2em] sm:inline">
            CLASS // OPEN-RESEARCH
          </span>
          <span className="ml-auto hidden uppercase tracking-[0.2em] md:inline">
            38.8977° N · 77.0365° W
          </span>
        </div>

        <div className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-radar">
          / 00 — Mission
        </div>

        <h1 className="text-5xl font-bold leading-[0.92] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
          VERTEX<span className="text-radar">.</span>C2
        </h1>

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500 sm:text-sm">
          // Hardened Command Architecture · Open Security Research
        </p>

        <h2 className="mt-10 max-w-3xl text-xl font-medium leading-snug text-zinc-200 sm:text-2xl md:text-3xl">
          Zero-trust command and control for autonomous systems operating in{" "}
          <span className="text-radar">contested RF environments</span>.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          A reproducible reference implementation: a simulated drone, an
          on-camera attack against its MAVLink link, and a hardened ground
          control stack that defeats it — mapped to NIST SP 800-171 and
          CMMC&nbsp;L2 controls DoD contractors actually have to satisfy.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="https://github.com/MrGuato/vertex-c2"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 border border-radar bg-radar/10 px-6 py-3 font-mono text-sm uppercase tracking-wider text-radar transition hover:bg-radar hover:text-black hover:shadow-glow"
          >
            <Github className="h-4 w-4" />
            View on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#demo"
            className="group inline-flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-900/40 px-6 py-3 font-mono text-sm uppercase tracking-wider text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            <Play className="h-4 w-4" />
            Watch the Attack
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Spec strip */}
        <div className="mt-20 grid grid-cols-2 gap-px border border-zinc-800 bg-zinc-800/80 sm:grid-cols-4">
          {specs.map((spec) => (
            <div key={spec.label} className="bg-black/90 px-5 py-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                {spec.label}
              </div>
              <div className="mt-1.5 font-mono text-sm text-zinc-200">
                {spec.value}
              </div>
            </div>
          ))}
        </div>
        {/* Before / After screenshot evidence */}
        <div className="mt-16">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            / Captured Evidence
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-zinc-800 bg-zinc-950/50">
              <div className="border-b border-zinc-800 bg-zinc-900/60 px-4 py-2.5 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">
                  T-01 · Before
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Plaintext MAVLink
                </span>
              </div>
              <img
                src="/screenshots/before-plaintext-mavlink.png"
                alt="tcpdump showing plaintext MAVLink traffic on UDP 14550"
                className="w-full"
              />
              <div className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                UDP/14550 · commands readable · no auth
              </div>
            </div>

            <div className="border border-zinc-800 bg-zinc-950/50">
              <div className="border-b border-zinc-800 bg-zinc-900/60 px-4 py-2.5 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-radar">
                  T-01 · After
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  WireGuard Encrypted
                </span>
              </div>
              <img
                src="/screenshots/after-wireguard-encrypted.png"
                alt="tcpdump showing encrypted WireGuard traffic on UDP 51820"
                className="w-full"
              />
              <div className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                UDP/51820 · cipher bytes only · ChaCha20-Poly1305
              </div>
            </div>

            <div className="border border-zinc-800 bg-zinc-950/50">
              <div className="border-b border-zinc-800 bg-zinc-900/60 px-4 py-2.5 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">
                  T-02 · PoC
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Command Injection
                </span>
              </div>
              <img
                src="/screenshots/t02-unauthenticated-injection.png"
                alt="inject.py demonstrating unauthenticated MAVLink command injection"
                className="w-full"
              />
              <div className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                No credentials · full command access · T-02 closed by WG auth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Problem ──────────────────── */

function Problem() {
  const threats = [
    {
      icon: Radio,
      tag: "T-01",
      title: "Plaintext MAVLink",
      description:
        "MAVLink v2 ships with no encryption by default. On the LAN segment between SITL and a typical GCS, every command — ARM, SET_MODE, MISSION_ITEM_INT — is readable in Wireshark in seconds.",
      vector: "SNIFF // INTERCEPT",
    },
    {
      icon: Crosshair,
      tag: "T-02",
      title: "No Peer Authentication",
      description:
        "Common COTS autonomy stacks accept commands from any host that can reach the MAVLink endpoint. A second mavproxy instance on the link can re-task or disarm the airframe without a key, a cert, or a challenge.",
      vector: "INJECT // RE-TASK",
    },
    {
      icon: Network,
      tag: "T-03",
      title: "Implicit Network Trust",
      description:
        "GCS hosts routinely expose inbound ports to the LAN, the operator subnet, or the open internet. The link is trusted by topology rather than by signature, leaving the attack surface coextensive with the network surface.",
      vector: "TRUST-ON-FIRST-USE",
    },
  ];

  return (
    <section
      id="problem"
      className="relative border-b border-zinc-800/80 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          number="01"
          eyebrow="Threat Model"
          title="Drone C2 links assume a benign network. The network isn't."
          subtitle="Three failure modes recur across COTS autonomy stacks. VERTEX C2 reproduces each one in a controlled simulation, then closes it. The threat model below is the load-bearing constraint for everything that follows."
        />

        <div className="mt-16 grid gap-px border border-zinc-800 bg-zinc-800/80 md:grid-cols-3">
          {threats.map(({ icon: Icon, ...t }) => (
            <div
              key={t.tag}
              className="group relative bg-black p-8 transition hover:bg-zinc-950"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center border border-zinc-700 bg-zinc-900 transition group-hover:border-radar/60">
                  <Icon className="h-5 w-5 text-zinc-400 transition group-hover:text-radar" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                  {t.tag}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-zinc-100">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {t.description}
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-zinc-800 pt-4">
                <AlertTriangle className="h-3 w-3 text-radar/70" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Vector: {t.vector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Architecture ──────────────────── */

const TOKEN_COLORS = {
  comment: "text-zinc-500 italic",
  kw: "text-radar",
  str: "text-amber-300/90",
  num: "text-sky-300",
  type: "text-violet-300",
  fn: "text-cyan-300",
  prompt: "text-radar",
  ok: "text-radar",
  warn: "text-amber-400",
};

function L({ n, children }) {
  return (
    <div className="flex">
      <span className="mr-4 inline-block w-6 select-none text-right text-zinc-700">
        {n}
      </span>
      <span className="flex-1 whitespace-pre-wrap text-zinc-300">
        {children}
      </span>
    </div>
  );
}

function T({ k, children }) {
  return <span className={TOKEN_COLORS[k] ?? ""}>{children}</span>;
}

function TerminalWindow() {
  return (
    <div className="overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/60">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        </div>
        <div className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:block">
          gcs-host · before / after
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-radar">
          <span className="h-1.5 w-1.5 rounded-full bg-radar" />
          LIVE
        </div>
      </div>

      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
        <code>
          <L n="01">
            <T k="comment">{"# default posture — MAVLink in the clear"}</T>
          </L>
          <L n="02">
            <T k="prompt">{"$ "}</T>
            {"tcpdump -i lo -A 'udp port 14550' | head"}
          </L>
          <L n="03">
            <T k="warn">{"[!] "}</T>
            {"MAVLink v2 → SET_MODE: STABILIZE"}
          </L>
          <L n="04">
            <T k="warn">{"[!] "}</T>
            {"MAVLink v2 → COMMAND_LONG: MAV_CMD_COMPONENT_ARM_DISARM 1.0"}
          </L>
          <L n="05">
            <T k="warn">{"[!] "}</T>
            {"MAVLink v2 → MISSION_ITEM_INT: 37.7749, -122.4194"}
          </L>
          <L n="06">
            <T k="comment">
              {"# no auth · no encryption · trivially injectable"}
            </T>
          </L>
          <L n="07">{" "}</L>
          <L n="08">
            <T k="comment">{"# vertex-c2 hardened posture"}</T>
          </L>
          <L n="09">
            <T k="prompt">{"$ "}</T>
            {"sudo wg-quick up vertex-c2"}
          </L>
          <L n="10">
            <T k="ok">{"[OK] "}</T>
            {"tunnel up · psk verified · peer="}
            <T k="str">{"ALPHA-07"}</T>
            {" (1.5 KB rx)"}
          </L>
          <L n="11">{" "}</L>
          <L n="12">
            <T k="prompt">{"$ "}</T>
            {"tcpdump -i wg0 -nn"}
          </L>
          <L n="13">
            {"192.168.42.1.51820 > 192.168.42.2.51820: UDP 102 "}
            <T k="ok">{"[encrypted]"}</T>
          </L>
          <L n="14">
            <T k="ok">{"[OK] "}</T>
            {"commands now signed + encrypted + rate-limited at GCS"}
            <span className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-radar align-middle" />
          </L>
        </code>
      </pre>
    </div>
  );
}

/* Visual before/after stack diagram */
function StackColumn({ variant, title, tag, nodes, caveats }) {
  const isHardened = variant === "hardened";
  const tagAccent = isHardened
    ? "border-radar/40 text-radar"
    : "border-zinc-700 text-zinc-500";
  const nodeBorder = isHardened ? "border-radar/30" : "border-zinc-800";
  const arrowBg = isHardened ? "bg-radar/30" : "bg-zinc-800";
  const dotColor = isHardened ? "bg-radar" : "bg-amber-500";

  return (
    <div className="border border-zinc-800 bg-zinc-950/40 p-6">
      <div className="flex items-center justify-between">
        <span
          className={`border ${tagAccent} bg-black/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.25em]`}
        >
          {tag}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
          {isHardened ? "HARDENED" : "DEFAULT"}
        </span>
      </div>
      <h4 className="mt-4 font-mono text-sm uppercase tracking-wider text-zinc-100">
        {title}
      </h4>

      <div className="mt-6 space-y-2">
        {nodes.map((node, i) => (
          <div key={i}>
            <div className={`border ${nodeBorder} bg-black/60 px-3 py-2.5`}>
              <div className="font-mono text-xs text-zinc-100">
                {node.label}
              </div>
              {node.sublabel && (
                <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  {node.sublabel}
                </div>
              )}
            </div>
            {i < nodes.length - 1 && (
              <div className="flex h-6 items-center justify-center">
                <span className={`block h-full w-px ${arrowBg}`} />
              </div>
            )}
          </div>
        ))}
      </div>

      <ul className="mt-6 space-y-1.5 border-t border-zinc-800 pt-4">
        {caveats.map((c) => (
          <li
            key={c}
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]"
          >
            <span className={`h-1 w-1 rounded-full ${dotColor}`} />
            <span className={isHardened ? "text-zinc-400" : "text-zinc-500"}>
              {c}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Architecture() {
  const features = [
    {
      icon: Lock,
      title: "Encrypted Transport",
      detail:
        "WireGuard ChaCha20-Poly1305 tunnel between SITL and the GCS replaces the default plaintext MAVLink path.",
    },
    {
      icon: KeyRound,
      title: "Mutual Authentication",
      detail:
        "Pre-shared peer keys at the link layer; mTLS at the GCS ingress via Traefik. No anonymous control path.",
    },
    {
      icon: Eye,
      title: "Zero Inbound Exposure",
      detail:
        "Operator access lands through a Cloudflare Tunnel. The GCS opens no inbound ports to the public internet.",
    },
    {
      icon: Activity,
      title: "Observable by Default",
      detail:
        "Prometheus + Loki capture every command, link state change, and ingress event. Nothing is unobserved.",
    },
    {
      icon: GitBranch,
      title: "Declarative Operations",
      detail:
        "FluxCD reconciles the entire GCS stack from a Git repo. Every change is reviewable, signed, and reversible.",
    },
    {
      icon: ServerCog,
      title: "Headless & Reproducible",
      detail:
        "k3s on Pi-class compute or a hardened VM. The full topology can be rebuilt from the repo in minutes.",
    },
  ];

  const stack = [
    "ArduPilot SITL",
    "MAVLink v2",
    "WireGuard",
    "Traefik",
    "Cloudflare Tunnel",
    "Prometheus",
    "Loki",
    "k3s",
    "FluxCD",
  ];

  return (
    <section
      id="architecture"
      className="relative border-b border-zinc-800/80 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          number="02"
          eyebrow="Architecture"
          title="A hardened ground control stack — declarative, observable, end-to-end encrypted."
          subtitle="Treat the link as adversarial. Treat every payload as untrusted. Verify by signature, not by source."
        />

        {/* Before / After diagram */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <StackColumn
            variant="vulnerable"
            tag="POSTURE 0"
            title="Default COTS Path"
            nodes={[
              { label: "ArduPilot SITL", sublabel: "Simulated airframe" },
              { label: "MAVLink udp/14550", sublabel: "Plaintext · no auth" },
              { label: "Any host on LAN", sublabel: "Trusted by topology" },
            ]}
            caveats={["No encryption", "No peer auth", "No audit log"]}
          />
          <StackColumn
            variant="hardened"
            tag="POSTURE 1"
            title="VERTEX C2 Hardened Path"
            nodes={[
              { label: "ArduPilot SITL", sublabel: "Simulated airframe" },
              {
                label: "WireGuard tunnel",
                sublabel: "ChaCha20-Poly1305 · psk",
              },
              {
                label: "GCS · Traefik mTLS",
                sublabel: "Authenticated ingress",
              },
              {
                label: "Cloudflare Tunnel",
                sublabel: "Zero inbound ports",
              },
              {
                label: "Prometheus + Loki",
                sublabel: "Telemetry · audit logs",
              },
            ]}
            caveats={[
              "Encrypted end-to-end",
              "Mutually authenticated",
              "Fully observable",
            ]}
          />
        </div>

        {/* Terminal + capabilities */}
        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <TerminalWindow />
          </div>
          <div className="lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-radar">
              / Capabilities
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
              What changes when the link is hardened.
            </h3>
            <ul className="mt-8 space-y-5">
              {features.slice(0, 4).map(({ icon: Icon, ...f }) => (
                <li
                  key={f.title}
                  className="group flex gap-4 border-l border-zinc-800 pl-4 transition hover:border-l-radar"
                >
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-radar" />
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-zinc-200">
                      {f.title}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      {f.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ops capabilities */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.slice(4).map(({ icon: Icon, ...f }) => (
            <div
              key={f.title}
              className="group flex gap-4 border border-zinc-800 bg-zinc-950/40 p-6 transition hover:border-zinc-700"
            >
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-radar" />
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-zinc-200">
                  {f.title}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {f.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stack chips */}
        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            / Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="border border-zinc-800 bg-zinc-950 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-zinc-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Demo + GitHub ──────────────────── */

function Demo() {
  return (
    <section
      id="demo"
      className="relative border-b border-zinc-800/80 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          number="03"
          eyebrow="Live Demo"
          title="Watch a MAVLink link get intercepted in plaintext — then watch it disappear."
          subtitle="The fastest way to internalize the threat model is to see the commands stream past in clear text. The capture below shows a SITL-to-GCS session in Wireshark, then re-runs the same session over the VERTEX C2 tunnel."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Video placeholder */}
          <div className="lg:col-span-3">
            <div className="group relative aspect-video overflow-hidden border border-zinc-800 bg-zinc-950">
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px]"
              />
              <CornerTicks />

              <button
                type="button"
                aria-label="Play demo"
                className="absolute inset-0 grid place-items-center"
              >
                <span className="grid h-20 w-20 place-items-center border border-radar/60 bg-black/70 transition group-hover:bg-radar/10 group-hover:shadow-glow">
                  <Play className="h-7 w-7 fill-radar text-radar" />
                </span>
              </button>

              <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-radar" />
                REC · 02:14
              </div>
              <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                vertex-c2 · attack-demo.mp4
              </div>

              <div className="absolute inset-x-0 bottom-0 border-t border-zinc-800 bg-black/80 px-4 py-3 backdrop-blur">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-300">
                  Wireshark capture · MAVLink intercept → WireGuard hardened
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  SITL → GCS · before / after · single host · reproducible
                </div>
              </div>
            </div>
          </div>

          {/* Repo + reproduce */}
          <div className="lg:col-span-2">
            <div className="border border-zinc-800 bg-zinc-950/50">
              <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-5 py-3">
                <div className="flex items-center gap-2">
                  <Github className="h-3.5 w-3.5 text-zinc-400" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-300">
                    MrGuato / vertex-c2
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-radar">
                  PUBLIC
                </span>
              </div>
              <div className="space-y-5 p-5">
                <p className="text-sm leading-relaxed text-zinc-400">
                  Manifests, code, and threat model in one repo. The README is
                  written as a technical brief. Reproduce the attack and the
                  fix on a single Linux host in under ten minutes.
                </p>

                <div className="border border-zinc-800 bg-black p-4 font-mono text-[12px] leading-relaxed">
                  <div>
                    <T k="prompt">{"$ "}</T>git clone
                    https://github.com/MrGuato/vertex-c2
                  </div>
                  <div>
                    <T k="prompt">{"$ "}</T>cd vertex-c2 &amp;&amp; make demo
                  </div>
                  <div className="mt-1">
                    <T k="ok">{"[OK] "}</T>SITL up · GCS up · tunnel verified
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/MrGuato/vertex-c2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 border border-radar bg-radar/10 px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-radar transition hover:bg-radar hover:text-black hover:shadow-glow"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Open Repository
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#"
                    className="group inline-flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-900/40 px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    Read the Write-Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Compliance / CMMC Mapping ──────────────────── */

function Compliance() {
  const controls = [
    {
      id: "AC.L1-3.1.1",
      req: "Limit access to authorized users",
      impl: "WireGuard peer keys · GCS mTLS",
    },
    {
      id: "AC.L1-3.1.2",
      req: "Limit transactions and functions",
      impl: "Traefik route-level RBAC · scoped GCS commands",
    },
    {
      id: "IA.L1-3.5.2",
      req: "Authenticate users and devices",
      impl: "Mutual TLS at ingress · WG pre-shared keys",
    },
    {
      id: "SC.L1-3.13.1",
      req: "Monitor and protect communications",
      impl: "WireGuard tunnel · Prometheus link telemetry",
    },
    {
      id: "SC.L1-3.13.5",
      req: "Subnetwork separation for public-facing components",
      impl: "Cloudflare Tunnel · zero inbound ports on GCS",
    },
    {
      id: "AU.L2-3.3.1",
      req: "Create and retain audit logs",
      impl: "Loki + Promtail capture of all GCS commands",
    },
    {
      id: "AU.L2-3.3.2",
      req: "Ensure individual operator accountability",
      impl: "Per-operator certs · signed FluxCD commit history",
    },
    {
      id: "SC.L2-3.13.8",
      req: "Cryptographic protection in transit",
      impl: "ChaCha20-Poly1305 (data) · TLS 1.3 (control)",
    },
    {
      id: "CM.L2-3.4.1",
      req: "Establish baseline configurations",
      impl: "FluxCD-managed declarative manifests in Git",
    },
    {
      id: "SI.L1-3.14.1",
      req: "Identify, report, and correct system flaws",
      impl: "Prometheus alerting · ingress anomaly metrics",
    },
  ];

  return (
    <section
      id="compliance"
      className="relative border-b border-zinc-800/80 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          number="04"
          eyebrow="CMMC Mapping"
          title="Mapped to the controls DoD contractors actually live inside."
          subtitle="Ten NIST SP 800-171 controls — the load-bearing subset for a hardened C2 stack — with the specific implementation that satisfies each one. The mapping is partial by design: this is research, not an attestation."
        />

        <div className="mt-16 overflow-x-auto border border-zinc-800">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-950/80">
                <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Control
                </th>
                <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Requirement
                </th>
                <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Implementation
                </th>
                <th className="px-5 py-4 text-right font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {controls.map((c, i) => (
                <tr
                  key={c.id}
                  className={`border-b border-zinc-900 transition hover:bg-zinc-950/60 ${
                    i === controls.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="whitespace-nowrap px-5 py-4 align-top font-mono text-xs text-radar">
                    {c.id}
                  </td>
                  <td className="px-5 py-4 align-top text-sm text-zinc-200">
                    {c.req}
                  </td>
                  <td className="px-5 py-4 align-top font-mono text-xs text-zinc-400">
                    {c.impl}
                  </td>
                  <td className="px-5 py-4 align-top text-right">
                    <span className="inline-flex items-center gap-1.5 border border-radar/40 bg-radar/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-radar">
                      <CheckCircle2 className="h-3 w-3" />
                      Satisfied
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-3xl font-mono text-[11px] leading-relaxed text-zinc-500">
          // Note: VERTEX C2 is a research artifact, not a certification
          package. Cryptographic primitives are chosen for transparency and
          reproducibility; FIPS-validated module substitution is documented in
          the repository for environments that require it.
        </p>
      </div>
    </section>
  );
}

/* ──────────────────── About ──────────────────── */

function About() {
  return (
    <section
      id="about"
      className="relative border-b border-zinc-800/80 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          number="05"
          eyebrow="Researcher"
          title="About this project."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-zinc-300 sm:text-xl">
              VERTEX C2 is open security research by a cleared infrastructure
              and security engineer working at the intersection of autonomous
              systems and defense-grade compliance.
            </p>
            <p className="mt-6 leading-relaxed text-zinc-400">
              The project exists to answer a single technical question
              concretely: what does a hardened, zero-trust command and control
              architecture look like for autonomous systems operating in
              environments where the link is actively contested? The repository
              treats that question as engineering work — reproducible, audited,
              and mapped to the compliance frameworks DoD contractors already
              operate within.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:research@example.com"
                className="group inline-flex items-center gap-2 border border-radar bg-radar/10 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-radar transition hover:bg-radar hover:text-black hover:shadow-glow"
              >
                <Mail className="h-3.5 w-3.5" />
                Get in Touch
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jonathan-deleon-cism"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900/40 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-zinc-800 bg-zinc-950/50 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-radar">
                / Project Card
              </div>
              <dl className="mt-6 grid grid-cols-1 gap-5 font-mono text-xs">
                {[
                  { k: "Status", v: "Active research · v0.4.2-α" },
                  { k: "License", v: "Apache 2.0" },
                  { k: "Domain", v: "Autonomous Systems · C2" },
                  { k: "Posture", v: "CMMC L2 — partial map" },
                  { k: "Reproducible", v: "Single Linux host · k3s" },
                  { k: "Scope", v: "SITL only · no live RF" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-baseline justify-between gap-4 border-b border-zinc-900 pb-3 last:border-b-0 last:pb-0"
                  >
                    <dt className="uppercase tracking-[0.2em] text-zinc-500">
                      {row.k}
                    </dt>
                    <dd className="text-right text-zinc-200">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Footer ──────────────────── */

function Footer() {
  const socials = [
    {
      icon: Github,
      href: "https://github.com/MrGuato/vertex-c2",
      label: "GitHub",
    },
    { icon: Linkedin, href: "https://www.linkedin.com/in/jonathan-deleon-cism", label: "LinkedIn" },
    { icon: Mail, href: "mailto:research@example.com", label: "Email" },
  ];

  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <div className="grid h-7 w-7 place-items-center border border-radar/40 bg-radar/10">
              <Shield className="h-3.5 w-3.5 text-radar" strokeWidth={2.5} />
            </div>
            <span className="font-mono text-sm tracking-widest text-zinc-300">
              VERTEX<span className="text-radar">_</span>C2
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center border border-zinc-800 bg-zinc-950 text-zinc-400 transition hover:border-radar hover:text-radar"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-zinc-900 pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} VERTEX C2 · Open Research · No Warranty
          </span>
          <span>UNCLASSIFIED // Distribution A — public release</span>
        </div>
      </div>
    </footer>
  );
}
