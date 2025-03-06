import { IncomingMessage, request, ServerResponse } from 'http'; // request e response (tem que ser igual ao que está na criação do servidor)
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisodes();

    // Escrevendo no cabeçalho da requisição
    res.writeHead(StatusCode.OK, {"Content-Type": "application/json"});

    // Escrevendo no conteúdo da requisição
    // Devolver para qualquer client um texto (stringify)
    res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceFilterEpisodes(req.url);

    res.writeHead(StatusCode.OK, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(content));
};