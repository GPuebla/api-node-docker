import BaseService from './base.service.js'
import Shipper from '../models/shipper.model.js'

const shipperService = BaseService.createBaseService(Shipper);

export default shipperService;
