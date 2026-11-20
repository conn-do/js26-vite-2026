# JS26 Vite

## VSCode の設定

拡張機能「Oxc」をインストール

.vscode/settings.json を作成し以下をコピペ

```json
{
  "editor.defaultFormatter": "oxc.oxc-vscode",
  "editor.formatOnSave": true,
  "files.insertFinalNewline": true,
  "editor.tabSize": 2,
  "editor.indentSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false
}
```

src/App.tsx を編集・保存したときにフォーマットされることを確認する
