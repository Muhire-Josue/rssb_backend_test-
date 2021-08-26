import express from 'express';
import FileController from '../controllers/files.controller';

const { upload, getAllUsers, getOneUser } = FileController;
const app = express();

app.post('/files/upload', upload);
app.get('/files', getAllUsers);
app.get('/files/:id', getOneUser);
export default app;
