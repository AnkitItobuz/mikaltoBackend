const http = require('http');
const fs = require('fs');

const port = 9400;
console.log(`server is running on http://${port}`);

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    const main = fs.readFileSync("../data.json");
    console.log(JSON.parse(main));
    res.end(main);

}).listen(port);
