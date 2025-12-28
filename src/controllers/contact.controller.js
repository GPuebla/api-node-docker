import BaseController from "./base.controller.js";
import contactService from "../services/contact.service.js";

const contactController = BaseController.createBaseController(contactService);

export default contactController;
