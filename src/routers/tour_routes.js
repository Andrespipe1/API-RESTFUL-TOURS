import {Router} from 'express'
import { createTourController, deleteTourController, getAlltourController, updateTourController } from '../controllers/tour_controller.js'

const router = Router()

//Pública 
router.get('/tours',getAlltourController)

router.put('/tours/:id',getAlltourController)

//Privadas
router.post('/tours',createTourController)
//Privadas
router.put('/tours/:id',updateTourController)
//Privadas
router.put('/tours/:id',deleteTourController)


export default router