import { IncomingMessage, request, ServerResponse } from 'http'; // request e response (tem que ser igual ao que está na criação do servidor)
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: PodcastTransferModel = await serviceListEpisodes();

    // Escrevendo no cabeçalho da requisição
    res.writeHead(content.statusCode, {"Content-Type": "application/json"});

    // Escrevendo no conteúdo da requisição
    // Devolver para qualquer client um texto (stringify)
    res.write(JSON.stringify(content.body));
    res.end();
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(content.body));
    res.end();
};