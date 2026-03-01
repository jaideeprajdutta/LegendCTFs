const express = require('express');
const auth = require('./auth');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({ status: 'LEGEND Platform Operational', version: '1.0.0' });
});

app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    await auth.register(username, password);
    res.status(201).send('User registered');
});

app.listen(PORT, () => {
    console.log(`LEGEND API server listening on port ${PORT}`);
});
