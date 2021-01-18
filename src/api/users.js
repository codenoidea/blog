'use strict'

import express from 'express';
const router = express.Router();
import UserService from '../services/usersService';

router.get('/', async (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/', async (req, res, next) => {
  try {
    const result = await UserService.SignUp(req.body);
    res.json({
      result
    });
  } catch (e) {
    next(e);
  }
})

export default router;