const ENV = 'development';

const config = {
  development: {
    SERVER_URL: 'http://localhost:3000',
  },
  production: {
    SERVER_URL: 'https://simple-login-and-register-full-stack-app.onrender.com',
  },
};

export default config[ENV];

// API_URL
// production
// development
