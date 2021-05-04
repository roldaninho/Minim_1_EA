import {Request, Response} from 'express'
import { emptyDirSync } from 'fs-extra';
import { updateLanguageServiceSourceFile } from 'typescript';
import User from '../models/User'
let mongoose = require('mongoose');

export function helloWorld(req: Request, res: Response){
    return res.send('Hello World !!!')
}
export async function createUser (req: Request, res: Response){ //Crear Seguimiento de una persona (usuario)
    let user = req.body;
    console.log(user);
    let newUser = new User();
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
};
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

export async function getUsers(req: Request, res: Response){ //Función para coger todos los seguimientos
    let users = await User.find();
    if(users){
        res.status(200).json(users);
    } else {
        res.status(424).send({message: 'No se han encontrado seguimientos'});
    }
};
export async function deleteUser (req: Request, res: Response){ //Función para eliminar un seguimiento
    let user = req.body;
    let result = await User.findByIdAndRemove(user._id);
    res.status(200).send(result);
}