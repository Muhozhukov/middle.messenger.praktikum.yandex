import express from 'express';
import dotenv from 'dotenv';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let loginPageUrl = '';
let indexPageUrl = '';
let staticUrl = '';
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  loginPageUrl = '../../dist/pages/login/login.html';
  indexPageUrl = '../../dist/index.html';
  staticUrl = '../dist';
} else {
  loginPageUrl = '../client/pages/login/login.html';
  indexPageUrl = '../client/index.html';
  staticUrl = '../client';
}

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, staticUrl)));

app.get('/', (req, res) => {
  console.log(path.join(__dirname, indexPageUrl));
  res.sendFile(path.join(__dirname, indexPageUrl));
});

app.get('/login', (req, res) => {
  console.log(path.join(__dirname, loginPageUrl));
  res.sendFile(path.join(__dirname, loginPageUrl));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
