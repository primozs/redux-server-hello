import Server from 'socket.io';

export function startServer(store) {
  var io = new Server().attach(8090);

  store.subscribe(function () {
    io.emit('state', store.getState())
  });

  io.on('connection', function (socket) {
    socket.emit('state', store.getState());
    socket.on('action', store.dispatch.bind(store));
  });
}
