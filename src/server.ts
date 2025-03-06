import * as http from 'http';
import { app } from './app';

// Criando servidor
const server = http.createServer(app);

const port = process.env.PORT;

// Iniciando o servidor na porta especificada nas variaveis de ambiente
server.listen(port, () => {
    console.log(`🚀 Servidor iniciado http://localhost:${port}`);
});