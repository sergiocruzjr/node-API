//const http = require('http')

/*const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pagina de editora',
    '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end(rotas[req.url]);
})*/


import app from './src/app.js'
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})