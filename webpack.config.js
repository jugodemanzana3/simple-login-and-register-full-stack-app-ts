import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  entry: {
    login: "./dist/login.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./prod/js"),
  },
  mode: "production",
  devtool: 'source-map',
}
