// server.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

const USER = 'AgustinGibaut';
const GITHUB_API = `https://api.github.com/users/${USER}/repos`;

app.get('/api/repos', async (req, res) => {
  try {
    const resp = await fetch(`${GITHUB_API}?sort=updated&per_page=12`);
    if (!resp.ok) throw new Error(`GitHub status ${resp.status}`);
    const data = await resp.json();
    const repos = data.map(r => ({
      name: r.name,
      url: r.html_url,
      desc: r.description,
      lang: r.language,
      stars: r.stargazers_count,
      updated: r.updated_at
    }));
    res.json(repos);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API en http://localhost:${PORT}`));
