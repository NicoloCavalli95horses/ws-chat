//=====================
// imports
//=====================
const WebSocket = require("ws");
const express = require("express");
const path = require("path");

//=====================
// consts
//=====================
const port = process.env.PORT || 3000;


//=====================
// app
//=====================
const app = express();
app.use( express.static(path.join(__dirname, "frontend")) );

// serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

//=====================
// servers
//=====================
const expressServer = app.listen(port, () => {
  console.log(`Express server is running on port: ${ port }`);
});

const wsServer = new WebSocket.Server({ server: expressServer });
console.log(`Websocket server is running on port: ${ port }`);


// Store connected clients
const clients = new Set();

// Event listener for new connections
wsServer.on("connection", (socket) => {
  // Add the new client to the set
  clients.add(socket);

  // Event listener for messages from clients
  socket.on("message", (message) => {
    // Broadcast the message to all clients except the sender
    clients.forEach((client) => {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Event listener for client disconnection
  socket.on("close", () => {
    // Remove the disconnected client from the set
    clients.delete(socket);
  });
});

