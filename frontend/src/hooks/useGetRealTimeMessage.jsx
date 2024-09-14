import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMessages} from "../redux/messageSlice"

const useGetRealTimeMessage=()=>{
    const {socket}= useSelector(store=>store.socket)
    const {messages}=useSelector(store=>store.message)
    const {selectedUser}=useSelector(store=>store.user)
    const dispatch=useDispatch()
  useEffect(()=>{
     socket?.on("newMessage" ,(newMessage)=>{
      // if selected user._id ===newmessage.senderId then only add messages in setmessage  means real time chat , otherwise usegetmessage
      // will give us old messages  BUG FIX 
      if(selectedUser._id===newMessage.senderId){
         dispatch(setMessages([...messages,newMessage]))
      }
     })
     return () => socket?.off("newMessage");
  },[setMessages, messages])
}

export default useGetRealTimeMessage