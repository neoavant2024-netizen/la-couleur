import { motion } from "framer-motion";
import { PageLayout } from "@/components/Layout";
import { FloatingParticles, AmbientBlobs } from "@/components/effects";

const IMG = "/images/Image2.png";

export default function MenuIngrown() {
  return (
    <PageLayout>
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={IMG} alt="巻爪ケア" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <p className="text-white/80 text-sm tracking-[0.3em] mb-2">MENU 03</p>
            <h1 className="text-white text-4xl md:text-6xl font-bold font-serif text-glow">巻爪ケア</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="space-y-8 text-stone-500 text-lg leading-[2]">
              <p>巻爪ケアは、足の爪が内側に巻き込んで痛みを伴う状態を、専門的な技術で改善するメニューです。痛みの軽減はもちろん、爪の形状を正常な状態へと導きます。</p>

              <h3 className="text-xl text-stone-700 font-bold font-serif">こんな方におすすめ</h3>
              <ul className="space-y-3">
                {["足の爪が巻いて痛い", "靴を履くと爪が当たって辛い", "巻爪が原因で歩くのが億劫", "病院に行くほどではないが気になる", "見た目が気になって素足になれない"].map((item, i) => (
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
