import * as http from 'http';

import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";

// Criando servidor
const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // queryString 
    const [baseUrl, queryString] = req.url?.split('?') ?? ['',''];

    // Quando meu método for um GET 
    if(req.method === 'GET' && baseUrl === '/api/list') {
        await getListEpisodes(req, res);
    }

    if(req.method === 'GET' && baseUrl === '/api/episode') {
        await getFilterEpisodes(req, res);
    }
});

const port = process.env.PORT;

// Iniciando o servidor na porta especificada nas variaveis de ambiente
server.listen(port, () => {
    console.log(`🚀 Servidor iniciado http://localhost:${port}`);
});