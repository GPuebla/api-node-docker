const getUsers = async (req, res) => {res.send('Get User1')};
const getUsers2 = async (req, res) => {res.send('Get User2')};
const createUser = async (req, res) => {res.send('Create User')};
const updateUser = async (req, res) => {res.send('Update User')};
const deleteUser = async (req, res) => {res.send('Delete User')};

export default {
  getUsers,
  getUsers2,
  createUser,
  updateUser,
  deleteUser
};
