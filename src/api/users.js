'use strict'

import express from 'express';
const router = express.Router();
import UserService from '../services/usersService';
import authenticateJWT from '../middleware/authenticate';

router.get('/', authenticateJWT, async (req, res, next) => {
  res.json({
    message: '성공',
    user: req.user,
  });
});

router.post('/singIn', async (req, res, next) => {
  try {
    const result = await UserService.SignIn(req.body);
    res.json({
      result
    });
  } catch (e) {
    next(e);
  }
});

router.post('/signUp', async (req, res, next) => {
  try {
    const result = await UserService.SignUp(req.body);
    res.json({
      result
    });
  } catch (e) {
    next(e);
  }
});

export default router;