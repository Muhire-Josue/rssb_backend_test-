import express from 'express';
import fileRoute from './file.routes';
import authRoute from './auth.routes';

const app = express.Router();

app.use(fileRoute);
app.use(authRoute);

export default app;
