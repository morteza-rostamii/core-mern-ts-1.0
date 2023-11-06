import { NextFunction, Request, Response } from "express"

const userService = {

  // Get: /users (get all)
  gets: (req: Request, res: Response, next: NextFunction) => {
    console.log(req.hostname);
    return res.status(200).json({
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