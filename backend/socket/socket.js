import {Server} from "socket.io"
import http from "http"
import express from "express"

const app= express();

const server= http.createServer(app);
const io= new Server(server,{
    cors:{
        origin:['http://localhost:3000'],
        methods:['GET','POST']
    }
})

export const getReceiverSocketId=(receiverId)=>{
    return userSocketMap[receiverId]
}


//for checking users online
const userSocketMap={}; //{userid-> socketid}

io.on('connection',(socket)=>{
    console.log('user connected', socket.id)
    //in this we are receiving userid which is sent by frontend , app.js through query
    const userId= socket.handshake.query.userId
    if(userId!== undefined){
          //storing user id and its corresponding socketid in usersocketmap
          userSocketMap[userId]=socket.id
    }
   // sending  getOnline users to frontend
    io.emit('getOnlineUsers', Object.keys(userSocketMap))

    socket.on('disconnect',()=>{
        console.log('user disconnected', socket.id)
        delete userSocketMap[userId];
        //sending again updated online users after disconnect
        io.emit('getOnlineUsers', Object.keys(userSocketMap))
    })
})

export {app, io, server}