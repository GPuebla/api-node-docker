import { Router } from "express";

class BaseRouter {
  createBaseRouter = (controller) => {
    const router = Router();

    router.post("/", controller.create);
    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);
    router.put("/:id", controller.update);
    router.delete("/:id", controller.remove);

    return router;
  };
}

export default new BaseRouter();
