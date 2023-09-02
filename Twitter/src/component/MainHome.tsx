import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

import axios from "axios";
type type = {
  id: string;
  postTweet: string;
};

export default function MainHome() {
  const [readTweet, setReadTweet] = React.useState<type[]>([]);
  const [postTweet, setPostTweet] = React.useState("");
  // for like
  const [isIconClicked, setIsIconClicked] = React.useState(false);
  const [buttonColor, setButtonColor] = React.useState("#4caf50");

  const like = () => {
    setIsIconClicked(!isIconClicked);
    setButtonColor(isIconClicked ? "#4caf50" : "#ffff");
  };

  // Get
  React.useEffect(() => {
    axios
      .get("https://64f19d680e1e60602d240795.mockapi.io/Tweets")
      .then((res) => {
        setReadTweet(res.data);
      });
  }, []);

  // Post
  // console.log(postTweet);

  const Tweet = () => {
    axios
      .post("https://64f19d680e1e60602d240795.mockapi.io/Tweets", {
        postTweet: postTweet,
      })
      .then((res) => {
        setReadTweet([...readTweet, res.data]);
        setPostTweet("");
      });
  };
  // Delete
  // Like

  return (
    <div className="w-2/4">
      {/* nav */}
      <nav className="flex-no-wrap py-4 relative flex w-full items-center justify-between bg-[#15202C] border-b border-gray-400 shadow-md shadow-black/5">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Home nav */}
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            <a
              className="text-neutral-500 text-xl font-bold mb-4 lg:mb-0 lg:pr-2 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
              href="/home"
              data-te-nav-link-ref
            >
              Home
            </a>
          </div>

          {/* sparkle */}
          <div className="relative flex items-center">
            <FontAwesomeIcon
              className="text-white"
              icon={faWandMagicSparkles}
            />
          </div>
        </div>
      </nav>

      {/* input tweet */}

      <div className="bg-[#15202C] border-b-8 border-gray-500 editor w-full flex flex-col text-gray-800 p-4 shadow-lg">
        <div className="flex items-center flex-row w-full ml-2">
          <FontAwesomeIcon
            className="text-white text-4xl p-2"
            icon={faUser}
          ></FontAwesomeIcon>
          <input
            value={postTweet}
            onChange={(e) => setPostTweet(e.target.value)}
            className="w-full bg-[#15202C] text-gray-400 text-xl p-2 mb-2 outline-none"
            placeholder="What is happening?!"
            type="text"
          />
        </div>
        <div className="flex flex-row ml-10">
          {/* <!-- icons --> */}
          <div className="flex flex-row items-center justify-between w-3/12 ml-5 text-[#1DA1F2]">
            <FontAwesomeIcon className="flex text-xl" icon={faImage} />
            <FontAwesomeIcon className="flex text-xl" icon={faSquare} />
            <FontAwesomeIcon className="flex text-xl" icon={faChartSimple} />
            <FontAwesomeIcon className="flex text-xl" icon={faFaceSmile} />
          </div>
          {/* <!-- buttons --> */}
          <div className="count ml-auto text-gray-400 text-sm mt-4 mr-2 font-semibold">
            0/300
          </div>
          <div
            onClick={Tweet}
            className="btn w-fit flex rounded-3xl justify-end items-center border border-indigo-500 p-1 px-6 font-semibold cursor-pointer text-gray-200 ml-2 bg-[#1DA1F2]"
          >
            Tweet
          </div>
        </div>
      </div>
      {/* list tweets */}

      <div className="flex flex-col bg-[#15202C] shadow-lg w-full">
        {readTweet.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <div className="flex items-start bg-[#15202C] border-b border-gray-400 px-4 py-6">
                  <FontAwesomeIcon
                    className="text-white text-4xl p-2"
                    icon={faUser}
                  ></FontAwesomeIcon>
                  <div className="text-white w-full ml-2">
                    <div className="flex flex-row justify-between items-center gap-x-3">
                      <div className="flex flex-row gap-x-3">
                        <h2 className="text-xl font-bold font-semibold -mt-1">
                          Brad Adams{" "}
                        </h2>
                        <small className="text-sm text-gray-400">22h ago</small>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          className="text-white flex justify-end"
                          icon={faEllipsis}
                        />
                      </div>
                    </div>
                    <p className="mt-3 text-lg">{item.postTweet}</p>
                    <div className="mt-4 mr-2 flex items-center justify-between">
                      <div className="flex text-gray-700 text-sm">
                        <FontAwesomeIcon
                          className="text-white text-xl"
                          icon={faComment}
                        />
                      </div>
                      <div className="flex text-gray-700 text-sm">
                        <FontAwesomeIcon
                          className="text-white text-xl"
                          icon={faRetweet}
                        />
                      </div>
                      <div
                        onClick={like}
                        className="flex text-sm cursor-pointer "
                      >
                        {isIconClicked ? (
                          <FontAwesomeIcon
                            className="text-red-500 text-xl"
                            icon={faHeart}
                          />
                        ) : (
                          <FontAwesomeIcon
                            className="text-blue text-xl"
                            icon={faHeart}
                          />
                        )}
                      </div>

                      <div className="flextext-gray-700 text-sm">
                        <FontAwesomeIcon
                          className="text-white text-xl"
                          icon={faArrowUpFromBracket}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
