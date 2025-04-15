import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './routes/mocks.routes.js';

const app = express()
const PORT = 8080

app.use(express.json())

//Routes
app.use('/api/mocks',  mocksRouter)


mongoose.connect('mongodb+srv://pirileo2018:coder@cluster0.uuxmkga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch(err => console.error('Error conectando a MongoDB:', err));