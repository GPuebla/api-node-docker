import AuthService from "../services/auth.service.js";

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const token = await AuthService.login(email, password);

    if (!token) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    return res.json({ token });
  }
}

export default new AuthController();
