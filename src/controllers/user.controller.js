import BaseController from "./base.controller";
import userService from "../services/user.service";

const userController = BaseController.createBaseController(userService);

export default userController;