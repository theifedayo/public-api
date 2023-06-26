const dotenv = require('dotenv')

dotenv.config({path: __dirname + '/../../.env'})

const config = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV,
    host: process.env.DB_HOST || "localhost:3306",
    username: process.env.DB_USERNAME || "ifedayo",
    password: process.env.DB_PASSWORD || "ifedayo",
    database: process.env.DATABASE || "kreditask",
};

export default config;

