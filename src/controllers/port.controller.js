import BaseController from './base.controller.js';
import PortService from '../services/port.service.js';

const portController = BaseController.createBaseController(PortService);

export default portController;