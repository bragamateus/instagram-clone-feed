const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    //função que retorna todos os posts em ordem de data de criação
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);
    },
    //função que retorna os dados do arquivo e dados do post e redimenciona a imagem
    async store(req, res){
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        const [name] = image.split('.');
        const fileName = `${name}.jpg`;

        await sharp(req.file.path)
        .resize(500)
        .jpeg({quality: 70})
        .toFile(
            path.resolve(req.file.destination, 'resized', fileName)
        )
        //deleta o arquivo original
        fs.unlinkSync(req.file.path)
        //salvar no banco de dados
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        });
        //enviar informação em tempo real
        req.io.emit('post', post);

        return res.json(post);
    }
};