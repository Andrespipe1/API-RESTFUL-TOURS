import {Router} from 'express'
import { createTourController, deleteTourController, getAlltourController, updateTourController } from '../controllers/tour_controller.js'

const router = Router()

router.get('/tours',getAlltourController)

router.post('/tours',createTourController)

router.put('/tours/:id',updateTourController)

router.put('/tours/:id',deleteTourController)


export default router