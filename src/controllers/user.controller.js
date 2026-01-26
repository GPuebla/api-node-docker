// import BaseController from "./base.controller.js";
// import userService from "../services/user.service.js";

// const userController = BaseController.createBaseController(userService);



// export default userController;

import BaseController from "./base.controller.js";
import userService from "../services/user.service.js";

/**
 * Base CRUD controller (API)
 * This includes:
 * - getAll
 * - getById
 * - create
 * - update
 * - remove
 */
const userController = BaseController.createBaseController(userService);

/**
 * GET /users
 * 
 * This method handles BOTH:
 * - HTML rendering (EJS)
 * - JSON API response
 * 
 * The response format is decided based on the request's Accept header.
 */
userController.index = async (req, res) => {

  console.log("Accept header:", req.headers.accept);
  console.log("Accepts HTML:", req.accepts("html"));

  try {
    // Fetch all users from the service layer
    const users = await userService.getAll();

    /**
     * If the client accepts HTML (browser),
     * render the EJS view
     */
    if (req.accepts("html")) {
      return res.render("users/index", {
        title: "Users",
        users: users.map(user => ({
          email: user.email,
          role: user.role,
        })),
      });
    }

    /**
     * Otherwise, return JSON (API)
     */
    return res.json(
      users.map(user => ({
        email: user.email,
        role: user.role,
      }))
    );

  } catch (error) {
    console.error("Error loading users:", error);

    /**
     * Error handling for HTML
     */
    if (req.accepts("html")) {
      return res.status(500).render("error", {
        message: "Error loading users",
      });
    }

    /**
     * Error handling for API
     */
    return res.status(500).json({
      message: "Internal server error",
    });
  }

};

export default userController;