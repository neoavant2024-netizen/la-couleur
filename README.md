# la couleur（ラ クルール）ホームページ

宇都宮の自爪育成・深爪矯正専門ネイルサロン「la couleur」の公式サイト。
Manus 依存を排除したクリーン構成で新規に構築。

## 技術構成

- Vite 7 + React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion（アニメーション）
- Wouter（ルーティング）

外部依存はこれだけ。OAuth・サーバ・Manus ランタイム・CDN 画像参照は一切含まない。

## 開発

```bash
npm install      # 初回のみ
npm run dev      # http://localhost:3000
npm run build    # 本番ビルド（dist/ に出力）
npm run preview  # ビルド成果物をローカル確認
npm run check    # 型チェック
```

## ページ構成（全11ページ）

| パス | ページ |
|------|--------|
| / | ホーム |
| /about | サロンについて |
| /nailist | ネイリスト紹介 |
| /menu | メニュー一覧 |
| /menu/nail-growth | 自爪育成コース |
| /menu/deep-nail | 深爪矯正 |
| /menu/ingrown | 巻爪ケア |
| /menu/gel-nail | ジェルネイル |
| /gallery | 施術事例 |
| /access | アクセス |
| /contact | ご予約 |

## 画像

すべて `public/images/` にローカル配置（CDN・manus-storage 依存なし）。

- `logo.png` / `nailist-profile.png` / `salon-interior-1.png` / `salon-interior-2.webp`
- `gallery/gallery-1〜6.webp` — 施術事例
- `before-after/ba-1〜11.(png|webp)` — ビフォーアフター

### 注意

トップのヒーロースライドショーと各メニュー詳細ページのメイン画像は、
旧サイトで AI 生成画像（CDN）だった箇所を `gallery/` の実写に差し替えている。
専用のヒーロー写真が用意できれば `src/pages/Home.tsx` 冒頭の定数を差し替えるだけで反映可能。
