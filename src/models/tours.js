import { create } from "json-server"

const tourModel = {
    async getAllToursModel (){
        try {
            const peticion = await fetch('http://localhost:4000/tours')
            const tours = await peticion.json()
            return tours
        } catch (error) {
            console.log(error)
        }
    }
    ,
    createTourModel(newTour){

        // 1. CONEXION BDD
        const url = 'http://localhost:4000/tours'

        // 2. ENVIAR DATA A LA BDD
        const peticion = fetch(url,{
            method:"POST",
            body:JSON.stringify(newTour),
            headers:{"Content-Type":"application/json"}
        })
        // 3. OBTENER RESPUESTA A LA BDD
        const data = peticion.json()

        // 4. MANDAR LA RESPUESTA AL CONTROLADOR
        return data
    }

}
export default tourModel