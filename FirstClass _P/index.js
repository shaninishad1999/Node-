const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" }); // Set content type to HTML
    res.write('<div style="text-align: center;">');
    res.write("<h1>Hi this is test file to u</h1>");
    res.write("<h2>Hi this is test file to u</h2>");
    res.write("<h3>Hi this is test file to u</h3>");
    res.write("<h4>Hi this is test file to u</h4>");
    res.write("<h5>Hi this is test file to u</h5>");
    res.end();
}).listen(8500); 

