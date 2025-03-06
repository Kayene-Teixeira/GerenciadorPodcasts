import * as http from 'http';

import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

// Criando servidor
const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {

    // queryString 
    const [baseUrl, queryString] = request.url?.split('?') ?? ['',''];

    // Quando meu método for um GET 
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
});

const port = process.env.PORT;

// Iniciando o servidor na porta especificada nas variaveis de ambiente
server.listen(port, () => {
    console.log(`🚀 Servidor iniciado http://localhost:${port}`);
});