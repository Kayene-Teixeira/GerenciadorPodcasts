import fs from "fs"; // lê e escreve arquivos do sistema
import path from "path"; // trabalha com caminhos de arquivos
import { PodcastModel } from "../models/podcast-model";


// caminho
const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8"); // lendo arquivo
    let jsonFile = JSON.parse(rawData);

    if(podcastName) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    }

    return jsonFile;
};