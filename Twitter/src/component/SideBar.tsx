import React from 'react'
import img from '../assets/whiteLogo.png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faRectangleList } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'


export default function SideBar() {
  return (
    <div className="w-1/4 pr-12 h-180 border-r border-gray-400 bg-[#15202C]">
       


	<aside className="w-full" aria-label="Sidebar">
		<div className="px-12 py-4 ">
			<ul className="space-y-2">
			<li>
					<a href="/home"
						className="flex items-center p-3 w-fit text-base font-normal text-gray-900 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<img className="w-10 h-10 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							src={img}></img>
					</a>
				</li>
				<li>
					<a href="/home"
						className="flex w-fit text-3xl items-center p-3 text-base font-normal rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<FontAwesomeIcon icon={faHouse} className="flex-shrink-0 pr-2 w-8 h-8 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"/>
						<span className="ml-3">Home</span>
					</a>
				</li>
				<li>
					<a href="#"
						className="flex  items-center text-3xl text-base font-normal w-fit p-3 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<FontAwesomeIcon icon={faHashtag} className="flex-shrink-0 pr-2 w-8 h-8 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white" />
						<span className="ml-3">Explore</span>
					</a>
				</li>
				<li>
					<a href="#"
						className="flex items-center text-3xl text-base font-normal w-fit p-3 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<FontAwesomeIcon icon={faBell} className="flex-shrink-0 pr-2 w-8 h-8 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"/>
						<span className="ml-3">Notifications</span>
					</a>
				</li>
				<li>
					<a href="#"
						className="flex items-center text-3xl text-base font-normal w-fit p-3 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<FontAwesomeIcon icon={faEnvelope} className="flex-shrink-0 pr-2 w-8 h-8 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"/>
						<span className="ml-3">Messages</span>
					</a>
				</li>
				<li>
					<a href="#"
						className="flex items-center text-3xl text-base font-normal w-fit p-3 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<FontAwesomeIcon icon={faBookmark} className="flex-shrink-0 pr-2 w-8 h-8 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"/>
						<span className="ml-3">Bookmarks</span>
					</a>
				</li>
				<li>
					<a href="#"
						className="flex items-center text-3xl text-base font-normal w-fit p-3 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<FontAwesomeIcon icon={faRectangleList} className="flex-shrink-0 pr-2 w-8 h-8 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"/>
						<span className="ml-3">Lists</span>
					</a>
				</li>
				<li>
					<a href="/profile"
						className="flex items-center text-3xl text-base font-normal w-fit p-3 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<FontAwesomeIcon icon={faUser} className="flex-shrink-0 pr-2 w-8 h-8 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"/>
						<span className="ml-3">Profile</span>
					</a>
				</li>
				<li>
					<a href="#"
						className="flex items-center text-3xl text-base font-normal w-fit p-3 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<FontAwesomeIcon icon={faEllipsis} className="flex-shrink-0 pr-2 w-8 h-8 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"/>
						<span className="ml-3">More</span>
					</a>
				</li>
				<li>
				<div className="btn text-white w-full font-bold text-xl flex rounded-3xl px-4 py-2 justify-center items-center border border-indigo-500 font-semibold cursor-pointer bg-[#1DA1F2]">Tweet</div>
				</li>
				
				
			</ul>
		</div>
	</aside>

    </div>
  )
}
