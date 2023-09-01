import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
type type = {
    id: string
    postTweet: string;
}

export default function Test() {
    const [readTweet, setReadTweet] = React.useState<type[]>([])
    const [postTweet, setPostTweet] = React.useState("")
    
    // Get
    React.useEffect(() => {
        axios.get('https://64f19d680e1e60602d240795.mockapi.io/Tweets')
        .then((res) => {setReadTweet(res.data)})  
    },[]);

    // Post
    // console.log(postTweet);
    
    const Tweet = () => {
        axios
        .post('https://64f19d680e1e60602d240795.mockapi.io/Tweets', {
            postTweet: postTweet
        })
        .then((res) => {
            setReadTweet([...readTweet,res.data])
            // setPostTweet({postTweet: ""})
        }
        
        )}
    // Delete
    // Like

  return (
    <div>
    <input value={postTweet} onChange={(e) => {setPostTweet(e.target.value)}} className="title bg-gray-100 w-full border border-gray-300 p-2 mb-2 outline-none"  placeholder="what's going on?" type="text"/>
    <div onClick={Tweet} className="btn w-fit flex rounded-3xl justify-end items-center border border-indigo-500 p-1 px-6 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Tweet</div>
    <div>
    {readTweet.map((item) => {
    return (
        <div key={item.id}>
            <div className='border-4 border-red-400'>{item.postTweet}</div>
        </div>
    )}
    )}
    </div>
    </div>
  )}