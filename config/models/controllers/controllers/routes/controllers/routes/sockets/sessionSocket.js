const { Server } = require("socket.io");

exports.initSocket = (server) => {
  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    socket.on("join-session", (code) => {
      socket.join(code);
      io.to(code).emit("sync", "User joined session");
    });
  });
};
