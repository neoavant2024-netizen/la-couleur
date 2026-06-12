import { Link } from "wouter";
import { PageLayout } from "@/components/Layout";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-32">
        <p className="font-display text-7xl md:text-8xl text-stone-300">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-stone-700 font-serif mt-4">
          ページが見つかりませんでした
        </h1>
        <p className="text-stone-500 mt-4 max-w-md leading-relaxed">
          お探しのページは移動または削除された可能性があります。
        </p>
        <Link
          href="/"
          className="inline-block mt-10 bg-stone-700 text-white text-base px-8 py-4 rounded-full hover:bg-stone-800 transition-colors shadow-lg"
        >
          ホームに戻る
        </Link>
      </section>
    </PageLayout>
  );
}
