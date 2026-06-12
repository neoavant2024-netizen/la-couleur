import { motion } from "framer-motion";
import { PageLayout } from "@/components/Layout";
import { FloatingParticles, AmbientBlobs } from "@/components/effects";

const SALON = "/la-couleur/images/salon-interior-2.webp";

export default function NailistPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={SALON} alt="サロン" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <p className="text-white/80 text-sm tracking-[0.3em] mb-2">NAILIST</p>
            <h1 className="text-white text-4xl md:text-6xl font-bold font-serif text-glow">ネイリスト紹介</h1>
          </motion.div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

            {/* Name & Title */}
            <div className="text-center mb-16">
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
                <div className="photo-ring absolute -inset-[6px] rounded-full" />
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img src="/la-couleur/images/nailist-profile.png" alt="久佐野 可奈子" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <p className="text-[#b58aa0] text-sm tracking-[0.3em] mb-3">OWNER NAILIST</p>
              <h2 className="text-3xl md:text-5xl text-stone-700 font-bold font-serif mb-4 heading-3d">久佐野 可奈子</h2>
              <p className="text-stone-400 text-lg">Kanako Kusano</p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {["メディカルネイルプランナー", "JNAネイリスト検定1級", "ネイルサロン衛生管理士"].map((q) => (
                  <span key={q} className="px-4 py-2 rounded-full bg-[#f5e6ec] border border-[#e6c7d2] text-[#9c6f81] text-sm">{q}</span>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="bg-[#edecf1] rounded-[2rem] p-8 md:p-12 mb-16">
              <h3 className="text-2xl text-stone-700 font-bold font-serif mb-6">ご挨拶</h3>
              <div className="space-y-5 text-stone-500 text-base md:text-lg leading-[2]">
                <p>
                  はじめまして。la couleur（ラ クルール）オーナーネイリストの久佐野 可奈子です。
                </p>
                <p>
                  私がネイリストを志したのは高校生の頃。趣味でネイルチップを作っていた時期に、ネイルサロンへパーツを買いに行ったことがきっかけでした。たった数百円のお買い物にもかかわらず、丁寧に接客してくださり、私の姿が見えなくなるまで見送ってくれたネイリストさんの姿に心を打たれました。
                </p>
                <p>
                  「私もあんなネイリストになりたい」——その想いは20年以上経った今も変わりません。
                </p>
                <p>
                  お客様一人ひとりの爪の状態やお悩みに真摯に向き合い、「美と健康」の両方を叶える施術をご提供することが私の使命だと考えています。深爪や噛み癖、巻爪など、爪にコンプレックスをお持ちの方も、どうぞお気軽にご相談ください。あなたの指先に自信と笑顔をお届けします。
                </p>
              </div>
            </div>

            {/* Career Timeline */}
            <div className="mb-16">
              <h3 className="text-2xl text-stone-700 font-bold font-serif mb-3 text-center">経歴</h3>
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="block h-px w-10 bg-gradient-to-l from-[#d59ab0] to-transparent" />
                <span className="block w-1.5 h-1.5 rotate-45 bg-[#d59ab0]" />
                <span className="block h-px w-10 bg-gradient-to-r from-[#d59ab0] to-transparent" />
              </div>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e9c6cf] via-[#cdb4d4] to-[#f0dcae] md:-translate-x-px" />

                {[
                  { year: "2004年", event: "ローズネイルスクール卒業", detail: "ローズネイル就職。店長、スクール講師、専門学校非常勤講師を経験" },
                  { year: "2012年10月", event: "ル ブラン OPEN", detail: "美容室ケージクラス ピチカ店2階にて独立開業" },
                  { year: "2019年2月", event: "ル ブラン CLOSE", detail: "出産のため一時休業" },
                  { year: "2020年6月", event: "ローズネイル復帰", detail: "店長、スクール講師、専門学校非常勤講師として再び活躍" },
                  { year: "2022年5月", event: "ル ブラン リスタート", detail: "美容室ケージクラス本店にてサロンを再開" },
                  { year: "2023年4月", event: "移転オープン", detail: "現在の宇都宮市東今泉へ移転。「la couleur ラ クルール」として新たなスタート" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`relative pl-12 md:pl-0 pb-10 ${i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-2.5 md:left-1/2 top-1 w-3 h-3 rounded-full dot-pulse border-2 border-white md:-translate-x-1.5" />
                    <div className={`bg-white rounded-2xl p-6 border border-stone-100 shadow-sm ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      <span className="text-[#b58aa0] text-sm font-bold">{item.year}</span>
                      <h4 className="text-lg text-stone-700 font-bold mt-1 font-serif">{item.event}</h4>
                      <p className="text-stone-400 text-sm mt-2 leading-relaxed">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div className="mb-16">
              <h3 className="text-2xl text-stone-700 font-bold font-serif mb-3 text-center">保有資格</h3>
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="block h-px w-10 bg-gradient-to-l from-[#d59ab0] to-transparent" />
                <span className="block w-1.5 h-1.5 rotate-45 bg-[#d59ab0]" />
                <span className="block h-px w-10 bg-gradient-to-r from-[#d59ab0] to-transparent" />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "JNAネイリスト検定1級", desc: "ネイル技術の最高峰資格" },
                  { title: "ネイルサロン衛生管理士", desc: "安全で衛生的なサロン環境を保証" },
                  { title: "メディカルネイルプランナー", desc: "爪の育成技術を持つ特殊ネイリスト" },
                ].map((q, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative overflow-hidden p-6 pt-7 rounded-2xl bg-white border border-[#ecd6de] text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <motion.span
                      className="absolute top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-[#e9c6cf] via-[#cdb4d4] to-[#f0dcae]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.1 }}
                    />
                    <h4 className="text-base text-stone-700 font-bold mb-2">{q.title}</h4>
                    <p className="text-stone-400 text-sm">{q.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h3 className="text-2xl text-stone-700 font-bold font-serif mb-3 text-center">大切にしていること</h3>
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="block h-px w-10 bg-gradient-to-l from-[#d59ab0] to-transparent" />
                <span className="block w-1.5 h-1.5 rotate-45 bg-[#d59ab0]" />
                <span className="block h-px w-10 bg-gradient-to-r from-[#d59ab0] to-transparent" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "一人ひとりに寄り添う施術", desc: "お客様の爪の状態やライフスタイルに合わせて、最適な施術プランをご提案します。マニュアル通りではない、あなただけのケアをご提供します。" },
                  { title: "丁寧な接客と温かい空間", desc: "高校生の頃に感動した「姿が見えなくなるまで見送る」接客が原点。お客様に心から安心していただける空間づくりを心がけています。" },
                  { title: "爪の健康を第一に", desc: "見た目の美しさだけでなく、爪そのものの健康を大切にしています。パラジェルやフィルイン一層残しなど、爪を傷めない技術にこだわっています。" },
                  { title: "学び続ける姿勢", desc: "20年以上のキャリアがあっても、常に新しい技術や知識を学び続けています。お客様に最善のケアをお届けするために、日々研鑽を重ねています。" },
                ].map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group relative overflow-hidden p-8 pl-9 rounded-2xl bg-white border border-stone-100 hover:border-[#e6c7d2] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <motion.span
                      className="absolute left-0 top-0 bottom-0 w-1.5 origin-top bg-gradient-to-b from-[#e9c6cf] via-[#cdb4d4] to-[#f0dcae]"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.1 }}
                    />
                    <h4 className="text-lg text-stone-700 font-bold mb-3 font-serif group-hover:text-[#9c6f81] transition-colors">{v.title}</h4>
                    <p className="text-stone-400 text-base leading-[1.8]">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-stone-400 text-base mb-6">爪のお悩み、お気軽にご相談ください。</p>
              <a href="https://lin.ee/lHrYHQF" target="_blank" rel="noopener noreferrer"
                className="btn-shine inline-block bg-stone-400 text-white text-lg px-10 py-4 rounded-full hover:bg-stone-500 transition-all shadow-lg">
                公式LINEで相談する
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
