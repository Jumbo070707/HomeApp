const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml' };

http.createServer((req, res) => {
  const safePath = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(__dirname, safePath === '/' ? 'index.html' : safePath);
  if (!filePath.startsWith(__dirname + path.sep) && filePath !== __dirname) { res.writeHead(403); res.end('Forbidden'); return; }
  const ext = path.extname(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    res.end(data);
  });
}).listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
