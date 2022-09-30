const { createServer } = require('http')
createServer((request, response) => {
  response.writeHead(200, { 'Content-type': 'text/plain' })
  request.on('data', chunk => response.write(chunk.toString().toUpperCase()))
}).listen(8000)
