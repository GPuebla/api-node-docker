import BaseService from "./base.service.js";
import User from "../models/user.model.js";

const userService = {
  ...BaseService.createBaseService(User),

  // Sobrescribimos create solo para aplicar hash automáticamente
  async create(data) {
    const user = new User(data); // 🔐 dispara el pre("save")
    await user.save();
    return user;
  },
};

export default userService;
