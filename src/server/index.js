import express from 'express';
import dotenv from 'dotenv';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = resolve(__dirname, '../../dist');

const app = express();
const PORT = 3000;
app.use(express.static(resolve(distPath)));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
