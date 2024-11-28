const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // To serve static files

app.post('/add-item', (req, res) => {
    const item = req.body.item;
    console.log(`Item received: ${item}`);
    res.status(200).send({ message: 'Item added', item });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});