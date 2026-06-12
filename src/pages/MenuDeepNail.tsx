import { motion } from "framer-motion";
import { PageLayout } from "@/components/Layout";
import { FloatingParticles, AmbientBlobs } from "@/components/effects";

const IMG = "/images/before-after/ba-2.png";

export default function MenuDeepNail() {
  return (
    <PageLayout>
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={IMG} alt="深爪矯正" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <p className="text-white/80 text-sm tracking-[0.3em] mb-2">MENU 02</p>
            <h1 className="text-white text-4xl md:text-6xl font-bold font-serif text-glow">深爪矯正</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="space-y-8 text-stone-500 text-lg leading-[2]">
              <p>深爪矯正は、長年の噛み癖やむしり癖によって短くなってしまった爪を、自然で美しい長さと形に育てていく施術です。メディカルネイルプランナーの専門知識を活かし、爪の成長を促進します。</p>

              <div className="bg-[#edecf1] rounded-2xl p-8">
                <h3 className="text-xl text-stone-700 font-bold mb-4 font-serif">深爪矯正の特徴</h3>
                <p>爪の成長サイクルに合わせた定期的なケアで、3〜6ヶ月程度で目に見える変化を実感いただけます。お仕事で色が塗れない方でも、マット・ナチュラル・クリアから仕上げを選べます。</p>
              </div>

              <h3 className="text-xl text-stone-700 font-bold font-serif">こんな方におすすめ</h3>
              <ul className="space-y-3">
                {["爪を噛む癖がやめられない", "爪が短くてコンプレックスに感じている", "爪の白い部分（フリーエッジ）がほとんどない", "爪の形が丸くて平たい", "人前で手を出すのが恥ずかしい"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><span className="text-stone-400 mt-1 text-lg">✓</span><span>{item}</span></li>
                ))}
              </ul>
              <p className="text-stone-300 text-sm">※ 料金の詳細は公式LINEよりお問い合わせください</p>
            </div>
            <div className="mt-12 text-center">
              <a href="https://lin.ee/lHrYHQF" target="_blank" rel="noopener noreferrer"
                className="btn-shine inline-block bg-stone-400 text-white text-lg px-10 py-4 rounded-full hover:bg-stone-500 transition-all shadow-lg">LINE予約する</a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
