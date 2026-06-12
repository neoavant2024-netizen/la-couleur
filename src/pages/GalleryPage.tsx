import { motion } from "framer-motion";
import { PageLayout } from "@/components/Layout";
import { FloatingParticles, AmbientBlobs } from "@/components/effects";

/* ビフォーアフター画像（1枚にBefore/Afterが含まれる形式） */
const BA_IMAGES = [
  "/la-couleur/images/before-after/ba-1.png",
  "/la-couleur/images/before-after/ba-2.png",
  "/la-couleur/images/before-after/ba-3.png",
  "/la-couleur/images/before-after/ba-4.png",
  "/la-couleur/images/before-after/ba-5.png",
  "/la-couleur/images/before-after/ba-6.png",
  "/la-couleur/images/before-after/ba-7.webp",
  "/la-couleur/images/before-after/ba-8.webp",
  "/la-couleur/images/before-after/ba-9.webp",
  "/la-couleur/images/before-after/ba-10.webp",
  "/la-couleur/images/before-after/ba-11.webp",
];

/* 施術後写真（ビフォーアフターとは別） */
const GALLERY_IMAGES = [
  "/la-couleur/images/gallery/gallery-1.webp",
  "/la-couleur/images/gallery/gallery-2.webp",
  "/la-couleur/images/gallery/gallery-3.webp",
  "/la-couleur/images/gallery/gallery-4.webp",
  "/la-couleur/images/gallery/gallery-5.webp",
  "/la-couleur/images/gallery/gallery-6.webp",
];

export default function GalleryPage() {
  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <AmbientBlobs />
        <FloatingParticles />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="text-[#b58aa0] text-sm tracking-[0.3em] mb-3">GALLERY</p>
            <h1 className="text-4xl md:text-5xl text-stone-700 font-bold font-serif heading-3d">施術事例</h1>
            <p className="text-stone-400 text-lg mt-4">お客様の爪の変化をご覧ください</p>
          </motion.div>

          {/* 施術後写真ギャラリー */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="mb-24">
            <h2 className="text-2xl text-stone-700 font-bold font-serif mb-8 text-center">ネイルギャラリー</h2>
            <p className="text-stone-400 text-base text-center mb-8">施術後のお客様のネイルです</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {GALLERY_IMAGES.map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <img src={img} alt={`施術事例 ${i + 1}`} className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Before & After */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="mb-24">
            <h2 className="text-2xl text-stone-700 font-bold font-serif mb-8 text-center">Before & After</h2>
            <p className="text-stone-400 text-base text-center mb-8">自爪育成・深爪矯正の施術前後の変化です</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BA_IMAGES.map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <img src={img} alt={`Before & After ${i + 1}`} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Instagram リンクボタン */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-center">
            <p className="text-stone-500 text-base mb-6">最新の施術事例はInstagramで更新中です</p>
            <a href="https://www.instagram.com/le_blanc_kana/" target="_blank" rel="noopener noreferrer"
              className="btn-shine inline-block bg-stone-700 text-white text-base px-10 py-4 rounded-full hover:bg-stone-800 transition-all shadow-lg hover:-translate-y-0.5">
              @le_blanc_kana をフォローする
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
