import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  entry: {
    forgotpassword: "./src/ts/pages/forgot-password.ts",
    login: "./src/ts/pages/login.ts",
    myaccount: "./src/ts/pages/my-account.ts",
    register: "./src/ts/pages/register.ts",
    resetpassword: "./src/ts/pages/reset-password.ts",
    formValidation: "./src/ts/utils/form-validation.ts",
    utils: "./src/ts/utils/utils.ts",
    config: "./src/ts/config.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
    port: 8080,
    open: true,
  },
}
