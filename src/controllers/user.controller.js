import BaseController from "./base.controller.js";
import userService from "../services/user.service.js";

const userController = BaseController.createBaseController(userService);

export default userController;