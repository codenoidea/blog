'use strict'

import express from 'express';
const router = express.Router();
import UserService from '../services/usersService';

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async (req, res, next) => {
  const result = await UserService.SignUp(req.body);
  res.json({
    result
  });
})

export default router;