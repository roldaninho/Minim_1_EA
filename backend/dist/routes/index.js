"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.Router();
router.route('/').get(user_controller_1.helloWorld);
router.route('/User').post(user_controller_1.createUser); //Añadir seguimiento
router.route('/User').get(user_controller_1.getUsers); //Listado seguimientos
//router.route('/User/loginUser/').post(loginUser);
router.route('/User/delete').post(user_controller_1.deleteUser); //Eliminar seguimiento
exports.default = router;
