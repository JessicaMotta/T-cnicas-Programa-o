/*const { response } = require('express');
const{createServer}=require('http');
let server = createServer((request,response) => {
    response.writeHead(200,{"Content_Type":"text/html"});
    response.write('<h1> Olá mundo </h1><p>Projeto</p>');
    response.end
});
server.listen(8000);
console.log("Projeto Iniciado");
*/
let express = require('express');
let app = express();
app.get('/',function(req,res){
    res.send('ROTA GET')
});

app.get('/apresentar',function(req,res){
    /*res.send('rota 1');
    resquisição pegando uma consulta atraves de uma variavel = nome*/
    let param1 = req.query.nome;
    let param2 = req.query.n1;
    let param3 = req.query.n2;
    let soma = parseInt(param2) + parseInt(param3);
    res.send('Olá ' + param1 + ' - ' + param2 + param3);
    /*http://localhost:3000/apresentar?nome=Jessica
    se quiser adicionar mais valores separar por interrogação */
});
app.listen(3000,function(){
    console.log("Projeto iniciado na porta 3000");
});