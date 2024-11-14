import tourModel from '../models/tours.js'

const getAlltourController = async (req,res) => {
  try {
    const  tours = await tourModel.getAllToursModel()
    res.status(200).json(tours)
  } catch (error) {
    console.log(error)
  }
}

const createTourController = (req,res)=>{
  const newTourData ={
    id:"3434535sffgg",
    ...req.body
  }
  try {
    const tour = tourModel.createTourModel(newTourData)
    res.status(201).json(tour)
  } catch (error) {
    res.status(500).json(error)
  }
}
export {
    getAlltourController
}