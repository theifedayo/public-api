import express, { Application } from 'express';
import dotenv from 'dotenv';
import catalogueRoutes from './routes/catalogueRoutes';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use('/api/posts', postRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});