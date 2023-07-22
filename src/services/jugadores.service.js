import { jugadoresModel } from '../DAO/models/jugadores.model.js';

class JugadoresService {
  getAll() {
    //LOGICA DE NEGOCIO // PROMACION PURA Y DURA // FOR LOOPS // IFS //
    const todosLosJugadoresEnDb = jugadoresModel.getAll();
    return todosLosJugadoresEnDb;
  }
  post(jugador) {
    //LOGICA DE NEGOCIO // PROMACION PURA Y DURA // FOR LOOPS // IFS //
    const jugadorCreadoEnBase = jugadoresModel.post(jugador);
    return jugador;
  }
}

export const jugadoresService = new JugadoresService();
