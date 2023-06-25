import express, { Application } from 'express';
import dotenv from 'dotenv';
import catalogueRoutes from './routes/catalogueRoutes';
import { connectDatabase } from './database/database';

dotenv.config({path: '../.env'});

connectDatabase();

const app: Application = express();

app.use(express.json());

app.use('/api/catalogues', catalogueRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;