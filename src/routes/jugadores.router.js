import express from 'express';
import { jugadorValidator } from '../middlewares/main.js';
import { jugadoresController } from '../controllers/jugadores.controller.js';

export const jugadoresRouter = express.Router();

jugadoresRouter.get('/', jugadoresController.getAll);
jugadoresRouter.post('/', jugadorValidator, jugadoresController.post);
