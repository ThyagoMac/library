
const app = require('./src/config/custom-express.js');

app.listen(app.port, function(){
    console.log('Servidor rodando na porta ', app.port);
    console.log('http://localhost:'+app.port+'/');
});