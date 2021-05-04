"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUsers = exports.createUser = exports.helloWorld = void 0;
const User_1 = __importDefault(require("../models/User"));
let mongoose = require('mongoose');
function helloWorld(req, res) {
    return res.send('Hello World !!!');
}
exports.helloWorld = helloWorld;
async function createUser(req, res) {
    let user = req.body;
    console.log(user);
    let newUser = new User_1.default();
    newUser._id = new mongoose.Types.ObjectId();
    newUser.nombre = user.nombre;
    newUser.fecha = user.fecha;
    newUser.dni = user.dni;
    newUser.telefono = user.telefono;
    newUser.fiebre = user.fiebre;
    newUser.tos = user.tos;
    newUser.dificultad = user.dificultad;
    newUser.malestar = user.malestar;
    console.log(newUser);
    let result = await newUser.save();
    res.status(200).send(result);
}
exports.createUser = createUser;
;
// export async function loginUser (req: Request, res: Response){
//     let {username, password} = req.body;
//     const user = {
//         username: username,
//         password: password
//     };
//     console.log("Username: " + user.username);
//     console.log("Password: " + user.password);
//     const registeringUser = new User(user);
//     const registeredUser = await User.findOne({username:registeringUser.username})
//     try{
//         if(registeredUser != null){
//             if(registeredUser.get('password') == registeringUser.password){
//                 return res.status(200).send({message: "User correctly logged in"});
//             } else {
//                 return res.status(201).send({message: "Wrong password"});
//             }
//         } else {
//             return res.status(404).send({message: "User not found"});
//         }
//     } catch {
//         return res.status(500).send({message: "Internal server error"});
//     }
// }
async function getUsers(req, res) {
    let users = await User_1.default.find();
    if (users) {
        res.status(200).json(users);
    }
    else {
        res.status(424).send({ message: 'No se han encontrado seguimientos' });
    }
}
exports.getUsers = getUsers;
;
async function deleteUser(req, res) {
    let user = req.body;
    let result = await User_1.default.findByIdAndRemove(user._id);
    res.status(200).send(result);
}
exports.deleteUser = deleteUser;
