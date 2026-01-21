// import { Router } from "express";

// class BaseRouter {
//   createBaseRouter = (controller) => {
//     const router = Router();

//     router.post("/", controller.create);
//     router.get("/", controller.getAll);
//     router.get("/:id", controller.getById);
//     router.put("/:id", controller.update);
//     router.delete("/:id", controller.remove);

//     return router;
//   };
// }

// export default new BaseRouter();


import { Router } from "express";

class BaseRouter {
  /**
   * controller: el controller con métodos CRUD
   * middlewares: array de middlewares que se aplican a todas las rutas (opcional)
   */
  createBaseRouter = (controller, middlewares = []) => {
    const router = Router();

    // Aplica middlewares a cada ruta
    router.post("/", ...middlewares, controller.create);
    router.get("/", ...middlewares, controller.getAll);
    router.get("/:id", ...middlewares, controller.getById);
    router.put("/:id", ...middlewares, controller.update);
    router.delete("/:id", ...middlewares, controller.remove);

    return router;
  };
}

export default new BaseRouter();
