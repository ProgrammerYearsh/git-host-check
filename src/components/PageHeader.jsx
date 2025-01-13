import React, { useState } from 'react'
import Navbar from './Navbar'
import SidebarNav from './SidebarNav'

function PageHeader() {
const [phnMenuDisplayStatus, setPhnMenuDisplayStatus]=useState(false)
  return (
<>
<Navbar
phnMenuDisplayStatus={phnMenuDisplayStatus}
setPhnMenuDisplayStatus={setPhnMenuDisplayStatus}
/>
<SidebarNav
phnMenuDisplayStatus={phnMenuDisplayStatus}
setPhnMenuDisplayStatus={setPhnMenuDisplayStatus}
/>
</>
  )
}

export default PageHeader