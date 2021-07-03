import config from './config';
import express from 'express';
import apiRouter from './api';
import serverRender from './serverRender';

// import fs from 'fs';

const server = express();

/* server.use(
  nodeSassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
  }),
); */

server.get(['/', '/contests/:contestId'], (req, res) => {
  serverRender().then((content) =>
    res.render('index', {
      content,
    }),
  );
});

/* server.get('/about.html', (req,res) => {
  fs.readFile('./about.html', (err,data) => {
     res.send(data.toString());
  });
}); */

server.use('/api', apiRouter);
// server.use(express.static('public'));
server.use(express.static(__dirname + '/public'));
server.set('view engine', 'ejs');

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
