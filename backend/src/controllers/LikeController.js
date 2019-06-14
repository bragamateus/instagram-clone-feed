const Post = require('../models/Post');

module.exports = {
    //função que adiciona um like na imagem ou post
    async store(req, res){
        const post = await Post.findById(req.params.id);
        //contagem de likes
        post.likes += 1;
        //salvar o like no banco
        await post.save();
        //enviar em tempo real
        req.io.emit('like', post);

        return res.json(post);
    }
};