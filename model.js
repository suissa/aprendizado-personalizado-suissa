const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

const Schema = mongoose.Schema

const __projectSchema = new Schema({
	nomeProjeto: String,
	pontuacao: Number,
	leiDoBem: Number,
	conteudo: String,
});

const Project = mongoose.model('Project', __projectSchema)

module.exports = Project