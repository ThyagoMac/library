const http = require('http');

const servidor = http.createServer(function (req, resp) {

    let html = '';
    if (req.url == '/'){
        html = `<html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Main </h1>
                    </body> 
                </html>`;
    } else if (req.url == '/livros'){
        html = `<html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Livros </h1>
                    </body> 
                </html>`;
    }
    resp.end(html);
});
servidor.listen(3000);