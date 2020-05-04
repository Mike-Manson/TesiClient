const jsonServer = require('json-server');
const path = require('path');
var db = require('./games.json');
const _ = require('lodash');

const server = jsonServer.create();
const router = jsonServer.router('./games.json');
const middlewares = jsonServer.defaults({noCors: true, static: path.join(__dirname, './../../../dist')});
const port = process.env.PORT || 3000;

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use((req, res, next) => {
  res.header('X-Content-Type-Options', 'nosniff');
  next();
})

server.get('/*', (req, res, next) => {
  console.log(req.originalUrl);
  console.log(path.join(__dirname, './../../../dist/', req.originalUrl === '/' ? 'index.html' : req.originalUrl));
  if (!req.originalUrl.includes('api/server')) {
    res.sendFile(path.join(__dirname, './../../../dist/', req.originalUrl === '/' ? 'index.html' : req.originalUrl));
  } else {
    next();
  }
});

server.post('/api/server/games', (req, res) => {
  if (req.method === 'POST') {
      if (req.body) {
        res.status(201).jsonp(req.body);
        db.games.push(req.body);
      } else {
        res.status(400).jsonp({
          error: "Bad id"
        });
      }
  }
});

server.post('/api/server/search/games', (req, res) => {
  if (req.method === 'POST') {
      if (req.body) {
        let results = db.games.filter(game => {
          return game.name.toLowerCase().includes(req.body['name'].toLowerCase());
        });
        console.log(results);
        res.status(200).jsonp(results);
      } else {
        res.status(400).jsonp({
          error: "Bad request"
        });
      }
  }
});


server.get('/api/server/game', (req, res) => {
  if (req.method === 'GET') {
    let id = req.query['id'];
    if (id != null && id >= 0) {
      let result = db.games.find(game => {
        return game.id == id;
      })

      if (result) {
        let {id, ...game} = result;
        res.status(200).jsonp(game);
      } else {
        res.status(400).jsonp({
          error: "Bad id"
        });
      }
    } else {
      res.status(400).jsonp({
        error: "No valid id"
      });
    }
  }
});

server.get('/api/server/games', (req, res) => {
  if (req.method === 'GET') {
    let result = db.games;
    if (result) {
      res.status(200).jsonp(result);
    } else {
      res.status(400).jsonp({
        error: "Bad request"
      });
    }
  }
});

server.use(router);
server.listen(port);
