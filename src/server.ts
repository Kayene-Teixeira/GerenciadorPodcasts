import * as http from 'http';

import { getListEpisodes } from "./controllers/podcasts-controller";

// Criando servidor
const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // Quando meu método for um GET 
    if(req.method === 'GET') {
        await getListEpisodes(req, res);
    }
});

const port = process.env.PORT;

// Iniciando o servidor na porta especificada nas variaveis de ambiente
server.listen(port, () => {
    console.log(`🚀 Servidor iniciado http://localhost:${port}`);
});