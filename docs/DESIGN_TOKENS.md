# デザイントークン（概要）

このプロジェクトで導入したデザイントークンは、グローバル CSS のカスタムプロパティと Tailwind の theme 拡張を組み合わせて使用します。

目的
- 色・半径・フォントなどを一元管理し、コンポーネント全体の一貫性を保つ
- ダークモード用のオーバーライドを容易にする

主なトークン（globals.css に定義）
- --color-bg: 背景色
- --color-foreground: 文章色
- --color-primary: 主要アクション色（ボタン等）
- --color-primary-foreground: 主要色上のテキスト色
- --color-muted: 補助テキスト色
- --color-border: 境界線色
- --color-input: 入力系の背景色
- --color-ring: フォーカスリング色
- --radius: 標準の角丸
- --font-sans: 基本フォント

利用方法（例）
- Tailwind クラスで直接: `bg-[var(--color-primary)]`, `text-[var(--color-muted)]`
- radius: `rounded-[var(--radius)]`
- focus ring: `focus:ring-[var(--color-ring)]`

注意点
- ダークモードは `.dark { ... }` で上書きします（next-themes を使用しているため class ベースです）。
- 新しいトークンを追加したら `app/globals.css` と `tailwind.config.cjs` の両方で必要に応じて補完してください。

ベストプラクティス
- コンポーネント側では直接固定色を使わず、トークン（CSS カスタムプロパティ）を参照すること。
- コンポーネントライブラリを拡張する際は、ここにトークンを追加してから使用してください。

---

必要であれば、トークンの名前や値（アクセシビリティを考慮したコントラスト比）を調整し、カラー系のスナップショット（視覚回帰）を追加できます。