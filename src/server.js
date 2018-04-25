const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = process.env.PORT || 8080

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});


app.listen(PORT, () => console.log('Starting on', PORT))