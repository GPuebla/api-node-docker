import BaseService from './base.service'
import Shipper from '../models/shipper.model'

const shipperService = BaseService.createBaseService(Shipper);

export default shipperService;
