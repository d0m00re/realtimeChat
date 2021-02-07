// src/server.ts
import express from "express";
import socketio from "socket.io";
import path from "path";
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

interface IMsg {
  username: string; //uuid
  //date : Date;
  msg: string;
  uuid: string;
}

interface IUser {
  username: string;
  room: string;
  uuid: string;
}

interface IRoom {
  name: string;
  uuid: string;
  msgList: IMsg[];
}

interface IGlobal {
  users: IUser[];
  rooms: IRoom[];
}

let global: IGlobal = { users: [], rooms: [] };

// show room user
const showRoomUser = (roomName : string) => {
  const clients = io.sockets.adapter.rooms.get(roomName);
  console.log('room id : ' + clients.id);
  
  //console.log(clients);

  for (const clientId of clients) {

    //this is the socket of each client in the room.
    const clientSocket = io.sockets.sockets.get(clientId);

    //you can do whatever you need with this
    console.log(clientSocket.nickname);

  }
}
// utility function :
// 1 find an user object
const findUser = (id : string) => {
  console.log('id to find : ' + id);
  console.log(global.users.find(user => user.uuid === id));
  console.log('-----------');
  
  
  
  return global.users.find(user => user.uuid === id);
}
// 2 : find room object
const findRoom = (roomname : string) => global.rooms.find(room => room.uuid === roomname);

// 3 : 

// 1)

//--------------------------------------------------------

const app = express();
app.use(cors())
app.set("port", process.env.PORT || 4242);

let http = require("http").Server(app);
// set up socket.io and bind it to our
// http server.
let io = require("socket.io")(http, {
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
io.on("connection", function (socket: any) {
  socket.on('setUsername', function (username: string) {
    console.log('* send nickname : ' + username);

    socket.nickname = username;
    let user: IUser = { username: username, uuid: socket.id, room: '' };
    global.users.push(user);
    console.log(global.users);
    // emit all room
    console.log('all room emit : ');
    
    io.emit('allRooms', global.rooms.map(room => room.name));
    //emit all user
  })

  socket.on("joinRoom", function (roomName: string) {
    console.log('* join a room : ' + roomName);
    let user : IUser | undefined = findUser(socket.id);
    // user need to leave this current room
    if (user === undefined)
    {
      return 0;
    }
      // unsubscribe to room and reset user.room
    if (user.room !== '')
    {
      socket.leave(user.room);
      user.room = '';
    }
      
    if (global.rooms.filter(elem => elem.name === roomName).length === 0){
      global.rooms.push({name : roomName, uuid : roomName, msgList : []});
      io.emit('newRoom', roomName);
    }
      socket.join(roomName);
      user.room = roomName;
      //new room
    
    console.log('----========= GENERAL OBJECT ==========-------');
    
    console.log(global);
    // send all message history
    socket.emit('recvMultiplesMessages', global.rooms.find(room => room.name === roomName)?.msgList);

  })

  socket.on("sendMessage", function (payload : any) {
    console.log(' go find user omotherfucker : ' + socket.id);    
    
    let user : IUser | undefined = findUser(socket.id);

    if (user === undefined || user.room === '') {
      console.error('user have no room ...');
      return (0);
    }

    //fiind romm with user.room name
    let msgList = global.rooms.find(room => room.name === user?.room)?.msgList;

    msgList?.push(payload);
    
    socket.to(user.room).broadcast.emit('recvMessage', payload);

  });

  socket.on("getAllRoom", function () {
    console.log(' get all room : ');
    console.log(global.rooms.map(room => room.name));
    
    
    socket.emit("getAllRoom", global.rooms.map(room => room.name));
  })

  // rejoindre une room
});

const server = http.listen(4242, function () {
  console.log("listening on *:4242");
});