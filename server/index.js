const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


app.post('/findDecimalNumbers', (req, res) => {
    const inputString = req.body.data;
    const decimalNumbers = extractDecimalNumbers(inputString);
    res.json({ decimalNumbers });
});

function extractDecimalNumbers(str) {
    const regex = /\d+(\.\d+)?/g;
    const matches = str.match(regex);

    return matches ? matches.map(Number) : [];
}

app.listen(3333, () => {
    console.log('Server is running on port 3333');
});