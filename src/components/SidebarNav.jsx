import React from 'react'
import Sidenav from './Sidenav'
// import { useNavigate } from 'react-router-dom'

function SidebarNav({ phnMenuDisplayStatus , setPhnMenuDisplayStatus  }) {

// const navigate = useNavigate()

return (
<aside

 class={`flex items-end justify-end  fixed top-0 right-0  w-full h-screen transition-transform  ${phnMenuDisplayStatus ? 'translate-x-0' : 'translate-x-full' } text-8xl z-20 ` } aria-label="Sidebar">
<div onClick={()=>setPhnMenuDisplayStatus(!phnMenuDisplayStatus)} className='w-full h-full z-10 absolute top-0'></div>
<Sidenav/>
</aside>
  )
}

export default SidebarNav