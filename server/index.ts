// src/server.ts
import express from "express";
import socketio from "socket.io";
import path from "path";
import cors from 'cors';

const app = express();
app.use(cors())
app.set("port", process.env.PORT || 4242);

let http = require("http").Server(app);
// set up socket.io and bind it to our
// http server.
let io = require("socket.io")(http,  {
  cors: {
    origin: "http://0.0.0.0:8088",
    methods: ["GET", "POST"]
  }
});

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve("./client/index.html"));
});

// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
// create event connection
io.on("connection", function(socket: any) {
  console.log("a user connected");
  // recevoir le message et le renvoyer a tout le 
 // monde 

 //joina fucking channel
  //socket.join('mabite');
  socket.on("join room", function(roomname : any) {
    console.log('ROOM');
    console.log(socket.rooms);
    //console.log(socket.id);
    
    
    
    console.log('obj socket : ');
  //  console.log(socket);
    console.log('join room : ' + roomname);    
    // we could use an array of room
    socket.join(roomname);
  })
  

  socket.on("message", function(message: any) {
    console.log(message);
    socket.broadcast.emit('allMessage', message);
  });

  socket.on('SendMessage', function(message : any) {
    console.log('receive an important message:');
    console.log(message);
    
    
  })

  // rejoindre une room
});

const server = http.listen(4242, function() {
  console.log("listening on *:4242");
});