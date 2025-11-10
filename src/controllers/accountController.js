import ac from '../models/userModel'


const getAllUsers = async (req, res) => {
  const value = await ac.getValue()
  res.send(value)
};


export default {
  getAllUsers
};
