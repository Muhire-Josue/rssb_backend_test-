import express from 'express';
import welcomeRoute from './welcome.routes';
import fileRoute from './file.routes';

const app = express.Router();

app.use(welcomeRoute);
app.use(fileRoute);

export default app;
