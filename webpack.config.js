module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'production',
   
    entry: {
      'index': './src/index.ts',
      'manage': './src/manage.ts',
      'pacelist': './src/pacelist.ts',
      'pacelist_eng': './src/pacelist_eng.ts',
    },

    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/public/javascripts`,
      // 出力ファイル名
      filename: '[name].bundle.js'
    },
    optimization: {
      splitChunks: {
        name: 'common_module',
        chunks: 'initial'
      }
    },
    module: {
      rules: [
        {
          // 拡張子 .ts の場合
          test: /\.ts$/,
          // TypeScript をコンパイルする
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        {
          test: /\.vue$/,
          loader: ['vue-loader']
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
      extensions: [
        '.ts', '.vue', '.js'
      ],
      // Webpackで利用するときの設定
      alias: {
        vue: 'vue/dist/vue.min.js'
//        vue: 'vue/dist/vue.js'
      }
    },
  };
  