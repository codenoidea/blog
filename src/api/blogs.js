'use strict'

import express from 'express';
const router = express.Router();
import BlogsService from '../services/blogsService';
import authenticateJWT from '../middleware/authenticate';

router.delete('/:id', authenticateJWT, async (req, res, next) => {
  try {
    const result = await BlogsService.delete(req);
    res.json({
      result
    });
  } catch (e) {
    next(e);
  }
});

router.put('/:id', authenticateJWT, async (req, res, next) => {
  try {
    const result = await BlogsService.update(req);
    res.json({
      result
    });
  } catch (e) {
    next(e);
  }
});

router.get('/:id', authenticateJWT, async (req, res, next) => {
  try {
    const result = await BlogsService.read(req);
    res.json({
      result
    });
  } catch (e) {
    next(e);
  }
});

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