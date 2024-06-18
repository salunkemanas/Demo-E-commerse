import React from 'react'
import { Sidebar } from "flowbite-react";

const sidebar = () => {
  return (
    <div className='bg-white my-24'>
      <Sidebar aria-label="Sidebar with multi-level dropdown example" >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse label="BRAND"/>
          <Sidebar.Collapse label="DESIGN COLOR"/>
          <Sidebar.Collapse label="DESIGN STYLE"/>
          <Sidebar.Collapse label="PAPER COLOR"/>
          <Sidebar.Collapse label="PAPER WEIGHT"/>
          <Sidebar.Collapse label="PERSONALISED "/>
          <Sidebar.Collapse label="PHOTO CARD"/>
          <Sidebar.Collapse label="PRINT METHOD"/>
          <Sidebar.Collapse label="PRODUCT TYPE"/>          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default sidebar


