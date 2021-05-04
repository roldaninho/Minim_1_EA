import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import path from 'path'

const app = express();

import indexRoutes from './routes/index'


//settings
app.set('port', process.env.PORT || 3000); // seleccionem port 3000



// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Routes
app.use('/',indexRoutes); 

export default app;