const Controller = require('./controller.js')

const projectData = {
  // coloque os dados aqui
}

const success = ( data ) => console.log('sucesso: ', data)
const error = ( err ) => console.log('error: ', err)

Controller.create( projectData ).then( success ).catch( error )
