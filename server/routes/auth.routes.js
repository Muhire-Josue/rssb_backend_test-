import express from 'express';
import AuthController from '../controllers/auth.controller';

const { signup, login } = AuthController;

const app = express();
app.post('/users/signup', signup);
app.post('/users/login', login);
export default app;
