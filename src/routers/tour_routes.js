import {Router} from 'express'
import { getAlltourController } from '../controllers/tour_controller.js'

const router = Router()

router.get('/tours',getAlltourController)




export default router