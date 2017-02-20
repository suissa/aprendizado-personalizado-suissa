const Project = require('./model')

const project1 = {nomeProjeto: 'Project', pontuacao: 2, leiDoBem: 1, conteudo: 'Conteudo'}

const success = ( data ) => console.log('data', data)
const error = ( error ) => console.log('error', error)

const create = ( obj ) => {
	Project.create(obj)

	return obj
}

Project.create(project1).then( success ).catch( error )

const Controller = {create}