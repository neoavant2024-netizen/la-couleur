import { motion } from "framer-motion";
import { PageLayout } from "@/components/Layout";
import { FloatingParticles, AmbientBlobs } from "@/components/effects";

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#edecf1] to-white min-h-[70vh] flex items-center relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-[#b58aa0] text-sm tracking-[0.3em] mb-3">RESERVATION</p>
            <h1 className="text-4xl md:text-5xl text-stone-700 font-bold mb-8 font-serif heading-3d">ご予約・お問い合わせ</h1>
            <p className="text-stone-500 text-lg leading-[2] mb-12">
              ご予約・ご相談は公式LINEより承っております。<br />
              初めての方もお気軽にメッセージをお送りください。<br />
              爪のお悩み、何でもご相談いただけます。
            </p>

            <div className="bg-white rounded-[2rem] p-10 md:p-12 shadow-xl border border-stone-200/50 mb-10">
              <h2 className="text-2xl text-stone-700 font-bold mb-6 font-serif">ご予約方法</h2>
              <div className="space-y-4 text-stone-500 text-base text-left max-w-md mx-auto">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-stone-400 text-white text-sm flex items-center justify-center font-bold shrink-0">1</span>
                  <span>下のボタンから公式LINEを友だち追加</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-stone-400 text-white text-sm flex items-center justify-center font-bold shrink-0">2</span>
                  <span>トーク画面でご希望の日時をお伝えください</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-stone-400 text-white text-sm flex items-center justify-center font-bold shrink-0">3</span>
                  <span>確認のご返信をお送りし、予約完了です</span>
                </div>
              </div>
            </div>

            <a href="https://lin.ee/lHrYHQF" target="_blank" rel="noopener noreferrer"
              className="btn-shine inline-block bg-stone-400 text-white text-xl font-bold px-14 py-5 rounded-full hover:bg-stone-500 transition-all shadow-xl hover:-translate-y-1">
              公式LINEで予約する
            </a>
            <p className="text-stone-300 text-sm mt-6">LINE ID: @lzw0273a</p>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="pb-24 md:pb-32 bg-white relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-center mb-12">
            <p className="text-[#b58aa0] text-sm tracking-[0.3em] mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl text-stone-700 font-bold font-serif heading-3d">よくあるご質問</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "ネイルが初めてでも大丈夫ですか？", a: "はい、もちろんです。カウンセリングを丁寧に行い、爪の状態やご希望に合わせて施術プランをご提案します。安心してお越しください。" },
              { q: "深爪や噛み癖がひどくても施術できますか？", a: "当サロンは自爪育成・深爪矯正を専門としています。他店で断られた経験のある方も、まずはお気軽にご相談ください。" },
              { q: "予約方法を教えてください。", a: "公式LINE（@lzw0273a）またはお電話（070-6948-1551）にて承っております。完全予約制のプライベートサロンです。" },
              { q: "駐車場はありますか？", a: "ございます。LRT沿線で徒歩圏内、お車でも通いやすい立地です。詳しい場所はご予約時にお伝えします。" },
              { q: "完全個室ですか？", a: "はい、完全個室のプライベートサロンです。周りを気にせず、1対1でゆっくりと施術を受けていただけます。" },
              { q: "どのくらいで変化を実感できますか？", a: "深爪矯正の場合、爪の成長に合わせて3〜6ヶ月程度で目に見える変化を実感いただけます（個人差があります）。" },
              { q: "朝は何時から予約できますか？", a: "朝9時オープンです。お仕事やご予定の前の時間帯にもご利用いただけます。" },
            ].map((item, i) => (
              <details key={i} className="group bg-[#edecf1] rounded-2xl border border-stone-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 text-stone-700 text-base md:text-lg font-medium list-none">
                  <span className="flex items-start gap-3 text-left">
                    <span className="text-stone-300 font-display text-xl leading-none">Q</span>
                    {item.q}
                  </span>
                  <span className="shrink-0 text-stone-400 text-xl transition-transform duration-300 group-open:rotate-45">＋</span>
                </summary>
                <div className="px-6 pb-6 text-stone-500 text-base leading-[1.9] border-t border-stone-100/80">
                  <p className="pt-4">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
