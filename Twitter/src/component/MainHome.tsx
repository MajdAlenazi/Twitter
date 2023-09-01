import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
type type = {
    id: number
    postTweet: string;
}

export default function MainHome() {
    const [readTweet, setReadTweet] = React.useState<type[]>([])
    const [postTweet, setPostTweet] = React.useState("")
    
    // Get
    React.useEffect = (() => {
        axios
        .get('https://64f19d680e1e60602d240795.mockapi.io/Tweets')
        .then((res) => {setReadTweet(res.data)})  
    },[readTweet]);

    // Post
    // console.log(postTweet);
    
    const Tweet = () => {
        axios
        .post('https://64f19d680e1e60602d240795.mockapi.io/Tweets', {
            postTweet: postTweet
        })
        .then((res) => {
            setReadTweet([readTweet, res.data])
            setPostTweet({postTweet: ""})
        }
        
        ),[postTweet]}
    // Delete
    // Like

  return (
    <div className='bg-blue-400 w-3/6'>
        {/* nav */}     
<nav
  className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
  
    {/* Home nav */}
    <div
      className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent1"
      data-te-collapse-item>
          <a
            className="text-neutral-500 mb-4 lg:mb-0 lg:pr-2 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
            href="/home"
            data-te-nav-link-ref>Home</a>
    </div>

    {/* sparkle */}
    <div className="relative flex items-center">
      <FontAwesomeIcon className='text-white' icon={faWandMagicSparkles} />

    </div>
  </div>
</nav>

{/* input tweet */}

  <div className="bg-red-400 editor w-full flex flex-col text-gray-800 border border-gray-300 p-2 shadow-lg">
    <div className='flex items-center flex-row w-full'>
  <FontAwesomeIcon className='text-white text-4xl p-2' icon={faUser}></FontAwesomeIcon>
    <input onChange={(e) => (setPostTweet(e.target.value))} className="title bg-gray-100 w-full border border-gray-300 p-2 mb-2 outline-none"  placeholder="what's going on?" type="text"/>
    </div>
    <div className='flex flex row ml-10'>
    {/* <!-- icons --> */}
    <div className="icons flex text-gray-500 m-2">
      <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
    </div>
    {/* <!-- buttons --> */}
    <div className="count ml-auto text-gray-400 text-sm mt-4 font-semibold">0/300</div>
      <div onClick={Tweet} className="btn w-fit flex rounded-3xl justify-end items-center border border-indigo-500 p-1 px-6 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Tweet</div>
 </div>
  </div>
  {/* list tweets */}


{readTweet.map((item) => {
          return (
            <div key={item.id}>
                <div className="flex bg-[#15202C] shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md md:max-w-2xl ">
   <div className="flex items-start px-4 py-6">
      <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar"/>
      <div className="">
         <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 -mt-1">Brad Adams </h2>
            <small className="text-sm text-gray-700">22h ago</small>
         </div>
         <p className="text-gray-700">Joined 12 SEP 2012. </p>
         <p className="mt-3 text-gray-700 text-sm">
            {item.postTweet}
            
         </p>
         <div className="mt-4 flex items-center">
            <div className="flex mr-2 text-gray-700 text-sm mr-3">
               <svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
               <span>12</span>
            </div>
            <div className="flex mr-2 text-gray-700 text-sm mr-8">
               <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
               </svg>
               <span>8</span>
            </div>
            <div className="flex mr-2 text-gray-700 text-sm mr-4">
               <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                </svg>
               <span>share</span>
            </div>
         </div>
      </div>
   </div>
</div>
</div>
          )})}

    </div>
    
  )
}
