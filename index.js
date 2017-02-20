const Project = require('./model')

const project1 = {"Projeto", 2, 1, "Conteudo"}

const success = ( data ) => console.log('data', data)
const error = ( error ) => console.log('error', error)

Project.create(project1).exec().then( success ).catch( error )