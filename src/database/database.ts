import { Sequelize } from 'sequelize-typescript';


const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || "db4free.net",
  username: process.env.DB_USERNAME || "ifedayo",
  password: process.env.DB_PASSWORD || "ifedayo010",
  database: process.env.DB_DATABASE || "kreditask",
  logging: false,
 // models: [Catalogue]
});

export async function connectDatabase(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export default sequelize;