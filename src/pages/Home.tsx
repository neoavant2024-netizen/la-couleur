import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Nav, Footer } from "@/components/Layout";
import {
  SplitText,
  Typewriter,
  FloatingBlobs,
  AmbientBlobs,
  FloatingParticles,
  Tilt,
  MagneticButton,
  Counter,
  RevealText,
  Heading3D,
  ParallaxImage,
} from "@/components/effects";

const HERO = "/images/gallery/gallery-1.webp";
const CARE = "/images/gallery/gallery-2.webp";
const HERO_NEW = "/images/gallery/gallery-3.webp";
const GALLERY1 = "/images/gallery/gallery-4.webp";
const GALLERY2 = "/images/gallery/gallery-5.webp";
const SALON = "/images/salon-interior-2.webp";

const HERO_SLIDES = [HERO, CARE, HERO_NEW, GALLERY1, GALLERY2];
const GALLERY_PREVIEW = [
  "/images/gallery/gallery-1.webp",
  "/images/gallery/gallery-2.webp",
  "/images/gallery/gallery-3.webp",
  "/images/gallery/gallery-4.webp",
  "/images/gallery/gallery-5.webp",
  "/images/gallery/gallery-6.webp",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // マウススポットライト
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  // 2層スポットライト：暗い所＝温かい光(screen)／白い所＝灰色(multiply) で常に視認可能
  const spotWarm = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgba(255,201,128,0.32), transparent 60%)`;
  const spotGray = useMotionTemplate`radial-gradient(520px circle at ${mx}% ${my}%, rgba(60,56,52,0.24), transparent 62%)`;

  const [slide, setSlide] = useState(0);
  const next = useCallback(() => setSlide((p) => (p + 1) % HERO_SLIDES.length), []);
  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden bg-stone-900"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set(((e.clientX - r.left) / r.width) * 100);
          my.set(((e.clientY - r.top) / r.height) * 100);
        }}
      >
        {/* スライドショー */}
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <AnimatePresence mode="sync">
            <motion.img
              key={slide}
              src={HERO_SLIDES[slide]}
              alt="ネイル施術事例"
              initial={{ opacity: 0, scale: 1.12 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/35 to-stone-900/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/35 via-transparent to-stone-900/20" />
          {/* テキスト直下を確実に暗くするスクリム（明るいスライドでも白文字が沈まないように） */}
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-stone-950/92 via-stone-950/45 to-transparent" />
        </motion.div>

        {/* 浮遊ブロブ */}
        <FloatingBlobs />

        {/* マウススポットライト（2層：温かい光 + 灰色） */}
        <motion.div aria-hidden className="spotlight-layer hidden md:block" style={{ background: spotWarm, mixBlendMode: "screen" }} />
        <motion.div aria-hidden className="spotlight-layer hidden md:block" style={{ background: spotGray, mixBlendMode: "multiply" }} />

        {/* スライド進捗バー */}
        <div className="absolute top-0 left-0 right-0 z-20 h-0.5 bg-white/10">
          <motion.div
            key={slide}
            className="h-full bg-gradient-to-r from-amber-200/70 to-white/60"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5.5, ease: "linear" }}
          />
        </div>

        {/* インジケータ */}
        <div className="absolute bottom-8 right-6 md:right-10 z-20 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`スライド ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === slide ? "bg-amber-200 w-10" : "bg-white/30 w-4 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* ヒーローテキスト */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroTextY }}
          className="relative z-20 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 max-w-[1440px] mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="fluid-eyebrow gold-text uppercase mb-5 md:mb-7"
          >
            Utsunomiya Nail Salon
          </motion.p>

          <h1 className="fluid-title font-bold font-serif mb-3">
            <SplitText text="爪の育成サロン" className="text-white text-glow" delay={0.6} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fluid-script font-display italic glossy-text mb-7"
          >
            〜la couleur ラ クルール〜
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="fluid-lead text-white/75 max-w-2xl leading-relaxed mb-10 min-h-[2.2em]"
          >
            深爪・噛み癖・巻爪——
            <Typewriter
              className="text-amber-100 font-medium"
              phrases={["あなたの指先を、自信へ。", "コンプレックスを、美しさへ。", "健康な自爪を、育てます。"]}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="flex gap-4 flex-wrap"
          >
            <MagneticButton
              href="https://lin.ee/lHrYHQF"
              className="btn-shine bg-white text-stone-800 fluid-lead px-9 md:px-10 py-4 rounded-full font-medium shadow-2xl"
            >
              LINE予約する
            </MagneticButton>
            <MagneticButton
              href="/about"
              className="btn-shine border border-white/40 text-white fluid-lead px-9 md:px-10 py-4 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              詳しく見る
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* スクロールインジケータ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-6 md:left-10 z-20 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-gradient-to-b from-amber-200/70 to-transparent"
          />
          <span className="text-white/40 text-xs tracking-widest uppercase -rotate-90 origin-left translate-x-3">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="py-14 md:py-16 bg-[#edecf1] border-y border-stone-200/70">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {[
            { value: 20, suffix: "年+", label: "ネイリスト歴" },
            { value: 9, suffix: "時〜", label: "朝オープン" },
            { value: 1, suffix: "対1", label: "完全個室" },
            { value: 5500, suffix: "円〜", label: "巻爪ケア" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <p className="font-serif text-3xl md:text-5xl font-bold text-stone-700 group-hover:text-[#a96f88] transition-colors duration-500">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-stone-400 text-sm mt-2 tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════ CONCEPT（Bento Grid） ═══════════════ */}
      <section className="py-24 md:py-36 bg-white relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#b58aa0] text-sm tracking-[0.4em] mb-4"
            >
              CONCEPT
            </motion.p>
            <Heading3D className="fluid-h2 text-stone-800 font-bold font-serif heading-emboss">
              <span>爪の</span>
              <span className="rose-text">「美」</span>
              <span>と</span>
              <span className="whitespace-nowrap">
                <span className="rose-text">「健康」</span>を両立
              </span>
            </Heading3D>
          </div>

          <div className="bento [perspective:1200px]">
            {/* リードタイル */}
            <Tilt
              max={4}
              className="bento__tile bento__tile--glass md:col-span-4 p-8 md:p-11 flex flex-col justify-between min-h-[260px]"
            >
              <div className="bento__sheen" />
              <div className="relative">
                <span className="font-display text-5xl md:text-6xl rose-text">la couleur</span>
                <p className="text-stone-600 fluid-lead leading-[2] mt-6">
                  la couleur（ラ クルール）は、宇都宮の自爪育成・深爪矯正専門サロン。JNAネイリスト検定1級・メディカルネイルプランナーの資格を持つ歴20年以上のオーナーが、お一人おひとりの爪の状態に合わせた最適な施術プランをご提案します。
                </p>
              </div>
              <div className="relative mt-8 flex flex-wrap gap-2">
                {["自爪育成", "深爪矯正", "巻爪ケア", "フィルイン", "パラジェル"].map((t) => (
                  <span key={t} className="px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-500 text-xs md:text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </Tilt>

            {/* 写真タイル */}
            <Tilt max={5} className="bento__tile md:col-span-2 min-h-[220px]">
              <img src={SALON} alt="サロン内装" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/75 via-stone-900/10 to-transparent" />
              <div className="bento__sheen" />
              <div className="absolute bottom-0 left-0 p-7 md:p-8">
                <p className="text-white/80 text-xs tracking-[0.3em] mb-1">PRIVATE SALON</p>
                <p className="text-white text-xl md:text-2xl font-serif font-bold">完全個室の<br />プライベート空間</p>
              </div>
            </Tilt>

            {/* 特徴タイル 01 / 02 / 03（横並び・同じ高さ） */}
            {[
              { num: "01", title: "自爪育成・深爪矯正・巻爪ケア", desc: "「ヌング育成法」による専門アプローチで、深爪・噛み癖・凹凸などのトラブル爪を健康的な美爪へ。足の巻爪矯正・角質除去にも対応。" },
              { num: "02", title: "フィルイン・スカルプ・チップ", desc: "爪に優しいフィルイン専門。パラジェルと一層残し技術で自爪を傷めず、長さ出しやチップジェルにも対応します。" },
              { num: "03", title: "完全個室・朝9時オープン", desc: "1対1の丁寧なカウンセリング。朝9時オープン、LRT徒歩圏内・駐車場完備で通いやすさも魅力です。" },
            ].map((f) => (
              <Tilt key={f.num} max={6} className="bento__tile md:col-span-2 p-7 md:p-8 min-h-[210px] flex flex-col">
                <div className="bento__sheen" />
                <span className="relative font-display text-5xl rose-text">{f.num}</span>
                <h3 className="relative text-lg md:text-xl text-stone-800 font-bold mt-3 mb-2 font-serif">
                  {f.title}
                </h3>
                <p className="relative text-stone-500 text-sm md:text-base leading-[1.85]">{f.desc}</p>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MENU（Bento） ═══════════════ */}
      <section className="py-24 md:py-36 bg-[#edecf1] relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="text-center mb-14 md:mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#b58aa0] text-sm tracking-[0.4em] mb-4"
            >
              MENU
            </motion.p>
            <Heading3D className="fluid-h2 font-bold font-serif heading-3d">施術メニュー</Heading3D>
          </div>

          <div className="bento [perspective:1200px]">
            {[
              { title: "自爪育成コース", desc: "トラブル爪を健康的で美しい爪へ", img: HERO_NEW, link: "/menu/nail-growth", badge: "人気No.1", span: "md:col-span-4" },
              { title: "深爪矯正", desc: "深爪・噛み癖を改善し美しい爪へ", img: CARE, link: "/menu/deep-nail", badge: "", span: "md:col-span-2" },
              { title: "巻爪ケア", desc: "痛みの軽減と形状改善", img: GALLERY1, link: "/menu/ingrown", badge: "", span: "md:col-span-2" },
              { title: "ジェルネイル", desc: "爪を削らないパラジェル使用", img: GALLERY2, link: "/menu/gel-nail", badge: "", span: "md:col-span-4" },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
                className={m.span}
              >
                <Tilt max={5} className="h-full">
                  <Link
                    href={m.link}
                    className="bento__tile group block relative h-64 md:h-72"
                  >
                    <img
                      src={m.img}
                      alt={m.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent group-hover:from-black/85 transition-all duration-500" />
                    <div className="bento__sheen opacity-30" />
                    {m.badge && (
                      <span className="absolute top-5 right-5 bg-white/90 text-stone-700 text-xs px-4 py-1.5 rounded-full font-medium shadow-lg">
                        {m.badge}
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                      <h3 className="text-white text-2xl md:text-3xl font-bold mb-1.5 font-serif group-hover:translate-x-1.5 transition-transform duration-500">
                        {m.title}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base group-hover:text-white/90 transition-colors">
                        {m.desc}
                      </p>
                      <span className="inline-block mt-3 text-amber-100/70 text-sm border-b border-amber-100/30 pb-0.5 group-hover:text-amber-100 group-hover:border-amber-100/60 transition-all">
                        詳しく見る →
                      </span>
                    </div>
                  </Link>
                </Tilt>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block text-stone-500 text-base border-b-2 border-stone-200 pb-1 hover:border-[#c8a3b3] hover:text-[#a96f88] transition-colors"
            >
              メニュー一覧・料金を見る →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ GALLERY ═══════════════ */}
      <section className="py-24 md:py-36 bg-white relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="text-center mb-14 md:mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#b58aa0] text-sm tracking-[0.4em] mb-4"
            >
              GALLERY
            </motion.p>
            <Heading3D className="fluid-h2 font-bold font-serif heading-3d">施術事例</Heading3D>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {GALLERY_PREVIEW.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-[1.5rem] overflow-hidden aspect-[3/4] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
              >
                <img
                  src={img}
                  alt={`施術事例 ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-block text-stone-500 text-base border-b-2 border-stone-200 pb-1 hover:border-[#c8a3b3] hover:text-[#a96f88] transition-colors"
            >
              施術事例をもっと見る →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ SALON ═══════════════ */}
      <section className="py-24 md:py-36 bg-[#edecf1] relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles count={12} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ParallaxImage src={SALON} alt="サロン内装" className="rounded-[2rem] h-[400px] md:h-[550px] shadow-xl" />
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-[#b58aa0] text-sm tracking-[0.4em] mb-4">SALON</p>
            <div className="mb-6">
              <Heading3D className="fluid-h2 font-bold font-serif heading-3d">
                完全個室の<br />プライベートサロン
              </Heading3D>
            </div>
            <p className="text-stone-500 fluid-lead leading-[2] mb-4">
              完全個室のプライベート空間で、1対1の丁寧なカウンセリングと施術をご提供。朝9時からオープン、LRT徒歩圏内・駐車場完備で通いやすいサロンです。
            </p>
            <p className="text-stone-400 text-sm mb-8">
              〒321-0941 栃木県宇都宮市東今泉2丁目5-5<br />TEL: 070-6948-1551
            </p>
            <MagneticButton
              href="/access"
              className="btn-shine inline-block bg-stone-800 text-white text-base px-8 py-4 rounded-full hover:bg-stone-900 transition-colors shadow-lg"
            >
              アクセスを見る
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-stone-900">
        <motion.div className="absolute inset-0" initial={{ opacity: 0.12 }} whileInView={{ opacity: 0.18 }} viewport={{ once: true }}>
          <img src={HERO} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-stone-900/40" />
        </motion.div>
        <FloatingBlobs />
        <div className="relative z-20 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <RevealText className="fluid-h2 font-bold glossy-text font-serif">
              まずはお気軽にご相談ください
            </RevealText>
            <p className="text-white/65 fluid-lead leading-relaxed mt-8 mb-12">
              爪のお悩み、何でもお聞かせください。あなたに最適な施術プランをご提案いたします。
            </p>
            <MagneticButton
              href="https://lin.ee/lHrYHQF"
              className="btn-shine inline-block bg-white text-stone-800 text-xl font-bold px-14 py-5 rounded-full shadow-2xl"
            >
              公式LINEで予約する
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
