// import AuthService from "../services/auth.service.js";

// class AuthController {
//   async login(req, res) {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         message: "Email and password are required",
//       });
//     }

//     const token = await AuthService.login(email, password);

//     if (!token) {
//       return res.status(401).json({
//         message: "Invalid credentials",
//       });
//     }

//     return res.json({ token });
//   }
// }

// export default new AuthController();

import AuthService from "../services/auth.service.js";

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        // Si viene de formulario
        if (req.accepts("html")) {
          return res.status(400).render("auth/login", {
            error: "Email y contraseña son obligatorios",
          });
        }

        // API
        return res.status(400).json({
          message: "Email and password are required",
        });
      }

      const token = await AuthService.login(email, password);

      if (!token) {
        if (req.accepts("html")) {
          return res.status(401).render("auth/login", {
            error: "Credenciales inválidas",
          });
        }

        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      // 👉 Guardar token en cookie (para EJS)
      if (req.accepts("html")) {
        res.cookie("token", token, {
          httpOnly: true,
          sameSite: "lax",
          secure: false, // true en prod
        });

        return res.redirect("/dashboard");
      }

      // 👉 API
      return res.json({ token });
    } catch (error) {
      console.error(error);

      if (req.accepts("html")) {
        return res.status(500).render("auth/login", {
          error: "Error interno",
        });
      }

      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new AuthController();

