# GSI_Geoid_ES6

## 概要

以下のレポジトリからコードを参考にしました。

https://github.com/naokiueda/gsigeoidmapjs

説明を引用すると
> 国土地理院のジオイドデータをJavaScriptで使うためのクラスです。

基本的に私がやったこととしては、
- ES6の記法にアレンジしたこと(クラス化など)
- 重たいジオイドプロパティを別ファイルとしたこと

使い方は簡単で、緯度経度を入力すればジオイド高を得られます。
```
let geoidClass = new GsiGeoid();
let height = geoidClass.getGeoid(35, 136);
```

## 参考資料
ECMAScript6 
http://es6-features.org/#Constants

