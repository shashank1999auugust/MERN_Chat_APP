import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
const Sidebar = () => {
  return (
    <div className='borderd-r border-slate-500 p-4 flex flex-col'>
     <form className='flex items-center gap-2'>
        <input className='input input-bordered rounded-md' type='text' placeholder='Search...'/>
        <button type="submit" className='btn  bg-zinc-700 text-white'>
        <BiSearchAlt2 className='w-6 h-6 outline-none' />
        </button>
     </form>
     <div className="divider px-3"></div>
     
    </div>
  )
}

export default Sidebar
