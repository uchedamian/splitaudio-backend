const { Server } = require('socket.io');

exports.initSocket = (server) => {
  const io = new Server(server, { cors: { origin: '*' } });

  io.on('connection', socket => {
    socket.on('join-session', sessionId => {
      socket.join(sessionId);
      io.to(sessionId).emit('device-update');
    });

    socket.on('sync-playback', data => {
      socket.to(data.sessionId).emit('sync-playback', data);
    });
  });
};
