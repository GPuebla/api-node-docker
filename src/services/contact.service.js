import BaseService from "./base.service.js";
import Contact from '../models/contact.model.js';

const contactService = BaseService.createBaseService(Contact);

export default contactService;