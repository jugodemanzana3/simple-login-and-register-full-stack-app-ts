const ENV = 'development';
const config = {
    development: {
        SERVER_URL: 'http://localhost:3000',
    },
    production: {
        SERVER_URL: '',
    },
};
export default config[ENV];
// API_URL
