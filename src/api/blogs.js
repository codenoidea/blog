'use strict'

import express from 'express';
const router = express.Router();
import BlogsService from '../services/blogsService';
import authenticateJWT from '../middleware/authenticate';

router.get('/', authenticateJWT, async (req, res, next) => {
  try {
    const result = await BlogsService.list(req);
    res.json({
      result
    });
  } catch (e) {
    next(e);
  }
});

router.post('/', authenticateJWT, async (req, res, next) => {
  try {
    const result = await BlogsService.create(req);
    res.json({
      result
    });
  } catch (e) {
    next(e);
  }
});

export default router;