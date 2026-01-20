import BaseService from "./base.service.js";
import user from "../models/user.model";

const userService = BaseService.createBaseService(user);

export default userService;