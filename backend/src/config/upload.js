const multer = require ('multer');
const path = require('path');

module.exports={
    //configuração do destino dos arquivos
    storage: new multer.diskStorage({
        destination:path.resolve(__dirname,'..', '..', 'uploads'),
        filename: function(req, file, callback){
            //nome do arquivo
            callback(null, file.originalname)
        }
    })
}   