const express = require('express');
const app = express();
const port = 5050;

app.get('/', (req, res) => {
    res.send(`Hello Mundo, estamos funcionando desde el puerto ${port}.`);
})

app.get('/test', (req, res) => {
    res.send(`<h1>Testeando en h1.</h1>`)
})

app.listen(port, ()=> {
    console.log(`server on port: ${port}`);
})

