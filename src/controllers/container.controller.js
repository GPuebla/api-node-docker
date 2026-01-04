// import containerService from "../services/container.service";


// class ContainerController {

  
  

//   // Crear contenedor
//   async create(req, res) {
//     try {
//       const container = await containerService.create(req.body);
//       res.status(201).json(container);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }

//   // Obtener todos
//   async getAll(req, res) {
//     try {
//       const containers = await containerService.getAll();
//       res.json(containers);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   }

//   // Obtener por ID
//   async getById(req, res) {
//     try {
//       const container = await containerService.getById(req.params.id);
//       res.json(container);
//     } catch (err) {
//       res.status(404).json({ error: err.message });
//     }
//   }

//   // Actualizar contenedor
//   async update(req, res) {
//     try {
//       const container = await containerService.update(req.params.id, req.body);
//       res.json(container);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }

//   // Obtener por booking
//   async getByBooking(req, res) {
//     try {
//       const containers = await containerService.getByBooking(req.params.bookingId);
//       res.json(containers);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }

//   // Reasignar settings reefer
//   async reassignSettings(req, res) {
//     try {
//       const updated = await containerService.reassignSettings(
//         req.params.id,
//         req.body.settings
//       );
//       res.json(updated);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }

//   // Actualizar estado del contenedor
//   async updateStatus(req, res) {
//     try {
//       const updated = await containerService.updateStatus(
//         req.params.id,
//         req.body.status
//       );
//       res.json(updated);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }

//   // Obtener por ID
//   async deleteById(req, res) {
//     try {
//       const deletedCotainer = await containerService.deleteContainer(req.params.id);
//       res.json(deletedCotainer);
//     } catch (err) {
//       res.status(404).json({ error: err.message });
//     }
//   }

// }

// export default new ContainerController();


import BaseController from "./base.controller.js";
import containerService from "../services/container.service.js";

// 1️⃣ Crear controller base (CRUD)
const containerController = BaseController.createBaseController(containerService);

// 2️⃣ Agregar SOLO métodos custom

// Obtener por booking
containerController.getByBooking = async (req, res, next) => {
  try {
    const containers = await containerService.getByBooking(
      req.params.bookingId
    );
    res.json(containers);
  } catch (error) {
    next(error);
  }
};

// Reasignar settings reefer
containerController.reassignSettings = async (req, res, next) => {
  try {
    const updated = await containerService.reassignSettings(
      req.params.id,
      req.body.settings
    );
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

// Actualizar estado
containerController.updateStatus = async (req, res, next) => {
  try {
    const updated = await containerService.updateStatus(
      req.params.id,
      req.body.status
    );
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

export default containerController;

