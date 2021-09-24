const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
    res.send(`Hello Mundo, estamos funcionando desde el puerto ${puerto}.`);
})

app.listen(puerto, ()=> {
    console.log(`server on port: ${puerto}`);
})

