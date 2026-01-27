import userService from "../services/user.service";

const index = async (req, res) => {
  const users = await userService.getAll();
  res.render("users/index", { 
    title:"Users",
    users });
};

const show = async (req, res) => {
  const user = await userService.getById(req.params.id);
  res.render("users/show", {
    title:"User", 
    user });
};

export default {index, show};

