const compression = require('compression')
const express = require('express');
const axios = require("axios");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(express());
app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/repos', async (req, res) => {
    const resp = await axios.get('/repositories', {
        baseURL: "https://gh-trending-api.herokuapp.com",
        headers: {
            "Accept": "application/json"
        }
    });
    res.status(200).send(resp.data);
});

app.get('/devs', async (req, res) => {
    const resp = await axios.get('/developers', {
        baseURL: "https://gh-trending-api.herokuapp.com",
        headers: {
            "Accept": "application/json"
        }
    });
    res.status(200).send(resp.data);
});


app.get('*', async (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

