import express from 'express';
import welcomeRoute from './welcome.routes';

const app = express.Router();

app.use(welcomeRoute);

export default app;
