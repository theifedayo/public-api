import { Sequelize } from 'sequelize-typescript';
import config from '../config/config';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: config.host || "localhost:3306",
  username: config.username || "ifedayo",
  password: config.password || "ifedayo",
  database: config.database || "kreditask",
  logging: false,
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