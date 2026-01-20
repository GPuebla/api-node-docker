import BaseService from "./base.service";
import user from "../models/user.model";

const userService = BaseService.createBaseService(user);

export default userService;