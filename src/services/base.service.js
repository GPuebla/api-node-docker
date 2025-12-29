
// class BaseService {

//     createBaseService = (Model) => ({
//         create: (data) => Model.create(data),
//         getAll: () => Model.find(),
//         getById: (id) => Model.findById(id),
//         update: (id, data) => Model.findByIdAndUpdate(id, data, { new: true }),
//         remove: (id) => Model.findByIdAndDelete(id),
//     });

// }

// export default new BaseService;

class BaseService {
    createBaseService(Model, options = {}) {
      const { populate = "" } = options;
  
      return {
        create: (data) => Model.create(data),
  
        getAll: (filter = {}) =>
          Model.find(filter).populate(populate),
  
        async getById(id) {
          const doc = await Model.findById(id).populate(populate);
          if (!doc) throw new Error(`${Model.modelName} not found`);
          return doc;
        },
  
        update: (id, data) =>
          Model.findByIdAndUpdate(id, data, { new: true, runValidators: true }),
  
        remove: (id) =>
          Model.findByIdAndDelete(id),
      };
    }
  }
  
  export default new BaseService();


  //EJEMPLO DE USO

//   const containerService = BaseService.createBaseService(Container, {
//     populate: "booking transport",
//   });
  

