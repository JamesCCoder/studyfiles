const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
     
    if(url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html>');
        res.write('<p>GeeksforGeeks</p>');
        res.write('</html>');
        return res.end();
    }
     
    if(url === '/about') {
        res.write('<html>');
        res.write('<p>GeeksforGeeks- Node.js</p>');
        res.write('</html>');
        return res.end();
    }

    if(url === "*"){
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 not found');
        return res.end();
    }
});
 
server.listen(3000, () => {
    console.log("Server listening on port 3000")
});