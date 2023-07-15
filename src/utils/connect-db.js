import { connect } from 'mongoose';

export async function connectMongo() {
  try {
    await connect('mongodb+srv://guillermofergnani:d3IUa8A4QOAZkoQa@guille-cluster.pzfq0ua.mongodb.net/?retryWrites=true&w=majority');
    console.log('Conectado a la base de datos');
  } catch (e) {
    console.log(e);
    throw 'Falló la conexion';
  }
}
