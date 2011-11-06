var app = require('express').createServer()
  , io = require('socket.io').listen(app);

//Listening on port 8080. Change it to whatever you like.
app.listen(8080);

//Serve a few static files
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
app.get('/viewer', function (req, res) {
  res.sendfile(__dirname + '/viewer.html');
});
app.get('/yellow.png', function (req, res) {
  res.sendfile(__dirname + '/yellow.png');
});
app.get('/blue.png', function (req, res) {
  res.sendfile(__dirname + '/blue.png');
});

io.sockets.on('connection', function (socket) {
  socket.on('motion', function (data) {
      var accel = {
          x : Math.round(data.x),
          y : Math.round(data.y),
          z : Math.round(data.z)
      };
      io.sockets.emit('view', accel);
  });
  socket.on('color', function (color) {
      io.sockets.emit('color', color);
  });
});