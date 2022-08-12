const mongoose = require('mongoose'); // inporta o mongoose

const ConviteSchema = new mongoose.Schema({
  //
  nome: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  marca: {
    type: String,
    require: true,
  },
  quantidade: {
    type: Number,
    require: true,
  },
    /*
  imageUrl: {
    type: String,
    required: true,
  },
  */
});

const Convite = mongoose.model('Convites', ConviteSchema);

module.exports = Convite;
