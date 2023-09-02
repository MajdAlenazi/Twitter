import React from 'react'
import SideBar from '../component/SideBar'
import MainHome from '../component/MainHome'
import RightBar from '../component/RightBar'

export default function Home() {
  return (
    <div className='bg-[#15202C] px-16 flex flex-row justify-center h-180 '>
        <SideBar></SideBar>
        <MainHome></MainHome>
        <RightBar></RightBar>
    </div>
  )
}
