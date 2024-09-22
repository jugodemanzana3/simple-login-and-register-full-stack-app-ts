const env = "prod"

const config = {
  dev: {
    SERVER_URL: "http://localhost:3000",
  },
  prod: {
    SERVER_URL: "https://simple-login-and-register-full-stack-app.onrender.com",
  },
}

export default config[env]
