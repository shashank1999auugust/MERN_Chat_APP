
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client"
import { setSocket } from './redux/socketSlice';
import { setOnlineUsers } from './redux/userSlice';

const router=createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/register",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },

])

function App() {

  const {authUser}=useSelector(store=>store.user)
  const {socket}=useSelector(store=>store.socket)

  const dispatch=useDispatch()
  useEffect(()=>{
     if(authUser){
      const socket= io('http://localhost:8080',{
          query:{
            userId:authUser._id
          }
      })
      //storing socket id in store 
      dispatch(setSocket(socket))
      
      //receiving  online users
      socket.on('getOnlineUsers',(onlineUsers)=>{
          dispatch(setOnlineUsers(onlineUsers))
      })
      //cleanup function in backend(socket.js) when we do this, the disconnect will run
      return ()=>socket.close()
     } else{
      if(socket){
        socket.close()
        dispatch(setSocket(null))
      }
     }

  },[authUser])
  return (
    <div className="p-4 h-screen flex items-center justify-center">
   <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;
