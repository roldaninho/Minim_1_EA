"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.Router();


router.route('/')
    .get(user_controller_1.helloWorld); //la part lògica esta en un altre document en el controlador de cada cosa
router.route('/newUser')
    .post(user_controller_1.createUser); //Nueva institución

router.route('/login')
    .get(user_controller_1.loginUser);

router.route('/deleteUser')
    .delete(user_controller_1.deleteUser); //Borrar institución

exports.default = router;
