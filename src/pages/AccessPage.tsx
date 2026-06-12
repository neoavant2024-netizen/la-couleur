import { motion } from "framer-motion";
import { PageLayout } from "@/components/Layout";
import { FloatingParticles, AmbientBlobs } from "@/components/effects";

export default function AccessPage() {
  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="text-[#b58aa0] text-sm tracking-[0.3em] mb-3">ACCESS</p>
            <h1 className="text-4xl md:text-5xl text-stone-700 font-bold font-serif heading-3d">アクセス</h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="bg-gradient-to-br from-[#edecf1] to-gray-50 rounded-[2rem] p-8 md:p-10 border border-stone-200/50">
                <h2 className="text-2xl text-stone-700 font-bold mb-8 font-serif">
                  爪の育成サロン<br />〜la couleur ラ クルール〜
                </h2>
                <div className="space-y-6 text-stone-500 text-base leading-[1.9]">
                  <div className="flex gap-4 items-start">
                    <span className="text-stone-400 font-bold min-w-[5rem] shrink-0">住所</span>
                    <span>〒321-0941<br />栃木県宇都宮市東今泉2丁目5-5</span>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-stone-400 font-bold min-w-[5rem] shrink-0">電話</span>
                    <span>070-6948-1551</span>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-stone-400 font-bold min-w-[5rem] shrink-0">営業時間</span>
                    <span>9:00〜（最終受付はメニューにより異なります）</span>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-stone-400 font-bold min-w-[5rem] shrink-0">アクセス</span>
                    <span>LRT沿線 徒歩圏内<br />駐車場あり</span>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-stone-400 font-bold min-w-[5rem] shrink-0">施術者</span>
                    <span>久佐野 可奈子<br />メディカルネイルプランナー<br />JNAネイリスト検定1級</span>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-stone-400 font-bold min-w-[5rem] shrink-0">ご予約</span>
                    <span>公式LINEまたはお電話にて<br />LINE ID: @lzw0273a</span>
                  </div>
                </div>
                <p className="text-stone-400 text-xs mt-6 border-t border-stone-100 pt-4">
                  ※完全個室のプライベートサロンのため、店舗の詳細は予約時にお伝えします。
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="https://www.instagram.com/le_blanc_kana/" target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center py-3.5 rounded-full border-2 border-stone-200 text-stone-400 text-base font-medium hover:bg-[#edecf1] transition-colors">
                  Instagram
                </a>
                <a href="https://ameblo.jp/le-blanc-nail/" target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center py-3.5 rounded-full border-2 border-stone-200 text-stone-400 text-base font-medium hover:bg-[#edecf1] transition-colors">
                  ブログ
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-[2rem] overflow-hidden shadow-lg h-[400px] md:h-[500px]">
              <iframe src="https://maps.google.com/maps?q=%E6%A0%83%E6%9C%A8%E7%9C%8C%E5%AE%87%E9%83%BD%E5%AE%AE%E5%B8%82%E6%9D%B1%E4%BB%8A%E6%B3%892%E4%B8%81%E7%9B%AE5-5&z=16&hl=ja&output=embed"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="la couleur 地図（栃木県宇都宮市東今泉2丁目5-5）" />
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
