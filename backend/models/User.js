"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombre: [{type: String, required: true}],
    descripcion: [{type: String}],
    url: [{type: String, required: true}],
    responsable: [{type: String, required: true}],
});
exports.default = mongoose_1.model('User', schema);
