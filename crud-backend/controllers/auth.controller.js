import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  try {
      await newUser.save();
      const user = {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
      };
      res.status(201).json({ user, message: 'User created successfully' });
  } catch (error) {
      next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });
    const { password: hashedPassword, ...rest } = validUser._doc;
    res
      .status(200)
      .json({ ...rest, token });
  } catch (error) {
    next(error);
  }
};
