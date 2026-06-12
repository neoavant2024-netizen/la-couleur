import { motion } from "framer-motion";
import { PageLayout } from "@/components/Layout";
import { FloatingParticles, AmbientBlobs } from "@/components/effects";

const IMG = "/la-couleur/images/gallery/gallery-5.webp";

export default function MenuGelNail() {
  return (
    <PageLayout>
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={IMG} alt="ジェルネイル" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <p className="text-white/80 text-sm tracking-[0.3em] mb-2">MENU 04</p>
            <h1 className="text-white text-4xl md:text-6xl font-bold font-serif text-glow">ジェルネイル</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="space-y-8 text-stone-500 text-lg leading-[2]">
              <p>当サロンでは、爪を削らない「パラジェル」を使用しています。従来のジェルネイルとは異なり、自爪の表面を削る必要がないため、爪を傷めることなく美しいネイルをお楽しみいただけます。</p>

              <div className="bg-[#edecf1] rounded-2xl p-8">
                <h3 className="text-xl text-stone-700 font-bold mb-4 font-serif">パラジェルの特徴</h3>
                <ul className="space-y-2 text-base">
                  <li>• 爪を削らないから自爪が傷まない</li>
                  <li>• 持ちが良く、約3〜4週間キープ</li>
                  <li>• フィルイン一層残しで付け替え時もダメージレス</li>
                  <li>• 発色が良く、豊富なカラーバリエーション</li>
                </ul>
              </div>

              <p>マグネットジェルやラメなど、カラーも豊富にご用意しています。</p>

              <div className="bg-[#edecf1] rounded-2xl p-8">
                <h3 className="text-xl text-stone-700 font-bold mb-4 font-serif">得意なデザイン</h3>
                <p className="text-base">シンプルネイルやオフィスネイル、ニュアンスネイルなど、上品で綺麗めなデザインを得意としており、ご好評をいただいています。</p>
              </div>
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
