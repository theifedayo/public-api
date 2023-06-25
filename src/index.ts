import express, { Application } from 'express';
import dotenv from 'dotenv';
import catalogueRoutes from './routes/catalogueRoutes';
import { connectDatabase } from './database/database';
import config from './config/config';
dotenv.config({path: __dirname + '../.env'});

connectDatabase();

const app: Application = express();

app.use(express.json());

app.use('/api/catalogues', catalogueRoutes);

const port = config.port || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;