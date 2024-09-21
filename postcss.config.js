import autoprefixer from "autoprefixer"
import cssnano from "cssnano"

export default {
  plugins: [
    autoprefixer,
    cssnano({
      preset: "default",
    }),
  ],
}

// npx postcss src/css/global.css -o dist/css/global.css
// npx postcss src/css/auth.css -o dist/css/auth.css
// npx postcss src/css/my-account.css -o dist/css/my-account.css
