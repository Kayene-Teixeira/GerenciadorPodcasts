# Gerenciador de Podcasts

### Descrição
Um app ao estilo netflix, aonde eu possa centralizar diferentes episódios de podcasts separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features/Funcionalidades
- Listar os episódios de podcasts em sessões de categorias
    - [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

#### Feature:
    Listar os episódios de podcasts em sessões de categorias

### Como vou implementar:
    GET: retorna lista de episódios

```js
[
    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["saúde", "bodybuilder", "esporte"]
    },
    {
        podcastName: "flow",
        episode: "RUBENS BARRICHELLO - Flow #339",
        videoId: "4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        categories: ["esporte", "corrida"]
    },
]
```