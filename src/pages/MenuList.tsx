import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/Layout";
import { FloatingParticles, AmbientBlobs } from "@/components/effects";

const HERO_NEW = "/images/gallery/gallery-3.webp";
const CARE = "/images/deep-nail.png";
const G1 = "/images/Image2.png";
const G2 = "/images/gallery/gallery-5.webp";

export default function MenuList() {
  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#edecf1] to-white relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="text-[#b58aa0] text-sm tracking-[0.3em] mb-3">MENU</p>
            <h1 className="text-4xl md:text-5xl text-stone-700 font-bold font-serif heading-3d">施術メニュー</h1>
            <p className="text-stone-400 text-lg mt-4">あなたの爪のお悩みに合わせたメニューをご用意しています</p>
          </motion.div>

          {/* ─── 料金表 ─── */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-20">

            {/* ハンドネイル */}
            <div className="mb-12">
              <h2 className="text-2xl text-stone-700 font-bold font-serif mb-6 pb-3 border-b border-stone-200">ハンドネイル</h2>
              <div className="space-y-4">
                {[
                  { name: "ハンドケア", price: "¥2,200" },
                  { name: "ジェルワンカラー", price: "¥6,600" },
                  { name: "スカルプチャー", price: "¥8,800〜" },
                  { name: "他店オフ", price: "1本 ¥330〜" },
                  { name: "当店 ジェル フィルイン", price: "1本 ¥110〜" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-stone-100">
                    <span className="text-stone-700 text-base">{item.name}</span>
                    <span className="text-stone-500 text-base font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* フットネイル */}
            <div className="mb-12">
              <h2 className="text-2xl text-stone-700 font-bold font-serif mb-6 pb-3 border-b border-stone-200">フットネイル</h2>
              <div className="space-y-4">
                {[
                  { name: "フットケア", price: "¥3,300" },
                  { name: "ジェルワンカラー", price: "¥7,700" },
                  { name: "角質除去", price: "¥4,400" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-stone-100">
                    <span className="text-stone-700 text-base">{item.name}</span>
                    <span className="text-stone-500 text-base font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-stone-400 text-sm mt-4">※ハンド・フットともにデザイン料は別途頂戴しております。</p>
            </div>

            {/* 自爪育成・巻爪ケア */}
            <div className="mb-12">
              <h2 className="text-2xl text-stone-700 font-bold font-serif mb-6 pb-3 border-b border-stone-200">自爪育成・巻爪ケア</h2>
              <div className="space-y-4">
                {[
                  { name: "自爪・深爪育成（初回ケアオイル付）", price: "¥13,200" },
                  { name: "育成2回目以降", price: "¥11,000" },
                  { name: "足の巻爪補正", price: "1本 ¥5,500〜" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-stone-100">
                    <span className="text-stone-700 text-base">{item.name}</span>
                    <span className="text-stone-500 text-base font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ─── メニュー詳細カード ─── */}
          <h2 className="text-2xl text-stone-700 font-bold font-serif mb-8 text-center">メニュー詳細</h2>
          <div className="space-y-8">
            {[
              { title: "自爪育成コース", desc: "深爪・噛み癖・むしり癖・凹凸などのトラブル爪を、健康的で美しい爪へ導きます。ヌング育成法を用いた専門的なアプローチ。", img: HERO_NEW, link: "/menu/nail-growth", badge: "人気No.1", note: "" },
              { title: "深爪矯正", desc: "長年の噛み癖やむしり癖によって短くなった爪を、自然で美しい長さと形に育てていく施術です。", img: CARE, link: "/menu/deep-nail", badge: "", note: "※写真は本部からお借りしています" },
              { title: "巻爪ケア", desc: "足の巻爪に対する専門的なケア。痛みの軽減と爪の形状改善を目指します。", img: G1, link: "/menu/ingrown", badge: "", note: "" },
              { title: "ジェルネイル", desc: "爪を削らないパラジェル使用。フィルイン一層残しで自爪を傷めない施術。マット・ナチュラル・クリアから選べます。", img: G2, link: "/menu/gel-nail", badge: "", note: "" },
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}>
                <Link href={m.link} className="group block md:grid md:grid-cols-[1fr_1.5fr] gap-8 items-stretch bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-stone-100/40 transition-all duration-500 hover:-translate-y-1 border border-stone-100">
                  <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img src={m.img} alt={m.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    {m.note && <span className="absolute bottom-2 right-3 text-white/85 text-[10px] [text-shadow:0_1px_3px_rgba(0,0,0,0.75)]">{m.note}</span>}
                  </div>
                  <div className="p-8 md:p-10">
                    {m.badge && <span className="inline-block bg-stone-400 text-white text-xs px-4 py-1.5 rounded-full mb-4">{m.badge}</span>}
                    <h3 className="text-2xl md:text-3xl text-stone-700 font-bold mb-4 group-hover:text-stone-500 transition-colors font-serif">{m.title}</h3>
                    <p className="text-stone-400 text-base leading-[1.8] mb-6">{m.desc}</p>
                    <span className="text-stone-400 text-base font-medium">詳しく見る →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="https://lin.ee/lHrYHQF" target="_blank" rel="noopener noreferrer"
              className="btn-shine inline-block bg-stone-400 text-white text-lg px-10 py-4 rounded-full hover:bg-stone-500 transition-all shadow-lg">
              LINE予約する
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
