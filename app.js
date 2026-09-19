const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // Tambahkan charset=utf-8 di akhir baris ini
  res.setHeader('Content-Type', 'text/plain; charset=utf-8'); 
  res.end('Halo! Ini aplikasi pertama DevOps-ku 🚀\n');
});

server.listen(3000, () => {
  console.log('Server jalan di port 3000');
});