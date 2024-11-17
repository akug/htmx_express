const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static('../frontend'));

let result = 0;

app.post('/update', (req, res) => {
    console.log(req.body);
    const { number } = req.body;
    result += number;
    res.json({ "result2": 4 });
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
