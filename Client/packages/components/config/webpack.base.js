const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const pkg = require("../package.json");

const webpackBaseRules = [
  {
    test: /\.s?(c|a)ss$/i,
    use: [
      "style-loader",
      "css-loader",
      "resolve-url-loader",
      {
        loader: "sass-loader",
        options: {
          additionalData: '@import "./src/scss/index.scss";',
          sourceMap: true,
        },
      },
    ],
  },
  {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: "/node_modules/",
    use: [
      {
        loader: "babel-loader",
        options: {
          babelrc: true,
        },
      },
    ],
  },
  {
    test: /\.(ts|tsx)$/,
    exclude: "/node_modules/",
    use: [
      {
        loader: "ts-loader",
        options: {
          context: path.resolve(__dirname, "../"),
          configFile: path.resolve(__dirname, "../tsconfig.json"),
        },
      },
    ],
  },
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
    generator: {
      filename: "./assets/images/[hash][ext][query]",
    },
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: {
      filename: "./assets/fonts/[hash][ext][query]",
    },
  },
];

const webpackBasePlugins = [
  new ProvidePlugin({
    React: "react",
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, "../src/types"),
        to: path.resolve(__dirname, "../dist/types"),
      },
    ],
  }),
];

const webpackDevServerSettings = {
  compress: true,
  hot: true,
  open: true,
  client: {
    overlay: false,
  },
};

const baseConfig = {
  mode: "development",
  entry: {
    index: {
      import: "./src/index.tsx",
    },
  },
  target: "web",
  externalsPresets: { node: true },
  externals: ["react", "react-dom", nodeExternals()],
  output: {
    publicPath: "",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    library: {
      name: pkg.name,
      type: "umd",
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", "*"],
  },
  performance: {
    hints: "warning",
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  module: {
    rules: webpackBaseRules,
  },
  plugins: webpackBasePlugins,
  devServer: webpackDevServerSettings,
};

module.exports = {
  baseConfig,
  webpackBaseRules,
  webpackBasePlugins,
  webpackDevServerSettings,
};
