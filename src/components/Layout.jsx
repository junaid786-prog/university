import React from 'react'
import Sidebar from "./Sidebar"

const Layout = ({ component }) => {
    return (
        <div className='layout_box'>
            <div className='sidebar_'>
                <Sidebar />
            </div>
            <div className='component_'>
                <component />
            </div>
        </div>
    )
}

export default Layout