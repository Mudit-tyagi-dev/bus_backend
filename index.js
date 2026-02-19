const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
// frotend data
  socket.on("send-location", (data) => {
    console.log("Latitude:", data.lat);
    console.log("Longitude:", data.lng);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

