import { jugadoresService } from '../services/jugadores.service.js';

class JugadoresController {
  getAll(req, res) {
    //1-extrae del request los datos
    //2-NO trabaja. pasa el problema al service.
    const jugadoresEncontrados = jugadoresService.getAll();
    //3-Responde al usuario final
    return res.status(200).json({ msg: 'listado de jugadores', payload: jugadoresEncontrados });
  }
  post(req, res) {
    //1-extrae del request los datos
    const jugador = req.body;
    //2-NO trabaja. pasa el problema al service.
    const jugadorCreado = jugadoresService.post(jugador);
    //3-Responde al usuario final
    return res.status(200).json({ msg: 'jugador creado', payload: jugadorCreado });
  }
}

export const jugadoresController = new JugadoresController();
