import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setOtherUsers } from '../redux/userSlice'
const useGetOtherUsers = () => {
   const dispatch =useDispatch()
  useEffect(()=>{
      const fetchOtherUsers= async()=>{
        try {
            axios.defaults.withCredentials=true
            const res = await axios.get(`http://localhost:8080/api/v1/user/`)
            // console.log(res)
            //store this other users in redux store
            dispatch(setOtherUsers(res.data.otherUsers))

        } catch (error) {
            console.log(error)
        }
      }
      fetchOtherUsers()
  },[])
  
}

export default useGetOtherUsers
