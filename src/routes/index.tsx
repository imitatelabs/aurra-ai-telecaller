import { createFileRoute, Link } from "@tanstack/react-router";
import heroVideo from "@/assets/hero-bg-v5.mp4.asset.json";
import aurraLogoUrl from "@/assets/aurra-logo.png";
import workerVoice from "@/assets/worker-voice.jpg";
import workerInbound from "@/assets/worker-inbound.jpg";
import workerCrmAsset from "@/assets/worker-crm.jpg.asset.json";
import audioHappy from "@/assets/aurra-happy-ta.mp3?url";
import audioExcited from "@/assets/aurra-excited-ta.mp3?url";
import audioWarm from "@/assets/aurra-warm-ta.mp3?url";
import audioCalm from "@/assets/aurra-calm-ta.mp3?url";
import audioPlayful from "@/assets/aurra-playful-ta.mp3?url";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import useCommerce from "@/assets/usecase-commerce.jpg";
import useFinance from "@/assets/usecase-finance.jpg";
import useEdu from "@/assets/usecase-edu.jpg";
import useRealEstate from "@/assets/usecase-realestate.jpg";
import { ArrowUpRight, Phone, PhoneCall, Database, Languages as LanguagesIcon, Clock, ShieldCheck, Sparkles, Play, Square, Plus, Minus, Wand2, Workflow, Headphones, ShoppingBag, HeartHandshake, GraduationCap, Building2, Star, MessageCircle, FileText, Tag, UserCheck, Users, Check, X, TrendingUp, Zap } from "lucide-react";
import reelV2 from "@/assets/hero-bg-v2.mp4.asset.json";
import reelV3 from "@/assets/hero-bg-v3.mp4.asset.json";
import reelV4 from "@/assets/hero-bg-v4.mp4.asset.json";
import { Mail } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { WaitlistDialog } from "@/components/waitlist-dialog";

function resolveMediaUrl(url?: string): string {
  if (!url) return "";
  if (url.startsWith("/__l5e/")) {
    return `https://id-preview--cf67799f-dbb5-4a0c-a174-2f3a502568cc.lovable.app${url}`;
  }
  return url;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    // If already in view on mount, animate immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setAnimate(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setAnimate(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 1,
        animation: animate
          ? `reveal-in 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms both`
          : undefined,
      }}
    >
      {children}
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurra — AI Telecallers that close" },
      { name: "description", content: "Aurra is the AI telecaller for modern sales teams. Human-like voice agents that qualify, book and follow up — 24/7, in 30+ languages." },
      { property: "og:title", content: "Aurra — AI Telecallers that close" },
      { property: "og:description", content: "Human-like AI voice agents that qualify, book and follow up — 24/7, in 30+ languages." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      
      <Nav />
      <Hero />
      <Experience />
      <LanguagesSection />
      <Capabilities />
      <UseCases />
      <Logos />
      <HowItWorks />
      <Workers />
      <AllInOne />
      <Reels />
      <Testimonials />
      <Stats />
      <FAQ />
      <CTA />
      <ContactUs />
      <Footer />
    </div>
  );
}

function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
      <path d="M6 26 L16 4 L26 26 M10.5 18 H21.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "top-0 border-b border-white/10 bg-black"
          : "top-0 bg-black"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 transition-all duration-300 ${scrolled ? "py-2" : "py-2.5 sm:py-3"}`}>
        <a href="/" className="flex items-center text-foreground" aria-label="Aurra — AI Powered Sales Agent">
          <img src={aurraLogoUrl} alt="Aurra" className={`w-auto transition-all duration-300 ${scrolled ? "h-[4.375rem] md:h-20" : "h-20 md:h-[6.25rem]"}`} />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-foreground/85 md:flex">
          <a href="#workers" className="hover:text-foreground">Product</a>
          <a href="#platform" className="hover:text-foreground">Platform</a>
          <a href="#solutions" className="hover:text-foreground">Solutions</a>
          <a href="#customers" className="hover:text-foreground">Customers</a>
          <a href="#company" className="hover:text-foreground">Company</a>
        </nav>
        <Link to="/bookdemo" className="aurra-cta px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm">
          <PhoneCall className="aurra-cta-icon h-3.5 w-3.5" />
          <span className="aurra-cta-label">Book Your Free Demo</span>
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <video
        src={resolveMediaUrl(heroVideo.url)}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center] sm:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/70 via-background/10 to-transparent" />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-14 pt-32 sm:px-6 sm:pb-20 sm:pt-48">
        <h1 className="max-w-5xl text-[12vw] font-semibold leading-[0.95] tracking-[-0.04em] text-foreground animate-fade-in sm:text-[10vw] lg:text-[8.5vw]">
          AI telecallers,
          <br />
          <span className="font-normal italic text-foreground/95">human conversations.</span>
        </h1>

        <div className="mt-8 max-w-2xl sm:mt-10">
          <div className="h-px w-full bg-foreground/30" />
          <p className="mt-5 text-sm text-foreground/85 sm:mt-6 sm:text-lg">
            Aurra is the AI voice workforce for sales, support and operations teams.
          </p>
          <div className="mt-7 hidden flex-wrap items-center gap-3 sm:mt-8 sm:flex">
            <Link to="/bookdemo" className="aurra-cta px-7 py-4 text-sm sm:px-9 sm:py-[1.15rem] sm:text-base">
              <PhoneCall className="aurra-cta-icon h-4 w-4 sm:h-[1.05rem] sm:w-[1.05rem]" />
              <span className="aurra-cta-label">Book Your Free Demo</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-6 bottom-10 hidden max-w-xs animate-fade-in rounded-2xl border border-white/15 bg-black/50 p-4 backdrop-blur-md lg:block lg:bottom-16">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
            <span className="relative flex h-2.5 w-2.5 rounded-full bg-accent" />
          </div>
          <p className="text-xs uppercase tracking-widest text-foreground/70">Live · Outbound</p>
        </div>
        <p className="mt-3 text-sm text-foreground">Aurra is talking with <span className="font-medium">Mia, VP Sales @ Rillet</span></p>
        <p className="mt-1 text-xs text-foreground/60">Meeting booked for Thursday, 11:30 AM</p>
      </div>
    </section>
  );
}

function Logos() {
  const logos = ["Xerox", "Rillet", "Checkr", "Armanino", "Rogo", "Leica", "Rho", "Ouster"];
  return (
    <section id="customers" className="border-y border-white/5 bg-background py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by go-to-market teams worldwide
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 opacity-70 sm:grid-cols-4 lg:grid-cols-8">
          {logos.map((l) => (
            <div key={l} className="text-center text-xl font-semibold tracking-tight text-foreground/80">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workers() {
  const workers = [
    { name: "Aurra Voice", role: "AI Outbound Caller", desc: "Dials your list, qualifies in real time and books meetings straight into your calendar.", icon: PhoneCall, status: "Autopilot", img: workerVoice },
    { name: "Aurra CRM", role: "Self-Updating CRM", desc: "A fully integrated CRM that AI updates and maintains after every call — contacts, notes, next steps, all in sync.", icon: Database, status: "Auto-sync", img: workerCrmAsset.url },
    { name: "Aurra Inbound", role: "24/7 Phone Agent", desc: "Answers every inbound call instantly. Routes, resolves and escalates with human nuance.", icon: Phone, status: "Active", img: workerInbound },
  ];
  return (
    <section
      id="workers"
      className="relative overflow-hidden py-16 md:py-20"
      style={{
        background:
          "linear-gradient(180deg, var(--background) 0%, var(--surface-dusk) 50%, var(--background) 100%)",
        color: "var(--foreground)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_80%)]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[var(--surface-ember)]/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[var(--accent)]/15 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Meet the workforce</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            One platform. <span className="font-normal italic opacity-80">Every conversation.</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/75">
            Aurra's voice agents don't just automate calls — they transform pipeline. 24/7 operations, 30+ languages, human-grade reasoning.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workers.map((w, i) => (
            <Reveal key={w.name} delay={i * 140}>
              <article className="group relative h-[560px] overflow-hidden rounded-3xl border border-white/15 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:aspect-[3/4] sm:h-auto">
              <img src={w.img} alt={w.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-widest text-white/85 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {w.status}
                </div>
                <w.icon className="h-5 w-5 text-white/80 transition-transform duration-500 group-hover:scale-110 group-hover:text-accent" />
              </div>
              <div className="relative flex h-full flex-col justify-end p-6 transition-transform duration-500 group-hover:-translate-y-1">
                <p className="text-xs uppercase tracking-widest text-accent">{w.role}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{w.name}</h3>
                <p className="mt-3 text-sm text-white/80">{w.desc}</p>
                <a href="#demo" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent">
                  Hire {w.name.split(" ")[1]} <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </a>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { icon: Clock, k: "24/7", v: "Always on, never sleeps" },
    { icon: LanguagesIcon, k: "30+", v: "Languages, native fluency" },
    { icon: Sparkles, k: "<200ms", v: "End-to-end voice latency" },
    { icon: ShieldCheck, k: "SOC 2", v: "Enterprise-grade security" },
  ];
  return (
    <section id="platform" className="border-t border-white/5 bg-background py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.k} className="flex flex-col gap-3">
            <s.icon className="h-5 w-5 text-accent" />
            <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{s.k}</p>
            <p className="text-sm text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="demo" className="relative overflow-hidden bg-background py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Hire your first
          <br />
          <span className="font-normal italic text-accent">AI telecaller today.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          Set up a campaign in minutes. See the first booked meeting before lunch.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/bookdemo" className="aurra-cta px-8 py-4 text-sm sm:px-10 sm:py-[1.15rem] sm:text-base">
            <PhoneCall className="aurra-cta-icon h-4 w-4 sm:h-[1.05rem] sm:w-[1.05rem]" />
            <span className="aurra-cta-label">Book Your Free Demo</span>
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-40 mx-auto h-80 max-w-3xl rounded-full bg-accent/30 blur-[120px]" />
    </section>
  );
}

type Script = {
  id: string;
  label: string;
  tone: string;
  accent: string;
  text: string;
  meta: string;
  audio: string;
};

const SCRIPTS: Script[] = [
  {
    id: "playful",
    label: "Playful",
    tone: "Cheeky",
    accent: "Tanglish",
    text: "ஐயோ, voicemail-க்கு போயிடாதீங்க பா! நான் Aurra, ஒரு friendly AI. ஒரே ஒரு question — coffee or chai, நீங்க எது team?",
    meta: "Aurra · brand",
    audio: audioPlayful,
  },
  {
    id: "warm",
    label: "Warm",
    tone: "Sensual & soft",
    accent: "Tanglish",
    text: "Hey... busy-ஆ இருக்கீங்களா? கொஞ்சம் ரெண்டே நிமிஷம் தான்... உங்களுக்கு perfect-ஆ ஒரு plan இருக்கு, கேக்கறீங்களா?",
    meta: "Aurra · concierge",
    audio: audioWarm,
  },
  {
    id: "happy",
    label: "Happy",
    tone: "Cheerful",
    accent: "Tanglish",
    text: "Hi டா! நான் Aurra பேசுறேன். Super news — உங்க loan fully approved ஆயிடுச்சு. Ready to take the next step?",
    meta: "Aurra · outbound",
    audio: audioHappy,
  },
  {
    id: "excited",
    label: "Excited",
    tone: "Hyped",
    accent: "Tanglish",
    text: "ரொம்ப thanks for picking up! நீங்க கேட்ட offer-க்கு இப்போ flat 40% off போட்டிருக்காங்க — only today மட்டும்!",
    meta: "Aurra · campaign",
    audio: audioExcited,
  },
  {
    id: "calm",
    label: "Calm",
    tone: "Reassuring",
    accent: "Tanglish",
    text: "Don't worry, நான் இருக்கேன். உங்க payment fail ஆயிருக்கு, card expire ஆயிடுச்சு போல. Step by step-ஆ நான் help பண்றேன், okay-வா?",
    meta: "Aurra · support",
    audio: audioCalm,
  },
];

function Experience() {
  const [activeId, setActiveId] = useState<string>(SCRIPTS[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intensity, setIntensity] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const tickRef = useRef<number | null>(null);

  const active = useMemo(
    () => SCRIPTS.find((s) => s.id === activeId) ?? SCRIPTS[0],
    [activeId],
  );

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (tickRef.current) cancelAnimationFrame(tickRef.current);
    };
  }, []);

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    if (tickRef.current) cancelAnimationFrame(tickRef.current);
    tickRef.current = null;
    setIsPlaying(false);
    setIntensity(0);
  };

  const play = () => {
    if (typeof window === "undefined") return;
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const a = new Audio(active.audio);
    a.preload = "auto";
    a.onplay = () => {
      setIsPlaying(true);
      const loop = () => {
        setIntensity(0.5 + Math.random() * 0.5);
        tickRef.current = requestAnimationFrame(loop);
      };
      loop();
    };
    a.onended = () => stop();
    a.onerror = () => stop();
    audioRef.current = a;
    a.play().catch(() => stop());
  };

  const select = (id: string) => {
    stop();
    setActiveId(id);
  };

  return (
    <>
      <SectionFade from="var(--background)" to="var(--surface-cream)" />
      <section
        id="experience"
        className="relative overflow-hidden py-10 md:py-20"
        style={{ background: "var(--surface-cream)", color: "var(--surface-cream-foreground)" }}
      >
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-[oklch(0.72_0.15_55)]/25 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[var(--tertiary)]/25 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "oklch(0.42 0.16 40)" }}>Hear it for yourself</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                Press play.
                <br />
                <span className="font-normal italic opacity-70">Meet Aurra.</span>
              </h2>
              <p className="mt-4 text-base opacity-75 sm:mt-6 sm:text-lg">
                Pick a scenario and hear how Aurra sounds on a real call — warm, fluent and unmistakably human.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl border border-black/10 bg-white/60 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] opacity-60">Now playing</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">{active.label} · {active.tone}</p>
                <p className="mt-1 text-sm opacity-60">{active.meta}</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-8 max-w-6xl sm:mt-14">
            <div className="absolute -inset-x-10 -inset-y-8 -z-10 rounded-[2.5rem] bg-gradient-to-b from-[oklch(0.72_0.15_55)]/20 via-transparent to-transparent blur-3xl" />

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_50px_120px_-30px_rgba(60,30,10,0.45)]">
              <div className="grid gap-0 md:grid-cols-[1fr_1.15fr]">
                {/* LEFT — Stage */}
                <div className="relative overflow-hidden p-4 sm:p-10" style={{ background: "linear-gradient(160deg, oklch(0.22 0.05 40) 0%, oklch(0.16 0.04 35) 100%)", color: "oklch(0.97 0.02 80)" }}>
                  <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[oklch(0.72_0.15_55)]/30 blur-[100px]" />
                  <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-[var(--quaternary)]/30 blur-[120px]" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-accent to-accent/40 text-base font-semibold text-accent-foreground">
                        A
                        <span className={`absolute inset-0 rounded-full ring-2 ring-accent/60 ${isPlaying ? "animate-ping" : "opacity-0"}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Aurra</p>
                        <p className="flex items-center gap-1.5 text-xs opacity-70">
                          <span className={`h-1.5 w-1.5 rounded-full ${isPlaying ? "bg-accent" : "bg-current opacity-50"}`} />
                          {isPlaying ? "Live call" : "Standby"}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-widest text-accent">{active.tone}</div>
                      <div className="text-[10px] uppercase tracking-widest opacity-60">{active.accent}</div>
                    </div>
                  </div>

                  {/* Orb */}
                  <div className="relative my-4 grid place-items-center sm:my-12">
                    <div
                      className="absolute inset-0 m-auto h-28 w-28 rounded-full blur-2xl transition-opacity duration-500 sm:h-56 sm:w-56"
                      style={{
                        background: "radial-gradient(circle at 30% 30%, oklch(0.78 0.18 60) 0%, oklch(0.45 0.18 30) 60%, transparent 75%)",
                        opacity: isPlaying ? 0.6 + intensity * 0.4 : 0.35,
                      }}
                    />
                    <button
                      onClick={isPlaying ? stop : play}
                      aria-label={isPlaying ? "Stop preview" : "Play preview"}
                      className="relative grid h-24 w-24 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-transform hover:scale-[1.03] sm:h-44 sm:w-44"
                      style={{ transform: `scale(${1 + (isPlaying ? intensity * 0.04 : 0)})` }}
                    >
                      <span
                        className="absolute inset-2 rounded-full"
                        style={{
                          background: "radial-gradient(circle, oklch(0.78 0.18 60) 0%, oklch(0.42 0.16 40) 70%, oklch(0.22 0.05 40) 100%)",
                          opacity: 0.9,
                        }}
                      />
                      <span
                        className="absolute inset-0 rounded-full ring-1 ring-accent/40"
                        style={{ opacity: isPlaying ? 0.4 + intensity * 0.5 : 0 }}
                      />
                      <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white text-[oklch(0.18_0.04_40)] shadow-xl sm:h-16 sm:w-16">
                        {isPlaying ? <Square className="h-4 w-4 fill-current sm:h-5 sm:w-5" /> : <Play className="ml-0.5 h-5 w-5 fill-current sm:h-6 sm:w-6" />}
                      </span>
                    </button>
                  </div>

                  <Waveform isPlaying={isPlaying} intensity={intensity} />

                  <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] opacity-50 sm:mt-6">
                    {isPlaying ? "Speaking · live preview" : "Tap to hear Aurra"}
                  </p>
                </div>

                {/* RIGHT — Transcript + scenarios */}
                <div className="flex flex-col p-4 sm:p-10">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-60">Transcript</p>
                    <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "oklch(0.42 0.16 40)" }}>{active.meta}</p>
                  </div>
                  <div className="mt-3 flex-1 rounded-2xl border border-black/10 bg-[oklch(0.97_0.02_80)] p-4 sm:mt-4 sm:p-6">
                    <p className="text-sm leading-relaxed sm:text-xl">"{active.text}"</p>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-60">Choose a tone</p>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {SCRIPTS.map((s) => {
                        const isActive = s.id === activeId;
                        return (
                          <button
                            key={s.id}
                            onClick={() => select(s.id)}
                            className={`group relative overflow-hidden rounded-xl border px-4 py-3 text-left transition-all ${
                              isActive
                                ? "border-[oklch(0.42_0.16_40)]/50 bg-[oklch(0.72_0.15_55)]/15"
                                : "border-black/10 bg-white hover:border-black/30"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold">{s.label}</span>
                              {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.42_0.16_40)]" />}
                            </div>
                            <p className="mt-0.5 text-[11px] uppercase tracking-wider opacity-60">{s.tone}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-xs opacity-60">
              Uses your browser's voice for preview. Production voices are studio-grade and indistinguishable from human.
            </p>
          </div>
        </div>
      </section>
      <SectionFade from="var(--surface-cream)" to="var(--background)" />
    </>
  );
}

import langHindi from "@/assets/aurra-lang-hindi.mp3?url";
import langTamil from "@/assets/aurra-lang-tamil.mp3?url";
import langTelugu from "@/assets/aurra-lang-telugu.mp3?url";
import langKannada from "@/assets/aurra-lang-kannada.mp3?url";
import langMalayalam from "@/assets/aurra-lang-malayalam.mp3?url";
import langBengali from "@/assets/aurra-lang-bengali.mp3?url";
import langMarathi from "@/assets/aurra-lang-marathi.mp3?url";
import langGujarati from "@/assets/aurra-lang-gujarati.mp3?url";
import langPunjabi from "@/assets/aurra-lang-punjabi.mp3?url";
import langOdia from "@/assets/aurra-lang-odia.mp3?url";
import langEnglish from "@/assets/aurra-lang-english.mp3?url";

const LANGUAGES = [
  { name: "Hindi",     native: "हिन्दी",   sample: "नमस्ते",          audio: langHindi },
  { name: "Tamil",     native: "தமிழ்",    sample: "வணக்கம்",         audio: langTamil },
  { name: "Telugu",    native: "తెలుగు",   sample: "నమస్తే",          audio: langTelugu },
  { name: "Kannada",   native: "ಕನ್ನಡ",    sample: "ನಮಸ್ಕಾರ",         audio: langKannada },
  { name: "Malayalam", native: "മലയാളം",   sample: "നമസ്കാരം",        audio: langMalayalam },
  { name: "Bengali",   native: "বাংলা",     sample: "নমস্কার",          audio: langBengali },
  { name: "Marathi",   native: "मराठी",    sample: "नमस्कार",         audio: langMarathi },
  { name: "Gujarati",  native: "ગુજરાતી",   sample: "નમસ્તે",          audio: langGujarati },
  { name: "Punjabi",   native: "ਪੰਜਾਬੀ",    sample: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",     audio: langPunjabi },
  { name: "Odia",      native: "ଓଡ଼ିଆ",     sample: "ନମସ୍କାର",          audio: langOdia },
  { name: "English",   native: "English",  sample: "Hello",          audio: langEnglish },
];

function LanguagesSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const playLang = (l: (typeof LANGUAGES)[number]) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (playingId === l.name) {
      setPlayingId(null);
      return;
    }
    const a = new Audio(l.audio);
    audioRef.current = a;
    setPlayingId(l.name);
    a.onended = () => setPlayingId((p) => (p === l.name ? null : p));
    a.play().catch(() => setPlayingId(null));
  };

  return (
    <section
      id="languages"
      className="relative overflow-hidden border-y border-white/5 bg-background py-16 sm:py-24"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[oklch(0.72_0.15_55)]/15 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[24rem] w-[24rem] rounded-full bg-[var(--tertiary)]/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Fluent across India</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            One agent.
            <br />
            <span className="font-normal italic opacity-70">Eleven languages.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Aurra speaks naturally in every major Indian language — with native accents, regional code-mixing, and the cultural warmth your customers expect.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {LANGUAGES.map((l, i) => {
            const isPlaying = playingId === l.name;
            return (
              <button
                key={l.name}
                type="button"
                onClick={() => playLang(l)}
                aria-label={`Preview ${l.name} voice`}
                className={`group relative overflow-hidden rounded-2xl border p-5 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 sm:p-6 ${
                  isPlaying
                    ? "border-accent/60 bg-gradient-to-br from-accent/15 to-accent/5"
                    : "border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] hover:border-accent/40 hover:from-accent/10"
                }`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-opacity duration-500 ${
                    isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                  style={{ background: "radial-gradient(circle, oklch(0.72 0.15 55) 0%, transparent 70%)" }}
                />
                <div className="relative flex items-baseline justify-between gap-2">
                  <span className="truncate text-2xl font-semibold tracking-tight sm:text-3xl">
                    {l.native}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {l.name}
                  </span>
                </div>
                <p className="relative mt-3 truncate text-sm text-foreground/70 sm:text-base">
                  "{l.sample}"
                </p>
                <div className="relative mt-4 flex items-center gap-1.5">
                  {isPlaying ? (
                    <>
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-accent">
                        Playing…
                      </span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3 fill-accent text-accent" />
                      <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-accent">
                        Tap to preview
                      </span>
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground sm:mt-12">
          + Code-mixed Tanglish, Hinglish & regional dialects
        </p>
      </div>
    </section>
  );
}

function Waveform({ isPlaying, intensity }: { isPlaying: boolean; intensity: number }) {
  const bars = 56;
  return (
    <div className="flex h-14 items-center justify-between gap-[3px] sm:h-24">
      {Array.from({ length: bars }).map((_, i) => {
        const center = bars / 2;
        const dist = Math.abs(i - center) / center;
        const base = (1 - dist * 0.7) * (0.35 + 0.65 * Math.abs(Math.sin(i * 0.7)));
        const dynamic = isPlaying ? base * (0.55 + intensity * 0.7) : base * 0.35;
        const height = Math.max(6, dynamic * 96);
        const opacity = isPlaying ? 0.7 + intensity * 0.3 : 0.55;
        return (
          <span
            key={i}
            style={{
              height: `${height}px`,
              opacity,
              transitionDuration: `${120 + (i % 5) * 30}ms`,
            }}
            className="w-[3px] rounded-full bg-gradient-to-t from-accent/60 via-accent to-accent/80 transition-[height,opacity] ease-out sm:w-[4px]"
          />
        );
      })}
    </div>
  );
}

function Footer() {
  return (
    <footer id="company" className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <div className="flex flex-col items-start gap-2">
          <img src={aurraLogoUrl} alt="Aurra — AI Powered Sales Agent" className="h-20 w-auto md:h-[6.25rem]" />
          <a href="https://imitatelabs.ai" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Powered by Imitate Labs
          </a>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Aurra Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Reels() {
  const reels = [
    { src: reelV4.url, title: "Meet Aurra", desc: "A 60-second look at how Aurra runs a live call." },
    { src: reelV3.url, title: "Inside a conversation", desc: "Real-time understanding, tone matching, and natural turn-taking." },
    { src: reelV2.url, title: "Built for your stack", desc: "Connects to your CRM, telephony and tools out of the box." },
    { src: reelV4.url, title: "Live use cases", desc: "From cold outreach to support follow-ups, end-to-end on autopilot." },
  ];
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playing, setPlaying] = useState<number | null>(null);
  const toggle = (i: number) => {
    const v = refs.current[i];
    if (!v) return;
    if (playing === i) {
      v.pause();
      setPlaying(null);
    } else {
      refs.current.forEach((other, j) => { if (other && j !== i) other.pause(); });
      v.play();
      setPlaying(i);
    }
  };
  return (
    <section id="reels" className="relative overflow-hidden border-t border-white/10 bg-background py-14 md:py-20">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">See it in action</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Watch Aurra <span className="font-normal italic opacity-70">at work.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Short product reels showing real conversations, integrations and live use cases.
          </p>
        </div>
        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:snap-none sm:gap-5 sm:overflow-visible sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {reels.map((r, i) => (
            <Reveal key={r.title} delay={i * 120} className="w-[65%] flex-none snap-start sm:w-auto">
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                  <video
                    ref={(el) => { refs.current[i] = el; }}
                    src={resolveMediaUrl(r.src)}
                    className="h-full w-full object-cover"
                    playsInline
                    preload="metadata"
                    onEnded={() => setPlaying((p) => (p === i ? null : p))}
                  />
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-label={playing === i ? "Pause reel" : "Play reel"}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 hover:bg-black/20"
                    style={{ opacity: playing === i ? 0 : 1 }}
                  >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-black shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-5 w-5 translate-x-0.5 fill-current" />
                    </span>
                  </button>
                  {playing === i && (
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-label="Pause reel"
                      className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-black/80"
                    >
                      <Square className="h-4 w-4 fill-current" />
                    </button>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">{r.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactUs() {
  const phone = "+91 9514214416";
  const email = "sales@imitatelabs.ai";
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 py-20 md:py-28" style={{ background: "var(--surface-cream)", color: "var(--surface-cream-foreground)" }}>
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[oklch(0.72_0.15_55)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[oklch(0.42_0.16_40)]/25 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "oklch(0.42 0.16 40)" }}>Contact us</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Let's talk about your <span className="font-normal italic opacity-70">first AI telecaller.</span>
              </h2>
              <p className="mt-6 text-lg opacity-75">
                Have a question, a pilot in mind, or just want to hear Aurra live? We respond within one business day.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid gap-4">
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="group flex items-center gap-5 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:bg-white/90 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full" style={{ background: "oklch(0.42 0.16 40)", color: "white" }}>
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-60">Call us</p>
                  <p className="mt-1 text-xl font-semibold tracking-tight">{phone}</p>
                </div>
              </a>
              <a href={`mailto:${email}`} className="group flex items-center gap-5 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:bg-white/90 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full" style={{ background: "oklch(0.42 0.16 40)", color: "white" }}>
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-60">Email us</p>
                  <p className="mt-1 text-xl font-semibold tracking-tight">{email}</p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionFade({ from, to }: { from: string; to: string }) {
  return (
    <div
      aria-hidden="true"
      className="-my-px h-12 w-full md:h-16"
      style={{
        background: `linear-gradient(to bottom, ${from} 0%, ${to} 100%)`,
      }}
    />
  );
}

function HowItWorks() {
  const steps = [
    { icon: Wand2, k: "01", t: "Design the agent", d: "Pick a voice, drop in your script, set guardrails. Aurra handles the rest — no engineers." },
    { icon: Workflow, k: "02", t: "Plug into your stack", d: "Native connectors for HubSpot, Salesforce, Twilio, Google Calendar and 50+ tools. Live in an afternoon." },
    { icon: Headphones, k: "03", t: "Go live, then learn", d: "Aurra dials, listens, adapts. Every call is transcribed, scored and pushed back into your CRM automatically." },
  ];
  return (
    <>
      <SectionFade from="var(--background)" to="var(--surface-cream)" />
      <section
        id="how"
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: "var(--surface-cream)", color: "var(--surface-cream-foreground)" }}
      >
        <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[oklch(0.72_0.15_55)]/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[oklch(0.42_0.16_40)]/25 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "oklch(0.42 0.16 40)" }}>How it works</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              From idea to first call <span className="font-normal italic opacity-70">in an afternoon.</span>
            </h2>
            <p className="mt-6 text-lg opacity-75">
              No infrastructure, no prompt engineering rabbit holes. Three steps from blank canvas to a voice agent dialing your list.
            </p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.k} delay={i * 140}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-black/20 hover:bg-white/80 hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono opacity-50">{s.k}</span>
                    <s.icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ color: "oklch(0.42 0.16 40)" }} />
                  </div>
                  <h3 className="mt-12 text-2xl font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-base opacity-75">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <SectionFade from="var(--surface-cream)" to="var(--background)" />
    </>
  );
}

function UseCases() {
  const cases = [
    { icon: ShoppingBag, t: "Commerce", d: "Recover abandoned carts, confirm COD orders, win back churned buyers — at the scale of your catalog.", img: useCommerce },
    { icon: HeartHandshake, t: "Financial services", d: "Pre-qualify loans, collect overdue EMIs, KYC follow-ups — fully compliant, fully auditable.", img: useFinance },
    { icon: GraduationCap, t: "Edtech", d: "Counsel leads in their language, book demo classes and reactivate dropped students 24/7.", img: useEdu },
    { icon: Building2, t: "Real estate", d: "Qualify every site-visit lead in seconds. Aurra schedules tours straight into the agent's calendar.", img: useRealEstate },
  ];
  return (
    <section
      id="solutions"
      className="relative overflow-hidden py-16 md:py-20"
      style={{
        background: "linear-gradient(180deg, var(--background) 0%, var(--surface-dusk) 50%, var(--background) 100%)",
        color: "var(--foreground)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_80%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Built for every conversation</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            One workforce, <span className="font-normal italic opacity-80">every industry.</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c, i) => (
            <Reveal key={c.t} delay={i * 120}>
            <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] sm:aspect-[3/4]">
              <img src={c.img} alt={c.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <c.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-3 text-xl font-semibold text-white">{c.t}</h3>
                <p className="mt-2 text-sm text-white/80">{c.d}</p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { q: "Aurra booked 312 demos in its first 30 days. Our SDR team finally focuses on the conversations that matter.", n: "Priya Raghavan", r: "VP Growth, Rillet", img: testimonial1 },
    { q: "The Tanglish voice is uncanny. Our pilot beat the human team on connect rate and conversion in week two.", n: "Arjun Mehta", r: "Head of Sales, Northwind", img: testimonial2 },
    { q: "We replaced four tools with Aurra. The studio is what HubSpot wishes its workflows felt like.", n: "Lena Park", r: "RevOps Lead, Checkr", img: testimonial3 },
  ];
  return (
    <>
      <SectionFade from="var(--background)" to="var(--surface-ivory)" />
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: "var(--surface-ivory)", color: "var(--surface-ivory-foreground)" }}
      >
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[var(--quaternary)]/20 blur-[140px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[var(--tertiary)]/25 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "oklch(0.42 0.16 40)" }}>Loved by revenue teams</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Stories from teams <span className="font-normal italic opacity-70">on Aurra.</span>
            </h2>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {quotes.map((t) => (
              <figure key={t.n} className="flex h-full flex-col rounded-3xl border border-black/10 bg-white p-8 shadow-[0_30px_80px_-30px_rgba(60,30,10,0.25)]">
                <div className="flex gap-0.5" style={{ color: "oklch(0.72 0.15 55)" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 text-lg leading-relaxed">"{t.q}"</blockquote>
                <figcaption className="mt-8 flex items-center gap-3 text-sm">
                  <img src={t.img} alt={t.n} width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-medium">{t.n}</div>
                    <div className="opacity-60">{t.r}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <SectionFade from="var(--surface-ivory)" to="var(--background)" />
    </>
  );
}

function FAQ() {
  const items = [
    { q: "How natural does Aurra actually sound?", a: "Studio-grade. We blend low-latency TTS with prosody control and dynamic interruption handling, so callers consistently can't tell they're talking to AI." },
    { q: "Which languages and accents are supported?", a: "30+ languages out of the box including Tanglish, Hinglish, Spanglish and most regional Indian languages. Custom voices available on Enterprise." },
    { q: "Can Aurra plug into our CRM and dialer?", a: "Yes. Native integrations with Salesforce, HubSpot, Twilio, Plivo, Exotel, Google Calendar and a public REST API for everything else." },
    { q: "How is calling data handled?", a: "SOC 2 Type II, GDPR and DPDP compliant. Recordings and transcripts are encrypted at rest, with optional EU and India data residency." },
    { q: "What does pricing look like?", a: "Usage-based — you pay per minute of conversation, not per seat. Pilots start at zero and scale to millions of calls per month." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <SectionFade from="var(--background)" to="var(--surface-cream)" />
      <section
        id="faq"
        className="relative py-16 md:py-20"
        style={{ background: "var(--surface-cream)", color: "var(--surface-cream-foreground)" }}
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "oklch(0.42 0.16 40)" }}>FAQ</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Answers <span className="font-normal italic opacity-70">before you ask.</span>
            </h2>
            <p className="mt-6 max-w-sm text-base opacity-70">
              Still curious? Our team replies inside a business day — usually faster.
            </p>
          </div>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={it.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-medium">{it.q}</span>
                    {isOpen ? <Minus className="h-5 w-5 shrink-0" /> : <Plus className="h-5 w-5 shrink-0" />}
                  </button>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-300"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p className="pb-6 pr-10 text-base opacity-75">{it.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <SectionFade from="var(--surface-cream)" to="var(--background)" />
    </>
  );
}

function Capabilities() {
  const bullets = [
    { icon: PhoneCall, t: "Makes outbound calls to fresh leads", d: "Aurra dials new leads the moment they enter your CRM — no waiting, no missed windows. Configurable cadence, retries and quiet hours." },
    { icon: MessageCircle, t: "Sends WhatsApp messages with context", d: "Right after the call, Aurra follows up on WhatsApp with the brochure, pricing or booking link — using approved templates." },
    { icon: FileText, t: "Shares info about business, products & services", d: "Trained on your catalog, FAQs and policies. Answers nuanced questions about plans, features, delivery and refunds in real time." },
    { icon: UserCheck, t: "Qualifies leads based on conversation", d: "Aurra asks the right discovery questions, scores intent and budget, and separates hot leads from cold ones automatically." },
    { icon: Tag, t: "Updates CRM with stages, tags and AI summary", d: "Every call is transcribed, tagged and pushed into your CRM with the next best action — no manual data entry, ever." },
    { icon: Users, t: "Assigns leads to human team members", d: "Hot leads get routed to the right rep instantly via round-robin, territory or skill — with full call context attached." },
  ];
  return (
    <>
      <SectionFade from="var(--background)" to="var(--surface-ivory)" />
      <section
        id="capabilities"
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: "var(--surface-ivory)", color: "var(--surface-ivory-foreground)" }}
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[oklch(0.72_0.15_55)]/25 blur-[140px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[oklch(0.42_0.16_40)]/20 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "oklch(0.42 0.16 40)" }}>What Aurra does</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Works like a <span className="font-normal italic opacity-70">fully functional tele-sales employee.</span>
            </h2>
            <p className="mt-6 text-lg opacity-75">
              From the first dial to a closed-loop CRM update — Aurra runs the entire top-of-funnel motion, end to end.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {bullets.map((b, i) => (
              <Reveal key={b.t} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(60,30,10,0.25)]">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[oklch(0.72_0.15_55)]/15 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ color: "oklch(0.42 0.16 40)" }}>
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">{b.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-75">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-14">
            <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-[oklch(0.22_0.05_40)] to-[oklch(0.16_0.04_35)] p-8 text-[oklch(0.97_0.02_80)] sm:p-12">
              <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">100% Reliable · 100% Consistent · 100% Available</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Pick an Aurra agent that fits <span className="font-normal italic opacity-80">your sales process.</span>
                  </h3>
                  <p className="mt-4 max-w-lg opacity-75">
                    Outbound dialer, inbound receptionist, CRM auto-updater or a multilingual hybrid — every agent is purpose-built and ready in a day.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { k: "100%", v: "Pickup rate" },
                    { k: "0min", v: "Wait time" },
                    { k: "24/7", v: "On the dial" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                      <p className="text-2xl font-semibold tracking-tight">{s.k}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-widest opacity-60">{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <SectionFade from="var(--surface-ivory)" to="var(--background)" />
    </>
  );
}

function AllInOne() {
  const rows = [
    { f: "AI outbound calling", aurra: true, others: "Separate dialer tool" },
    { f: "WhatsApp follow-ups", aurra: true, others: "Separate BSP subscription" },
    { f: "Auto-updating CRM", aurra: true, others: "Manual data entry" },
    { f: "Lead qualification & scoring", aurra: true, others: "Custom workflows / engineers" },
    { f: "Call transcripts & AI summaries", aurra: true, others: "Add-on tool" },
    { f: "Smart lead routing to reps", aurra: true, others: "Another automation tool" },
    { f: "30+ languages, native accents", aurra: true, others: "English only / limited" },
    { f: "Setup time", aurra: "1 afternoon", others: "Weeks of integration" },
  ];
  return (
    <section
      id="value"
      className="relative overflow-hidden py-16 md:py-20"
      style={{
        background: "linear-gradient(180deg, var(--background) 0%, var(--surface-dusk) 50%, var(--background) 100%)",
        color: "var(--foreground)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_80%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">All-in-one platform</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Why pay for 5 tools <span className="font-normal italic opacity-80">when one does it all?</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/75">
            Telephony, WhatsApp, CRM, AI agent and analytics — stitched into one seamless platform. No duct tape, no per-tool seat fees.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-sm">
            <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-white/10 px-6 py-5 text-xs uppercase tracking-[0.2em] text-foreground/60">
              <div>Capability</div>
              <div className="text-center text-accent">Aurra</div>
              <div className="text-center">Stitched stack</div>
            </div>
            {rows.map((r, i) => (
              <div
                key={r.f}
                className={`grid grid-cols-[1.5fr_1fr_1fr] items-center px-6 py-5 text-sm transition-colors hover:bg-white/[0.04] ${i !== rows.length - 1 ? "border-b border-white/5" : ""}`}
              >
                <div className="font-medium text-foreground">{r.f}</div>
                <div className="flex justify-center">
                  {r.aurra === true ? (
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="text-foreground/90">{r.aurra}</span>
                  )}
                </div>
                <div className="flex justify-center text-center text-foreground/60">
                  {typeof r.others === "string" ? (
                    <span className="flex items-center gap-2">
                      <X className="h-4 w-4 text-foreground/40" />
                      <span>{r.others}</span>
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { icon: Zap, t: "Live in an afternoon", d: "Connect your CRM, upload a script, go live the same day." },
            { icon: TrendingUp, t: "3× pipeline coverage", d: "Aurra dials every lead in under 60 seconds — no leakage." },
            { icon: ShieldCheck, t: "Compliant by default", d: "DPDP, GDPR & SOC 2. Recordings encrypted and auditable." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 100}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <b.icon className="h-5 w-5 text-accent" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{b.t}</h3>
                <p className="mt-2 text-sm text-foreground/70">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}