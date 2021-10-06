## About
DockerとTypeScriptの練習。

## Dockerイメージビルドとコンテナ実行・停止
Dockerfileからイメージをビルドするには`docker build`コマンドを使う。
`$ docker build -t node-hello-world .`
作成したイメージの確認。
`$ docker run -p 3000:3000 -d node-hello-world`

## 参考
- [TypeScript + Node.js プロジェクトのはじめかた2020 - Qiita](https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49)
- [dotenv - npm](https://www.npmjs.com/package/dotenv)