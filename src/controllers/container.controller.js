import containerService from "../services/conteiner.service";

class ContainerController {

  // Crear contenedor
  async create(req, res) {
    try {
      const container = await containerService.create(req.body);
      res.status(201).json(container);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Obtener todos
  async getAll(req, res) {
    try {
      const containers = await containerService.getAll();
      res.json(containers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Obtener por ID
  async getById(req, res) {
    try {
      const container = await containerService.getById(req.params.id);
      res.json(container);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  // Actualizar contenedor
  async update(req, res) {
    try {
      const container = await containerService.update(req.params.id, req.body);
      res.json(container);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Obtener por booking
  async getByBooking(req, res) {
    try {
      const containers = await containerService.getByBooking(req.params.bookingId);
      res.json(containers);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Reasignar settings reefer
  async reassignSettings(req, res) {
    try {
      const updated = await containerService.reassignSettings(
        req.params.id,
        req.body.settings
      );
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Actualizar estado del contenedor
  async updateStatus(req, res) {
    try {
      const updated = await containerService.updateStatus(
        req.params.id,
        req.body.status
      );
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new ContainerController();
