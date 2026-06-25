'use client'

import { useState } from "react";

export default function Home() {
  const [monthly, setMonthly] = useState("");
  const [annual, setAnnual] = useState<number | null>(null);

  const calculate = () => {
    const m = Number(monthly);
    setAnnual(m * 12);
  };

  const reset = () => {
    setMonthly("");
    setAnnual(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6 w-full">

        <h1 className="text-3xl font-bold text-center mb-6">
          年収計算ツール
        </h1>

        <div className="space-y-4">

          <input
            type="number"
            placeholder="月収（円）"
            value={monthly}
            onChange={(e) => setMonthly(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <button
            onClick={calculate}
            className="w-full bg-blue-600 text-white p-3 rounded"
          >
            計算する
          </button>

          <button
            onClick={reset}
            className="w-full bg-gray-400 text-white p-3 rounded"
          >
            リセット
          </button>

          {annual !== null && (
            <div className="mt-6 text-lg font-bold">
              <p>年収：¥{annual.toLocaleString()}</p>
            </div>
          )}

        </div>
        <section className="mt-10 bg-white rounded-xl p-6">
  <h2 className="text-xl font-bold mb-4">
    年収を把握することが重要な理由
  </h2>

  <p className="mb-3">
    月収だけでは年間でどのくらい収入があるかイメージしにくい場合があります。
  </p>

  <p className="mb-3">
    年収を把握することで、転職活動やローン審査、
    将来の資金計画を立てやすくなります。
  </p>

  <p>
    この年収計算ツールでは月収を入力するだけで、
    年間の収入を自動計算できます。
  </p>
</section>

<section className="mt-10 rounded-xl border bg-white p-5">
  <h2 className="mb-3 text-lg font-bold">ほかの便利ツール</h2>

  <div className="grid gap-2 text-sm text-blue-600 underline">
    <a href="https://wage-calc-tawny.vercel.app/">
      時給計算ツール
    </a>

    <a href="https://overtime-calc.vercel.app/">
      残業代計算ツール
    </a>

    <a href="https://take-home-pay-calc.vercel.app/">
      手取り計算ツール
    </a>
  </div>
</section>

<section className="mt-10 bg-white rounded-xl p-6">
  <p className="text-sm text-gray-700 leading-7">
    このサイトでは、仕事・給与・副業に役立つ無料計算ツールを公開しています。
    時給計算・残業代計算・手取り計算・年収計算など、
    日々の収入確認に便利なツールを今後追加していきます。
  </p>
</section>

<div className="mt-6 text-center">
  <a
    href="/privacy-policy"
    className="text-sm text-blue-600 underline"
  >
    プライバシーポリシー
  </a>
</div>

<footer className="mt-6 text-center text-sm text-gray-500">
  ANT FARM Project | Colony B
</footer>
      </div>
    </div>
  );
}