const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); 

const app = express();

mongoose.connect('mongodb+srv://hugobraganca:25082012@cluster0-l9ld4.mongodb.net/wek10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json()); //Configuração para o express interpretar requisições que tenham o corpo em JSON 
app.use(routes);

//Método HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
//  Body: request.body (Dados para criação ou alteração de um registro)



app.listen(1994);