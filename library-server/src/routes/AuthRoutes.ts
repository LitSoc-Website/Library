import express from 'express';
import AuthController from '../controllers/AuthControllers';
import { ValidateSchema, Schemas } from '../middlewares/Validation';
const router = express.Router();

router.post('/register', ValidateSchema(Schemas.user.create, 'body'), AuthController.handleRegister);
router.post('/login', ValidateSchema(Schemas.user.login, 'body'), AuthController.handleLogin);//didnt use body
export = router;