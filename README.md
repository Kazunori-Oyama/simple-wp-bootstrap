# simple-wp-bootstrap
_S（アンダースコアズ）で作ったテーマへBootstrapを組み込んだテンプレートセット。
workspaceフォルダはBootstrap.cssのカスタムビルドを行うスペースとして利用することを想定している。

# 制作環境
## Gulpの利用
- マシンへNode.jsをインストールする
- workspaceディレクトリを用意する
- workspaceディレクトリへgulpおよびプラグインをインストールする
- workspace内に、sassディレクトリを作成する
- npm init -y
- npm install -D gulp
- npm install -D gulp-sass
- npm install -D gulp-postcss
- npm install -D gulp-autoprefixer
- npm install -D css-declaration-sorter
- npm install -D gulp-merge-media-queries
- gulpfile.jsをプロジェクトフォルダに設置する。

## galpfile.jsの内容
workspace内にある.sassは全て監視対象となっており、cssディレクトリに書き出される。

## メディアクエリについて
mixinとして、メディアクエリを各プロパティにセットして記述していく。

詳しくは下記の記事を参照 https://macoblog.com/sass_media_query/

通常のメディアクエリでは記述箇所が離れるため、視認性が悪く不要な記述が増える傾向がある。