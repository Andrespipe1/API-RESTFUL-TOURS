// Requerir módulos
// ESMODULES
import express from 'express'
import router from './routers/tour_routes.js'

// INICIALIZACIONES
const app = express()

// VARIABLES
app.set('port',process.env.port || 3000)


//MIDDLEWARE
app.use(express.json())



//RUTAS

// ruta principal
app.get('/',(req,res)=>{
    res.send("OK")
})

// rutas para el tour
app.use('/api',router)

// rutas para el user


// rutas para el booking



//EXPORTAR LA INSTANCIA DE APP
export default app

