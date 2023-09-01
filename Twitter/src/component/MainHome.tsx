// import React from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
// // import { faUser } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// type info = {
//   id: string;
//   postTweet: string;
// };

// export default function MainHome() {
//   const [readTweet, setReadTweet] = React.useState<info[]>([]);
//   const [postTweet, setPostTweet] = React.useState("");

//   // Get
//   React.useEffect(() => {
//     axios
//       .get("https://64f19d680e1e60602d240795.mockapi.io/Tweets")
//       .then((res) => {
//         setReadTweet(res.data);
//       });
//   }, []);

//   // Post
//   // console.log(postTweet);

//   const Tweet = () => {
//     axios.post("https://64f19d680e1e60602d240795.mockapi.io/Tweets", {
//       postTweet: postTweet,
//     });
//     // .then((res) => {
//     //   setReadTweet([readTweet, res.data]);
//     //   setPostTweet({ postTweet: "" });
//     // }),
//     // [postTweet];
//   };
//   // Delete
//   // Like

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="enter"
//         value={postTweet}
//         onChange={(e) => setPostTweet(e.target.value)}
//       ></input>
//       <button onClick={Tweet}>Tweet</button>

//       {readTweet.map((item) => {
//         return (
//           <div key={item.id}>
//             <p>{item.postTweet}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the type for the tweet
type Tweet = {
  id: string;
  postTweet: string;
};

export default function MainHome() {
  const [readTweet, setReadTweet] = useState<Tweet[]>([]);
  const [postTweet, setPostTweet] = useState("");

  // Get tweets on component mount
  useEffect(() => {
    axios
      .get("https://64f19d680e1e60602d240795.mockapi.io/Tweets")
      .then((res) => {
        setReadTweet(res.data);
      })
      .catch((error) => {
        console.error("Error fetching tweets:", error);
      });
  }, []);

  // Handler for posting a new tweet
  const handleTweet = () => {
    axios
      .post("https://64f19d680e1e60602d240795.mockapi.io/Tweets", {
        postTweet: postTweet,
      })
      .then((res) => {
        // Add the new tweet to the existing array of tweets
        setReadTweet([...readTweet, res.data]);
        // Clear the input field
        setPostTweet("");
      })
      .catch((error) => {
        console.error("Error posting tweet:", error);
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your tweet"
        value={postTweet}
        onChange={(e) => setPostTweet(e.target.value)}
      />
      <button onClick={handleTweet}>Tweet</button>

      {readTweet.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.postTweet}</p>
          </div>
        );
      })}
    </>
  );
}
