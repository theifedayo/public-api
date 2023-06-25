import { Sequelize } from 'sequelize-typescript';
import { Catalogue } from './models/catalogueModel';


const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || "127.0.0.1",
  username: process.env.DB_USERNAME || "ifedayo",
  password: process.env.DB_PASSWORD || "ifedayo",
  database: process.env.DB_DATABASE || "kreditask",
  logging: false,
  //models: [Catalogue]
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