import {Schema,model,Document} from 'mongoose'; //El model es diu user pq la base és de l'sprint0

const schema = new Schema({
    nombre: [{type: String, required: true}],
    fecha: [{type: String, required: true}],
    dni: [{type: String, required: true}],
    telefono: [{type: String, required: true}],
    fiebre: [{type: String, required: true}],
    tos: [{type: String, required: true}],
    dificultad: [{type: String, required: true}],
    malestar: [{type: String, required: true}]
});

interface IUser extends Document {
    nombre: string;
    fecha: string;
    dni: string;
    telefono: string;
    fiebre: string;
    tos: string;
    dificultad: string;
    malestar: string;
}


export default model<IUser>('User',schema); //User como Institución 