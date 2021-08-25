import express from 'express';
import welcomeController from '../controllers/welcome.controller';

const route = express.Router();

route.get('/', welcomeController);

export default route;
