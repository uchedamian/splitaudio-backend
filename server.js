require('dotenv').config();
const http = require('http');
const app = require('./app');
const { initSocket } = require('./sockets/sessionSocket');
const { sequelize } = require('./models');

const server = http.createServer(app);
initSocket(server);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`SplitAudio backend running on port ${PORT}`);
  });
});
