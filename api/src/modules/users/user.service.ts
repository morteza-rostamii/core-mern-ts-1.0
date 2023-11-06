import { NextFunction, Request, Response } from "express"
import userModel from "./user.model.js";

const userService = {

  // Get: /users (get all)
  gets: async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.hostname);
    const users = await userModel.getUsers();

    return res.status(200).json({
      users: users,
      msg: req.hostname,
    })
  },

  // Get: /users/:id (get one)
  get: (req: Request, res: Response, next: NextFunction) => {

  },

  // Post: /users/:id (create)

  // Patch: /users/:id (update)

  // Delete: /users/:id (del)

  
}

export default userService