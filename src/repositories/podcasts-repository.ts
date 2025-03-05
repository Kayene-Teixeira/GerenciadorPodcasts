import fs from "fs"; // lê e escreve arquivos do sistema
import path from "path"; // trabalha com caminhos de arquivos
import { Podcast } from "../models/podcast-model";


// caminho
const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (): Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8"); // lendo arquivo
    const jsonFile = JSON.parse(rawData);
    return jsonFile;
};