import tourModel from '../models/tours.js'

const getAlltourController = async (req,res) => {
  try {
    const  tours = await tourModel.getAllToursModel()
    res.status(200).json(tours)
  } catch (error) {
    console.log(error)
  }
}
export {
    getAlltourController
}