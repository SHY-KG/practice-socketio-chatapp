const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 5000;

const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

io.on('connection', (socket) => {
  console.log('NEW Websocket Connection');
});

server.listen(port, () => {
  console.log(`Server is up on PORT ${port} \nhttp://localhost:${port}`);
});
