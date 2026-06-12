import { motion } from "framer-motion";
import { PageLayout } from "@/components/Layout";
import { FloatingParticles, AmbientBlobs } from "@/components/effects";

const IMG = "/images/gallery/gallery-3.webp";

export default function MenuNailGrowth() {
  return (
    <PageLayout>
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={IMG} alt="自爪育成" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <p className="text-white/80 text-sm tracking-[0.3em] mb-2">MENU 01</p>
            <h1 className="text-white text-4xl md:text-6xl font-bold font-serif text-glow">自爪育成コース</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-stone-400 text-white text-sm px-4 py-1.5 rounded-full mb-6">人気No.1</span>
            <div className="space-y-8 text-stone-500 text-lg leading-[2]">
              <p>
                自爪育成コースは、深爪・噛み癖・むしり癖・凹凸など、さまざまなトラブル爪を健康的で美しい爪へと導く専門コースです。
              </p>

              <div className="bg-[#edecf1] rounded-2xl p-8">
                <h3 className="text-xl text-stone-700 font-bold mb-4 font-serif">メディカルプランナーとは</h3>
                <p>
                  メディカルプランナーとは、ヌング育成法を用いた爪の成長メカニズムに基づいた科学的なアプローチで、爪を健康的に育てる技術です。爪の形状、厚み、強度を改善し、割れにくく美しい爪を育てます。
                </p>
              </div>

              <h3 className="text-xl text-stone-700 font-bold font-serif">こんな方におすすめ</h3>
              <ul className="space-y-3">
                {["爪が薄くて割れやすい", "爪の形にコンプレックスがある", "噛み癖・むしり癖がやめられない", "爪が凹凸していて気になる", "ネイルサロンで断られた経験がある"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-stone-400 mt-1 text-lg">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#edecf1] rounded-2xl p-8">
                <h3 className="text-xl text-stone-700 font-bold mb-4 font-serif">施術の流れ</h3>
                <div className="space-y-4">
                  {["カウンセリング（爪の状態を確認）", "爪の形状を整える", "育成ジェルの塗布", "ホームケアのアドバイス"].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-stone-400 text-white text-sm flex items-center justify-center font-bold">{i + 1}</span>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-stone-300 text-sm">※ 料金の詳細は公式LINEよりお問い合わせください</p>
            </div>

            <div className="mt-12 text-center">
              <a href="https://lin.ee/lHrYHQF" target="_blank" rel="noopener noreferrer"
                className="btn-shine inline-block bg-stone-400 text-white text-lg px-10 py-4 rounded-full hover:bg-stone-500 transition-all shadow-lg">
                LINE予約する
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
