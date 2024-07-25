// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuração do Body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração das rotas
const routes = require('./routes/index');
app.use('/', routes);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));