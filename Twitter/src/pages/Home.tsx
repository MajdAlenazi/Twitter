import React from 'react'
import SideBar from '../component/SideBar'
import MainHome from '../component/MainHome'
import RightBar from '../component/RightBar'

export default function Home() {
  return (
    <div className='flex flex-row justify-center h-screen bg-[#15202C]'>
        <SideBar></SideBar>
        <MainHome></MainHome>
        <RightBar></RightBar>
    </div>
  )
}
