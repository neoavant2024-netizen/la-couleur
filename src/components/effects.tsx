import {
  motion,
  useMotionValue,
  useSpring,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect, type ReactNode, type CSSProperties } from "react";
import { useLocation } from "wouter";

export const EASE_LUX = [0.22, 1, 0.36, 1] as const;

/* ───────── Split Text（1文字ずつ blur→クリアで登場） ───────── */
export function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.045,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const chars = Array.from(text);
  return (
    <span className={className} aria-label={text}>
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ opacity: 0, y: "0.6em", filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.85, ease: EASE_LUX, delay: delay + i * stagger }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

/* ───────── Typewriter（打鍵→消去のループ） ───────── */
export function Typewriter({
  phrases,
  className = "",
  typingSpeed = 95,
  deleteSpeed = 45,
  pause = 1700,
}: {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    if (!deleting && sub === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }
    const t = setTimeout(
      () => setSub((s) => s + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typingSpeed,
    );
    return () => clearTimeout(t);
  }, [sub, deleting, index, phrases, typingSpeed, deleteSpeed, pause]);

  const current = phrases[index % phrases.length];
  return (
    <span className={className} aria-live="polite">
      {current.slice(0, sub)}
      <span className="tw-caret" aria-hidden>|</span>
    </span>
  );
}

/* ───────── 浮遊ブロブ背景 ───────── */
export function FloatingBlobs() {
  return (
    <div className="hero__blobs" aria-hidden>
      <motion.span
        className="hero__blob hero__blob--gold"
        animate={{ x: [0, 50, -25, 0], y: [0, -40, 25, 0], scale: [1, 1.18, 0.94, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="hero__blob hero__blob--rose"
        animate={{ x: [0, -45, 30, 0], y: [0, 30, -20, 0], scale: [1, 1.1, 0.96, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="hero__blob hero__blob--cream"
        animate={{ x: [0, 30, -35, 0], y: [0, -25, 30, 0], scale: [1, 1.22, 0.9, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ───────── Ambient Blobs（明るいセクション用の控えめな浮遊光） ───────── */
export function AmbientBlobs() {
  return (
    <div className="amb" aria-hidden>
      <motion.span
        className="amb__blob amb__blob--gold"
        animate={{ x: [0, 44, -22, 0], y: [0, 30, -26, 0], scale: [1, 1.12, 0.95, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="amb__blob amb__blob--rose"
        animate={{ x: [0, -38, 26, 0], y: [0, -26, 22, 0], scale: [1, 1.1, 0.94, 1] }}
        transition={{ duration: 31, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="amb__blob amb__blob--cream"
        animate={{ x: [0, 26, -30, 0], y: [0, -22, 26, 0], scale: [1, 1.15, 0.92, 1] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ───────── 浮遊バブル（シャボン玉風の背景モーション） ───────── */
export function FloatingParticles({ count = 18 }: { count?: number }) {
  const [bubbles] = useState(() =>
    Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      size: 8 + Math.random() * 32,
      dur: 16 + Math.random() * 18,
      delay: -Math.random() * 24,
      sway: (Math.random() * 2 - 1) * 34,
      op: 0.4 + Math.random() * 0.4,
    })),
  );
  return (
    <div className="particles" aria-hidden>
      {bubbles.map((b, i) => {
        const style: CSSProperties = {
          left: `${b.left}%`,
          width: `${b.size}px`,
          height: `${b.size}px`,
        };
        const vars = style as Record<string, string>;
        vars["--dur"] = `${b.dur}s`;
        vars["--delay"] = `${b.delay}s`;
        vars["--sway"] = `${b.sway}px`;
        vars["--op"] = `${b.op}`;
        return <span key={i} className="bubble" style={style} />;
      })}
    </div>
  );
}

/* ───────── 3D ティルト（ポインタ追従の立体感） ───────── */
export function Tilt({
  children,
  className = "",
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(x, { stiffness: 150, damping: 18 });
  const ry = useSpring(y, { stiffness: 150, damping: 18 });
  return (
    <motion.div
      className={className}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        x.set(-py * max * 2);
        y.set(px * max * 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ───────── マグネティックボタン（shine + 内部ルーティング対応） ───────── */
export function MagneticButton({
  children,
  className = "",
  href = "",
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });
  const [, navigate] = useLocation();
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      ref={ref}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={(e) => {
        if (!isExternal && href) {
          e.preventDefault();
          navigate(href);
        }
      }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

/* ───────── カウントアップ ───────── */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1800;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ───────── マスク・リビール ───────── */
export function RevealText({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.9, ease: EASE_LUX }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ───────── 立体見出し（スクロールで 3D に起き上がって登場） ───────── */
export function Heading3D({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} style={{ perspective: 800 }}>
      <motion.div
        initial={{ opacity: 0, y: 26, rotateX: 34 }}
        animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 0.9, ease: EASE_LUX }}
        style={{ transformOrigin: "50% 100%" }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ───────── パララックス画像 ───────── */
export function ParallaxImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} style={{ y }} className="w-full h-[124%] object-cover" />
    </div>
  );
}
