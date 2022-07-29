const express = require('express');
const data = require('./data.json');

const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.get('/weather', (req, res) => {
    const {q = null} = req.query;
    if (q) {
        const dataMockKey = q.toLowerCase();
        const info = data.hasOwnProperty(dataMockKey) ? data[dataMockKey] : null;
        if (info == null) {
            return res.status(404).send({err: 'Location Not found'});
        }
        return res.send(info)
    }
    return res.status(400).send({err: 'Need to supply a location'});
})

app.listen(port, () => {
    console.log(`Weather app listening on port ${port}`)
})
