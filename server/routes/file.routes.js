import express from 'express';
import FileController from '../controllers/files.controller';
import checkJwtToken from '../middlewares/jwtAuthentication';

const { upload, getAllUsers, getOneUser } = FileController;
const app = express();

app.post('/files/upload', checkJwtToken, upload);
app.get('/files', checkJwtToken, getAllUsers);
app.get('/files/:id', checkJwtToken, getOneUser);
export default app;
