import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

class AuthService {
  async login(email, password) {
    // Find user by email
    const user = await User.findOne({ email });

    // Validate user existence and status
    if (!user || !user.isActive) return null;

    // Compare passwords
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return null;

    // Generate JWT
    return jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  }
}

export default new AuthService();
