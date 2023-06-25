const dotenv = require('dotenv')

dotenv.config({path: __dirname + '/../../.env'})

const config = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV,
    host: process.env.HOST || "localhost:3306",
    username: process.env.USERNAME || "ifedayo",
    password: process.env.PASSWORD || "ifedayo",
    database: process.env.DATABASE || "kreditask",
};

export default config;

