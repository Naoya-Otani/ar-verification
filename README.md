# ar-verification

## Get Started

ローカルに持ってくる

```
git clone https://github.com/Naoya-Otani/ar-verification.git
```

サーバーをたてる（Python を使用）

```
python -m http.server 8000
```

スマホで確認したい場合（VSCode のポート転送システムを使用）

1. VSCode 上の Terminal を開く
2. 「ポート」タブを開く
3. 「ポートを転送」をクリック
4. ポート番号 `8000` を指定
5. 地球儀アイコンをクリックし、転送先アドレスをコピー
6. スマホのブラウザでそのアドレスにアクセスする（Github の認証が必要）

## 日本語テキストを表示させるときの注意

1. 使用したいフォントの `.tts` ファイルを用意
2. [MSDF 変換ツール](https://msdf-bmfont.donmccurdy.com/)で、用意したファイルを選択
3. AR で使用したい文字を全て入力
4. [CREATE MSDF] ボタンをクリック
5. zip ファイルをダウンロード&&解凍
6. png ファイルの名前を、_.png から _-msdf.png にリネーム
7. 以下のように記述
   ```
     <a-text
       value="こんにちは世界！"
       font="custom-msdf.json"
       font-image="custom-msdf.png"
       negate="false"
       scale="2 2 1"
       position="0 1 -4"
       color="red">
     </a-text>
   ```

## 動画を表示させるときの注意

video タグの`src`, `id`属性に加えて以下の 4 つの属性を明記しないとうまく表示されないことがよくあった

- crossorigin="anonymous"
- preload="auto"
- loop
- muted

## デモ動画

https://github.com/Naoya-Otani/ar-verification/assets/102457026/22725cc1-6235-4e80-bef9-c03fefb2dd1a

### Reference

- [A-Frame Docs](https://aframe.io/docs/1.6.0/introduction/)
- [MSDF Generator](https://msdf-bmfont.donmccurdy.com/)
- [AR Marker Training](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)
