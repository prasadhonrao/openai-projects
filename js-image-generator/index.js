import express from 'express';
import { config } from 'dotenv';
import openaiRoutes from './routes/openaiRoutes.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// for static folders
app.use(express.static(join(__dirname, 'public')));

app.use('/openai', openaiRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
