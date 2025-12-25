class BaseController {
  createBaseController = (service) => ({
    create: async (req, res, next) => {
      try {
        const result = await service.create(req.body);
        res.status(201).json(result);
      } catch (error) {
        next(error);
      }
    },

    getAll: async (req, res, next) => {
      try {
        const result = await service.getAll();
        res.json(result);
      } catch (error) {
        next(error);
      }
    },

    getById: async (req, res, next) => {
      try {
        const result = await service.getById(req.params.id);
        if (!result) {
          return res.status(404).json({ message: "Not found" });
        }
        res.json(result);
      } catch (error) {
        next(error);
      }
    },

    update: async (req, res, next) => {
      try {
        const result = await service.update(req.params.id, req.body);
        if (!result) {
          return res.status(404).json({ message: "Not found" });
        }
        res.json(result);
      } catch (error) {
        next(error);
      }
    },

    remove: async (req, res, next) => {
      try {
        const result = await service.remove(req.params.id);
        if (!result) {
          return res.status(404).json({ message: "Not found" });
        }
        res.status(204).send();
      } catch (error) {
        next(error);
      }
    },
  });
}

export default new BaseController();
