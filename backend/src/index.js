//importação de dependências 
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//Instância do express, para lidar com as rotas, parâmetros e respostas pro cliente
const app = express();

//Protocolos http e websocket
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Conexão com o banco de dados
mongoose.connect('mongodb+srv://admin:admin@cluster0-9e9av.mongodb.net/test?retryWrites=true&w=majority',{
useNewUrlParser: true,
});

//repassar a informação do protocolo websocket pra todas as rotas
app.use((req, res, next) =>{
    req.io = io;

    next();
})

//configuração do cors
app.use(cors());

//rota para arquviso estáticos, por exemplo, imagens
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

//criação de rotas para aplicação
app.use(require('./routes'));

server.listen(3333);