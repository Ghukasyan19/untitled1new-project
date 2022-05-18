const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.post('/create', ((req, res) =>{
    fs.writeFileSync('./users.json', JSON.stringify(req.body));
    // console.log(req.body);
    res.status(201).send('successfully created');
}));
app.get('/users', (req, res) =>{
    const data = fs.readFileSync('./users.json', 'utf-8');
    res.status(200).send(data);
});

app.listen(PORT,() => {
    console.log(`Server running on port: ${PORT}`);
});


