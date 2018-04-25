const express = require('express')
const bodyParser = require('body-parser')
const yelp = require('yelp-fusion');
const app = express()

const PORT = process.env.PORT || 8080
const API_KEY = 'epREyfN-zxtPGD4tvhVxArDA6emoy8z-JW8Di_poDZWColtMebJCmMXGn-tpXKQgU-0MhURY5x57jHiRqyoQypNIqrIz1QI5jiWxDTLQgNtMp92W2uyUJ634dKbgWnYx'
const client = yelp.client(API_KEY)

app.get('/api/:type/:location', (req, res) => {
    const {type, location} = req.params
    client.search({term: type, location}).then(response => response.jsonBody)
    .then(data => res.send(data))
    .catch(err => console.log('Error:', err))
});


app.listen(PORT, () => console.log('Starting on', PORT))