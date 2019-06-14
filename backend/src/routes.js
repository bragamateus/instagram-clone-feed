const express = require('express');
//configuração multer
const multer = require('multer');
const uploadConfig = require('./config/upload')

const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')

const routes = new express.Router();
const upload = multer(uploadConfig);


//rota get posts
routes.get('/posts', PostController.index);
//rota que permite um post com qualquer formato de arquivo
routes.post('/posts', upload.single('image'), PostController.store);
//rota like post
routes.post('/posts/:id/like', LikeController.store);


module.exports = routes;