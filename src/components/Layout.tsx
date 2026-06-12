import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { setMobileOpen(false); window.scrollTo(0, 0); }, [location]);

  const links = [
    { href: "/", label: "ホーム" },
    { href: "/about", label: "サロンについて" },
    { href: "/nailist", label: "ネイリスト" },
    { href: "/menu", label: "メニュー" },
    { href: "/gallery", label: "施術事例" },
    { href: "/access", label: "アクセス" },
    { href: "/contact", label: "ご予約" },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || location !== "/" ? "bg-white/90 backdrop-blur-xl shadow-sm" : ""}`}
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 md:px-10 py-4">
          <Link href="/" className="flex items-center"><img src="/images/logo.png" alt="la couleur" className="h-12 md:h-14" /></Link>
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className={`text-[15px] transition-colors ${location === l.href ? "text-stone-400 font-medium" : (scrolled || location !== "/" ? "text-stone-500" : "text-white")} hover:text-stone-400`}>
                {l.label}
              </Link>
            ))}
            <a href="https://lin.ee/lHrYHQF" target="_blank" rel="noopener noreferrer"
              className="bg-stone-400 text-white text-[15px] px-7 py-3 rounded-full hover:bg-stone-500 transition-all shadow-lg shadow-stone-200/40 hover:-translate-y-0.5">
              LINE予約
            </a>
          </nav>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 relative z-[60]">
            <span className={`w-6 h-0.5 bg-stone-500 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`w-6 h-0.5 bg-stone-500 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-stone-500 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-white/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="text-2xl text-gray-700 hover:text-stone-400 transition-colors">{l.label}</Link>
            ))}
            <a href="https://lin.ee/lHrYHQF" target="_blank" rel="noopener noreferrer"
              className="bg-stone-400 text-white text-lg px-10 py-4 rounded-full mt-4 shadow-lg">LINE予約</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#e7e7ec] text-stone-600 py-16 px-6 md:px-10 border-t border-stone-300/70">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <img src="/images/logo.png" alt="la couleur" className="h-10" />
          <p className="text-stone-600 text-sm mt-3">爪の育成サロン ラ クルール</p>
          <p className="text-stone-500 text-sm mt-4 leading-relaxed">
            〒321-0941 栃木県宇都宮市東今泉2丁目5-5<br />TEL: 070-6948-1551
          </p>
          <p className="text-stone-400 text-xs mt-2">※プライベートサロンのため、詳細は予約時にお伝えします</p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-stone-500 mb-4 tracking-wider">MENU</h4>
          <div className="space-y-3">
            <Link href="/menu/nail-growth" className="block text-stone-500 text-sm hover:text-stone-800 transition-colors">自爪育成コース</Link>
            <Link href="/menu/deep-nail" className="block text-stone-500 text-sm hover:text-stone-800 transition-colors">深爪矯正</Link>
            <Link href="/menu/ingrown" className="block text-stone-500 text-sm hover:text-stone-800 transition-colors">巻爪ケア</Link>
            <Link href="/menu/gel-nail" className="block text-stone-500 text-sm hover:text-stone-800 transition-colors">ジェルネイル</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold text-stone-500 mb-4 tracking-wider">LINKS</h4>
          <div className="space-y-3">
            <Link href="/about" className="block text-stone-500 text-sm hover:text-stone-800 transition-colors">サロンについて</Link>
            <Link href="/nailist" className="block text-stone-500 text-sm hover:text-stone-800 transition-colors">ネイリスト</Link>
            <Link href="/gallery" className="block text-stone-500 text-sm hover:text-stone-800 transition-colors">施術事例</Link>
            <Link href="/access" className="block text-stone-500 text-sm hover:text-stone-800 transition-colors">アクセス</Link>
            <a href="https://www.instagram.com/le_blanc_kana/" target="_blank" rel="noopener noreferrer" className="block text-stone-500 text-sm hover:text-stone-800 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-stone-300/70 text-center">
        <p className="text-stone-400 text-sm">&copy; 2025 la couleur. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
