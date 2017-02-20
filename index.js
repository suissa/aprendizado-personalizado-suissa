const Project = require('./model')

const project1 = {} //coloque aqui os dados do Project


const success = ( data ) => console.log('data', data)
const error = ( error ) => console.log('error', error)

Project.create(project1).exec().then( success ).catch( error )
