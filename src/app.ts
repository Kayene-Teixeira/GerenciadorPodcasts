import * as http from 'http';

import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

// Configurações da aplicação
export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    // queryString 
    const baseUrl = request.url?.split('?')[0];

    // Quando meu método for um GET 
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
};