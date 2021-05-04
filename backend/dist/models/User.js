"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose"); //El model es diu user pq la base és de l'sprint0
const schema = new mongoose_1.Schema({
    nombre: [{ type: String, required: true }],
    fecha: [{ type: String, required: true }],
    dni: [{ type: String, required: true }],
    telefono: [{ type: String, required: true }],
    fiebre: [{ type: String, required: true }],
    tos: [{ type: String, required: true }],
    dificultad: [{ type: String, required: true }],
    malestar: [{ type: String, required: true }]
});
exports.default = mongoose_1.model('User', schema); //User como Institución 
