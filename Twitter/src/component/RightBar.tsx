import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function RightBar() {
  return (
    <div className='bg-[#15202C] w-1/3 border-l border-gray-400 px-10 mt-1 '>
      {/* search */}
     
<div className="w-full px-0">
	<form>   
        <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" className="block p-3 pl-10 w-full text-lg text-gray-900 bg-gray-50 rounded-3xl focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
        </div>
    </form>
    
</div>
      {/* trends */}
     
      <div className="justify-center py-6 w-full px-0">
        <div className="bg-[#1E2732] rounded-3xl shadow-lg p-4">
        <h1 className="text-2xl font-bold mb-4 justify-start text-white">What's happening</h1>
          <ul className="space-y-4">
            <li className="flex flex-col justify-start">
              <span className="text-gray-500 mr-2">news</span>
              <a href="#" className="text-white hover:underline">
                Trending Topic 1
              </a>
            </li>
            <li className="flex flex-col justify-start">
              <span className="text-gray-500 mr-2">Trending</span>
              <a href="#" className="text-white hover:underline">
                Trending Topic 1
              </a>
            </li>
            <li className="flex flex-col justify-start">
              <span className="text-gray-500 mr-2">Trending</span>
              <a href="#" className="text-white hover:underline">
                Trending Topic 1
              </a>
            </li>
            <li className="flex flex-col justify-start">
              <span className="text-gray-500 mr-2">news</span>
              <a href="#" className="text-white hover:underline">
                Trending Topic 1
              </a>
            </li>
            <li className="flex flex-col justify-start">
              <span className="text-gray-500 mr-2">Trending</span>
              <a href="#" className="text-white hover:underline">
                Trending Topic 1
              </a>
            </li>
            <li className="flex flex-col justify-start">
              <p className="text-blue-500 hover:underline">
                Show more
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* suggest to follow */}
      <div className="justify-center py-6 w-full px-0">
        <div className="bg-[#1E2732] rounded-3xl shadow-lg p-4">
        <h1 className="text-2xl font-bold mb-4  text-white">Who to follow</h1>
          <ul className="space-y-8">
            <li className="flex flex-row justify-between">
            <FontAwesomeIcon className='flex text-white text-2xl ' icon={faUser}></FontAwesomeIcon>
              <p className="flex text-white  hover:underline">
                @username
              </p>
              <div className='flex'>
              <button
  type="button"
  className="inline-block rounded-full border-2 border-[#1DA1F2] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#1DA1F2] transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
  data-te-ripple-init>
  Follow
</button>
              </div>
            </li>
            <li className="flex flex-row justify-between">
            <FontAwesomeIcon className='flex text-white text-2xl ' icon={faUser}></FontAwesomeIcon>
              <p className="flex text-white  hover:underline">
                @username
              </p>
              <div className='flex'>
              <button
  type="button"
  className="inline-block rounded-full border-2 border-[#1DA1F2] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#1DA1F2] transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
  data-te-ripple-init>
  Follow
</button>
              </div>
            </li>
            <li className="flex flex-row justify-between">
            <FontAwesomeIcon className='flex text-white text-2xl ' icon={faUser}></FontAwesomeIcon>
              <p className="flex text-white  hover:underline">
                @username
              </p>
              <div className='flex'>
              <button
  type="button"
  className="inline-block rounded-full border-2 border-[#1DA1F2] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#1DA1F2] transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
  data-te-ripple-init>
  Follow
</button>
              </div>
            </li>
            
            <li className="flex flex-col justify-start">
              <p className="text-blue-500 hover:underline">
                Show more
              </p>
            </li>
          </ul>
        </div>
      </div>
    
    </div>
  )
}
