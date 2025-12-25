import Shipper from '../models/shipper.model'

class shipperClass{
    async create (data){
        return Shipper.create(data)
    }
}