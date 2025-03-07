# Gerenciador de Podcasts

## Descrição
Um aplicativo ao estilo Netflix, onde é possível centralizar diferentes episódios de podcasts organizados por categoria.

## Domínio
Podcasts feitos em vídeo.

## Funcionalidades
- Listar episódios de podcasts: os episódios são organizados em categorias (exemplo: saúde, bodybuilder, mentalidade, humor).

- Filtrar episódios por nome do podcast.

## Tecnologias Utilizadas  
- **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript no lado do servidor.  
- **[Módulo HTTP (nativo)](https://nodejs.org/api/http.html)** - Módulo embutido do Node.js para criar servidores HTTP.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript que adiciona tipagem estática.  
- **[TSX](https://github.com/esbuild-kit/tsx)** - Execução de TypeScript sem necessidade de compilação manual.  
- **[Tsup](https://tsup.egoist.dev/)** - Empacotador eficiente para projetos TypeScript.  
- **[@types/node](https://www.npmjs.com/package/@types/node)** - Tipagens do Node.js para melhor desenvolvimento.  

## Endpoints

### Listar episódios de podcasts

#### Requisição:
```http
GET /list
```

#### Resposta:
```json
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "categories": ["saúde", "bodybuilder", "esporte"]
    },
    {
        "podcastName": "flow",
        "episode": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "4KDGTdiOV4I",
        "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg",
        "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        "categories": ["esporte", "corrida"]
    }
]
```

### Filtrar episódios por nome do podcast

#### Requisição:
```http
GET /episode?podcastName=flow
```

#### Resposta:
```json
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "categories": ["saúde", "bodybuilder", "esporte"]
    }
]
```

## Configuração e Execução

1. Clone o repositório:
```sh
git clone https://github.com/Kayene-Teixeira/GerenciadorPodcasts
```

2. Acesse o diretório do projeto e instale as dependências:
```sh
npm install
```

3. Para iniciar o projeto em modo desenvolvimento:
```sh
npm run start:dev
```

4. Para iniciar o projeto e observar mudanças automaticamente:
```sh
npm run start:watch
```

## Estrutura do Código

### Entrada de Requisição
```ts
import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const baseUrl = request.url?.split('?')[0];

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
};
```