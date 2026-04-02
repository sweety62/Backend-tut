const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, resp) => {
  const url = req.url;

  if (url === '/' || url === '/home' || url === '/index.html') {
    const file = path.join(__dirname, 'html', 'home.html');
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        resp.writeHead(500, { 'Content-Type': 'text/plain' });
        resp.end('Internal server error');
        return;
      }
      resp.writeHead(200, { 'Content-Type': 'text/html' });
      resp.end(data);
    });
    return;
  }

  if (url === '/style.css') {
    const file = path.join(__dirname, 'html', 'style.css');
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        resp.writeHead(500, { 'Content-Type': 'text/plain' });
        resp.end('CSS not found');
        return;
      }
      resp.writeHead(200, { 'Content-Type': 'text/css' });
      resp.end(data);
    });
    return;
  }

  // 404
  resp.writeHead(404, { 'Content-Type': 'text/plain' });
  resp.end('Not Found');
});

server.listen(3800, () => {
  console.log('Server running at http://localhost:3800');
});