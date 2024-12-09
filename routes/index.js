import { Router } from 'express';
import AppController from '../controllers/AppController.js';
import AuthController from '../controllers/AuthController.js';
import UsersController from '../controllers/UsersController.js';
import FilesController from '../controllers/FilesController.js';

const router = Router();
router.get('/status', AppController.getStatus);
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);
router.get('/users/me', UsersController.getMe);
router.get('/files/:id', FilesController.getShow);
router.get('/files/:id/data', FilesController.getFile);
router.get('/files', FilesController.getIndex)
router.get('/stats', AppController.getStats);
router.post('/users', UsersController.postNew);
router.post('/files', FilesController.postUpload);
router.put('/files/:id/publish', FilesController.putPublish);
router.put('/files/:id/unpublish', FilesController.putUnpublish);

export default router;

