import { IncomingMessage, request, ServerResponse } from 'http'; // request e response (tem que ser igual ao que está na criação do servidor)
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisodes();

    // Escrevendo no cabeçalho da requisição
    res.writeHead(200, {"Content-Type": "application/json"});

    // Escrevendo no conteúdo da requisição
    // Devolver para qualquer client um texto (stringify)
    res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    const queryString = req.url?.split('?p=')[1] ?? '';
    
    const content = await serviceFilterEpisodes(queryString);

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(content));
};