const express = require('express');
const app = express();

app.get('/', (req, res)=> {
  res.send('Bem-vindo');
});

app.listen(3000,()=>{
    console.log("servidor rodando:http://localhost:3000")
});