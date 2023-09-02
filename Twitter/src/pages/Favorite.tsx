import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SideBar from '../component/SideBar'
import RightBar from '../component/RightBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'


type type = {
    id: string
    postTweet: string;
}


export default function Favorite() {
    const [favTweets, setFavTweets] = React.useState<type[]>([])

   
    // get
    React.useEffect(() => {
        axios.get('https://64f19d680e1e60602d240795.mockapi.io/Tweets')
        .then(res => {
        
            const favTweets = res.data.filter((item: { liked: boolean }) => item.liked === true);
            setFavTweets(favTweets);
                    
                })
    },[]);
    console.log(favTweets);

    // Delete
    const alert = (id:string) => {
      
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            axios
            .delete(`https://64f19d680e1e60602d240795.mockapi.io/Tweets/${id}`)
            .then(() => {setFavTweets(
              favTweets.filter((item) => {
                return item.id !== id;
                
              })
            )}) 
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
     
  return (
    <div className='bg-[#15202C] px-16 flex flex-row justify-center h-180 '>
        <SideBar></SideBar>
            {/* mainliked */}
        <div className='w-3/4'>
        <div className="text-white p-4 text-xl font-bold">Liked Tweets</div>

        <div className="flex flex-col bg-[#15202C] shadow-lg w-full border-t border-gray-400">
{favTweets.map((item) => {
          return (
            <div key={item.id}>
           
<div>
   <div className="flex items-start bg-[#15202C] border-b border-gray-400 px-4 py-6">
   <FontAwesomeIcon className='text-white text-4xl p-2' icon={faUser}></FontAwesomeIcon>
      <div className="text-white w-full ml-2">
         <div className="flex flex-row justify-between items-center gap-x-3">
          <div className="flex flex-row gap-x-3">
            <h2 className="text-xl font-bold font-semibold -mt-1">Brad Adams </h2>
            <small className="text-sm text-gray-400">22h ago</small>
            </div>
            <div>
            <FontAwesomeIcon onClick={() => alert(item.id)} className='text-white cursor-pointer flex justify-end' icon={faEllipsis} />
            </div>
         </div>
         <p className="mt-3 text-lg">
            {item.postTweet}
         </p>
         <div className="mt-4 mr-2 flex items-center justify-between">
            <div className="flex text-gray-700 text-sm">
            <FontAwesomeIcon className='text-white text-xl' icon={faComment} />
            </div>
            <div className="flex text-gray-700 text-sm">
            <FontAwesomeIcon className='text-white text-xl'  icon={faRetweet} />
            </div>
            <div className="flex text-sm cursor-pointer ">
            {/* <FontAwesomeIcon className={buttonColor} icon={faHeart} /> */}
            <FontAwesomeIcon className='text-red-500 text-xl'  icon={faHeart} />
            </div>
            
            <div className="flextext-gray-700 text-sm">
            <FontAwesomeIcon className='text-white text-xl' icon={faArrowUpFromBracket} />
            </div>
            </div>
         </div>
      </div>
   </div>
</div>
    
          )})}
          </div>
          </div>
          
            
        <RightBar></RightBar>
    </div>
  )
}

