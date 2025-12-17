# サブスク合計金額チェッカー

## 概要

**サブスク合計金額チェッカー**は、複数のサブスクリプションサービスの月額・年額合計を可視化し、
使いすぎを防ぐための **PWA対応Webアプリ** です。

個人開発として企画・設計・実装・公開・収益化（AdSense申請）までを一貫して行いました。

---

## URL

* 🌐 Webアプリ: [https://soranakatani2020-debug.github.io/subsc-checker/](https://soranakatani2020-debug.github.io/subsc-checker/)
* 🏠 ルートページ（AdSense確認用）: [https://soranakatani2020-debug.github.io/](https://soranakatani2020-debug.github.io/)

---

## 主な機能

* サブスクの追加・削除
* 月額合計金額の自動計算
* 年額合計金額の自動計算
* 年額上限金額の設定
* 上限超過時の警告表示（数値を赤色表示）
* localStorage によるデータ永続化
* PWA対応（オフライン利用・ホーム画面追加）

---

## 技術スタック

* HTML5
* CSS3
* JavaScript（Vanilla JS）
* Web Storage API（localStorage）
* Service Worker
* Web App Manifest
* GitHub Pages
* Google AdSense（申請済み）

---

## PWA対応について

* Service Worker によるキャッシュ制御を実装
* Safari（iOS）特有の挙動に対応するため、

  * `skipWaiting()`
  * `clients.claim()`
    を使用し、更新が即時反映される設計にしています

---

## こだわったポイント

* **UX重視**：広告は操作を妨げない位置に常時表示
* **実務を意識**：HTML / CSS / JS を分離
* **運用を想定**：PWA更新時のキャッシュ問題を解決
* **収益化設計**：AdSense審査を通すための構成を採用

---

## 開発背景

サブスクリプションサービスが増える中で、
「毎月・毎年いくら使っているか分かりづらい」という課題を感じたことがきっかけです。

学習目的にとどまらず、
**実際に公開・運用・収益化できるプロダクト**を目標に開発しました。

---

## 今後の改善予定

* 広告非表示の有料版対応
* カテゴリ別集計
* データのエクスポート機能
* UI / デザインの改善

---

## 作者

* 名前: そら
* 職種: フリーランスITエンジニア志望
* GitHub: [https://github.com/soranakatani2020-debug](https://github.com/soranakatani2020-debug)

---

## ライセンス

This project is licensed under the MIT License.

