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
async createTourModel(newTour){

    // 1. CONEXION BDD
    const url = 'http://localhost:4000/tours'

    // 2. 

    const peticion = await fetch(url,{
            method:"POST",
            body:JSON.stringify(newTour),
            headers:{"content.Type":"application/json"}

    })
    // 3. OBTENER RESPUESTA A LA BDD
    const data = await peticion.json()

    // 4. MANDAR LA RESPUESTA AL CONTROLADOR
    return data
    }
    ,

async updateTourModel(tourId,updatedTour){

    // 1. CONEXION BDD
    const url = `http://localhost:4000/tours/${tourId}`

    //2. Envviar DAta ala bbd
    const peticion = await fetch(url,{
        method:"PUT",
        body:JSON.stringify(updatedTour),
        headers:{"content-Type":"application/json"}
        })

    // 3. OBTENER RESPUESTA A LA BDD
    const data = await peticion.json()

    // 4. MANDAR LA RESPUESTA AL CONTROLADOR
    return data
}
,
async updateTourModel(tourId,updatedTour){

    // 1. CONEXION BDD
    const url = `http://localhost:4000/tours/${tourId}`

    //2. Envviar DAta ala bbd
    const peticion = await fetch(url,{
        method:"PUT",
        body:JSON.stringify(updatedTour),
        headers:{"content-Type":"application/json"}
        })

    // 3. OBTENER RESPUESTA A LA BDD
    const data = await peticion.json()

    // 4. MANDAR LA RESPUESTA AL CONTROLADOR
    return data
}
,

async deleteTourModel(tourId){

    // 1. CONEXION BDD
    const url = `http://localhost:4000/tours/${tourId}`

    //2. Envviar DAta ala bbd
    const peticion = await fetch(url,{
        method:"DELETE",
    })

    // 3. OBTENER RESPUESTA A LA BDD
    const data = await peticion.json()

    // 4. MANDAR LA RESPUESTA AL CONTROLADOR
    return data
    }

}
export default tourModel