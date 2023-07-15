import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

/* import { Command } from 'commander';

export const program = new Command();

program
  .option('-d', 'Variables para debug', false)
  .option('-n, --nombre <nombre>', 'aca va el nombre')
  .option('-p <port>', 'Puerdo del servicor', 8080)
  .option('--mode <mode>', 'Modo de trabajo', 'production')
  .requiredOption('-u <user>', 'User que usa el app', 'No se ha declarado un user')
  .option('-l, --letters [letters...]', 'Especificar letras');

program.parse(); */

/* console.log('Options: ', program.opts());
console.log('Valor de mode: ', program.opts().mode);
console.log('Datos no reconocibles: ', program.args);
 */

import dotenv from 'dotenv';

export const entorno = { MODE: process.argv[2] };

if (process.argv[2] != 'DEV' && process.argv[2] != 'PROD') {
  console.log('por favor inidique prod o dev');
  process.exit();
}

dotenv.config({
  path: process.argv[2] === 'DEV' ? './.env.development' : './.env.production',
});

entorno.PORT = process.env.PORT;
entorno.MONGO_URL = process.env.MONGO_URL;
entorno.ADMIN_NAME = process.env.ADMIN_NAME;
entorno.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
/* export default {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  adminName: process.env.ADMIN_NAME,
  adminPassword: process.env.ADMIN_PASSWORD,
}; */
