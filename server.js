const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/wikipedia', async (req, res) => {
  const query = req.query.query;
  const url = `https://es.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&titles=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Wikipedia' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
