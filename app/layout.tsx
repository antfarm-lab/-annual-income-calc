import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "年収計算ツール【無料】月収から年収を自動計算",

  description:
    "月収を入力するだけで年間の収入を無料で自動計算できる便利ツールです。",

  keywords: [
    "年収計算",
    "月収計算",
    "給料計算",
    "年収シミュレーション",
    "収入計算",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}