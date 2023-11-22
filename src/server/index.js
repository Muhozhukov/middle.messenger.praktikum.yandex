import express from 'express';
import dotenv from 'dotenv';
import path, { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = resolve(__dirname, '../../dist');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(resolve(distPath)));

app.get('/', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(distPath, '/pages/login/login.html'));
});
app.get('/signup', (req, res) => {
  res.sendFile(path.join(distPath, '/pages/signup/signup.html'));
});
app.get('/chat', (req, res) => {
  res.sendFile(path.join(distPath, '/pages/chat/chat.html'));
});
app.get('/error', (req, res) => {
  res.sendFile(path.join(distPath, '/pages/errorPage/errorPage.html'));
});
app.get('/profile', (req, res) => {
  res.sendFile(path.join(distPath, '/pages/profile/profile.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
