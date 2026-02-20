const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);


// connection establish and socket created
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // check connection data if driver create new trip/ room if not join existing trio
  // driver send location to all passengers
  socket.emit("driver-location", (data) => {
    console.log("Latitude:", data.lat);
    console.log("Longitude:", data.lng);
  });

  // passenger receive location from driver
  socket.on("passenger-location", (data) => {
    console.log("Latitude:", data.lat);
    console.log("Longitude:", data.lng);
  });

// frotend data
  socket.on("send-location", (data) => {
    console.log("Latitude:", data.lat);
    console.log("Longitude:", data.lng);
  });

  // socket disconnection
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

