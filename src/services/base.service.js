
class BaseService {

    createBaseService = (Model) => ({
        create: (data) => Model.create(data),
        getAll: () => Model.find(),
        getById: (id) => Model.findById(id),
        update: (id, data) => Model.findByIdAndUpdate(id, data, { new: true }),
        remove: (id) => Model.findByIdAndDelete(id),
    });

}

export default new BaseService;