// Camada que trabalha sobre os dados, verificação e etc... 

import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();

    return data;
}