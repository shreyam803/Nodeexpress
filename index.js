const express = require('express'),
 http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const leaderRouter = require('./leaderRouter');
const hostname = 'localhost';
const port = 3000 || process.env.PORT;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/leaders', leaderRouter);
app.use(express.static(__dirname+ '/public'))

app.use((req, res, next) => {
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
