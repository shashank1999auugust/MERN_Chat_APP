// import React, { useEffect, useState } from 'react'
// import { BiSearchAlt2 } from "react-icons/bi";
// import OtherUsers from './OtherUsers';
// import axios from 'axios';
// import toast from "react-hot-toast"
// import {useNavigate} from "react-router-dom"
// import { useSelector ,useDispatch } from 'react-redux';
// import { setOtherUsers } from '../redux/userSlice';

// const Sidebar = () => {
//   const[search,setSearch]= useState("")
//   const dispatch=useDispatch()
//   const [originalUsers, setOriginalUsers] = useState([]);
//   const{otherUsers} =useSelector(store=>store.user)
//    const navigate= useNavigate()
//      // Save the original list of users when component mounts or otherUsers change
//   useEffect(() => {
//     if (originalUsers.length === 0 && otherUsers.length > 0) {
//       setOriginalUsers(otherUsers);
//     }
//   }, [otherUsers, originalUsers]);
//   const logoutHandler= async()=>{

//     try {
//        const res= await axios.get(`http://localhost:8080/api/v1/user/logout`)
//        navigate("/login")
//        toast.success(res.data.message)
//     } catch (error) {
//       console.log(error)
//     }
//   }
  
//   const searchSubmitHandler=(e)=>{
//     e.preventDefault()
//     if (search.trim() === "") {
//       // Reset to original users if search input is empty
//       dispatch(setOtherUsers(originalUsers));
//       return;
//     }
//     const conversationUser= otherUsers?.find((user)=>user.fullName.toLowerCase().includes(search.toLowerCase()))
//     if(conversationUser){
//       dispatch(setOtherUsers([conversationUser]))
//     }
//     else{
//       toast.error("User not found")
//     }
//   }


//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
//      <form onSubmit={searchSubmitHandler} className='flex items-center gap-2'>
//         <input value={search} onChange={(e)=>setSearch(e.target.value)} className='input input-bordered rounded-md' type='text' placeholder='Search...'/>
//         <button type="submit" className='btn  bg-zinc-700 text-white'>
//         <BiSearchAlt2 className='w-6 h-6 outline-none' />
//         </button>
//      </form>
//      <div className="divider px-3"></div>
//      <OtherUsers/>
//      <div className='mt-2'>
//         <button onClick={logoutHandler} className='btn btn-sm'>Logout</button>
//      </div>
//     </div>
//   )
// }

// export default Sidebar




// Updated code with real time search 
// _____________________________________________________________________________________________________________________

import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from './OtherUsers';
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [originalUsers, setOriginalUsers] = useState([]);
  const dispatch = useDispatch();
  const { otherUsers } = useSelector(store => store.user || { otherUsers: [] });
  const navigate = useNavigate();

  // Save the original list of users when component mounts or otherUsers change
  useEffect(() => {
    if (otherUsers?.length > 0 && originalUsers.length === 0) {
      setOriginalUsers(otherUsers);
    }
  }, [otherUsers]);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/v1/user/logout`);
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  // Real-time search functionality
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    if (!searchTerm.trim()) {
      // Reset to original users if search input is empty
      dispatch(setOtherUsers(originalUsers));
      return;
    }

    const filteredUsers = originalUsers.filter((user) =>
      user?.fullName?.toLowerCase().includes(searchTerm)
    );

    dispatch(setOtherUsers(filteredUsers.length > 0 ? filteredUsers : []));
  };

  //change the form to normal div and remove search icon and create handlesearch
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <div className='flex items-center gap-2'>
        <input
          value={search}
          onChange={handleSearch}
          className='input input-bordered rounded-md'
          type='text'
          placeholder='Search...'
        />
        
      </div>
      <div className="divider px-3"></div>
      <OtherUsers />
      <div className='mt-2'>
        <button onClick={logoutHandler} className='btn btn-sm'>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
