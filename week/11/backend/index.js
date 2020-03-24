const express = require('express');
const app = express();

//rota raiz
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Nathalia Alice'
    });
})

//inserindo porta
app.listen(3333); 