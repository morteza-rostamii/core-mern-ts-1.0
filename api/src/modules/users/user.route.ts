import express from 'express'
import userService from './user.service.js';

const router = express.Router();

// Get: /users
router
  .route('/')
  .get(userService.gets);

export default router