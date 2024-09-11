import React from "react";
import OtherUser from "./OtherUser";
import '../index.css'
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";


const OtherUsers = () => {
  useGetOtherUsers()
  const {otherUsers} =useSelector(store=>store.user)
  console.log(otherUsers)
  //early return in react
  if(!otherUsers){
    return
  }


  return (
  <div className="overflow-auto flex-1">
    {
      otherUsers?.map((user)=>{
        return(
          <OtherUser key={user._id} user={user}/>
        )
      })
    }
  </div>
  );
};

export default OtherUsers;
