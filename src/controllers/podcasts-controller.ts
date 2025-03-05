import { IncomingMessage, request, ServerResponse } from 'http'; // request e response (tem que ser igual ao que está na criação do servidor)
import { serviceListEpisodes } from '../services/list-episodes-service';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisodes();

    // Escrevendo no cabeçalho da requisição
    res.writeHead(200, {"Content-Type": "application/json"});

    // Escrevendo no conteúdo da requisição
    // Devolver para qualquer client um texto (stringify)
    res.end(JSON.stringify(content));
}