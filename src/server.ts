import * as http from 'http';

// Criando servidor
const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {

});

const port = process.env.PORT;

// Iniciando o servidor na porta especificada nas variaveis de ambiente
server.listen(port, () => {
    console.log(`🚀 Sevidor iniciado http://localhost:${port}`);
});