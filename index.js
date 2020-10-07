const express = require('express');
const setTopic = require('./src/setChannelTopic');

const port = process.env.PORT || 3000
const app = express();


app.post('/', (req, res) => {
    setTopic();
    res.send('Weekly #musicsharing channel topic update.');
});

app.listen(port, () => {
    console.log(`Server connected on port: ${port}`);
});