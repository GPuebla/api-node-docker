import AuthService from "../services/auth.service.js";

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        // Si viene de formulario
        if (req.accepts("html")) {
          return res.status(400).render("auth/login", {
            layout: false,
            error: "Email y contraseña son obligatorios",
            title:"Login",
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
            layout: false,
            error: "Credenciales inválidas",
            title:"Login",
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
          secure: false,
          maxAge: 1000 * 60 * 5, // true en prod
        });

        return res.redirect("/users");
      }

      // 👉 API
      return res.json({ token });
    } catch (error) {
      console.error(error);

      if (req.accepts("html")) {
        return res.status(500).render("auth/login", {
          error: "Error interno",
          layout: false,
          title:"Login",
        });
      }

      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new AuthController();

