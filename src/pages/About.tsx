import { motion } from "framer-motion";
import { PageLayout } from "@/components/Layout";
import { FloatingParticles, AmbientBlobs } from "@/components/effects";

const SALON = "/la-couleur/images/salon-interior-2.webp";

export default function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={SALON} alt="サロン" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <p className="text-white/80 text-sm tracking-[0.3em] mb-2">ABOUT</p>
            <h1 className="text-white text-4xl md:text-6xl font-bold font-serif text-glow">サロンについて</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl text-stone-700 font-bold mb-8 font-serif heading-3d">
              20年以上の経験を持つ<br />爪の専門家
            </h2>
            <div className="space-y-6 text-stone-500 text-lg leading-[2]">
              <p>
                オーナーネイリスト <strong className="text-stone-700">久佐野 可奈子</strong>。ネイリスト歴20年以上、メディカルネイルプランナーという爪の育成技術を持つ特殊ネイリストです。
              </p>
              <p>
                高校生の頃、たった数百円のネイルパーツを買いに行った時のこと。姿が見えなくなるまで見送ってくれたネイリストさんの丁寧な接客に心を打たれ、「私もあんなネイリストになりたい」と決意しました。
              </p>
              <p>
                その想いは今も変わらず、お客様一人ひとりの指先の「美と健康」をサポートし続けています。深爪、噛み癖、むしり癖、凹凸——どんな爪のお悩みもお気軽にご相談ください。
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-[#edecf1] rounded-2xl p-8">
              <h3 className="text-xl text-stone-700 font-bold mb-4 font-serif">資格・経歴</h3>
              <ul className="space-y-3 text-stone-500 text-base">
                <li>• メディカルネイルプランナー</li>
                <li>• ネイリスト歴20年以上</li>
                <li>• ネイル非常勤講師経験あり</li>
                <li>• ローズネイルスタッフ歴10年</li>
              </ul>
            </div>
            <div className="bg-[#edecf1] rounded-2xl p-8">
              <h3 className="text-xl text-stone-700 font-bold mb-4 font-serif">使用技術</h3>
              <ul className="space-y-3 text-stone-500 text-base">
                <li>• 自爪・深爪育成</li>
                <li>• パラジェル（爪を削らない）</li>
                <li>• 爪を傷めないフィルイン</li>
                <li>• 長さ出し（スカルプチャー、チップジェル）</li>
                <li>• 足の巻爪矯正</li>
                <li>• 角質除去</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="mt-16 text-center">
            <a href="https://lin.ee/lHrYHQF" target="_blank" rel="noopener noreferrer"
              className="btn-shine inline-block bg-stone-400 text-white text-lg px-10 py-4 rounded-full hover:bg-stone-500 transition-all shadow-lg">
              ご相談・ご予約はこちら
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
