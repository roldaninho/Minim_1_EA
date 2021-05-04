import {Router} from 'express';
import {helloWorld, createUser, deleteUser, getUsers} from '../controllers/user.controller'

const router = Router();
    
router.route('/').get(helloWorld); 

router.route('/User').post(createUser); //Añadir seguimiento

router.route('/User').get(getUsers); //Listado seguimientos
    
//router.route('/User/loginUser/').post(loginUser);

router.route('/User/delete').post(deleteUser); //Eliminar seguimiento

export default router;