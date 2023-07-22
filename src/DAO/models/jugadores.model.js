let jugadores = [{ _id: '100', goles: 100, name: 'juan roman', descripcion: 'simplemente alegria' }];
class JugadoresModel {
  getAll() {
    const todosLosJugadores = jugadores;
    return jugadores;
  }
  post(jugador) {
    jugador._id = Math.random() * 100 + '';
    jugadores.push(jugador);
    return jugador;
  }
}

export const jugadoresModel = new JugadoresModel();
