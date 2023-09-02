import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

import axios from "axios";
import React from "react";

type type = {
  id: string;
  postTweet: string;
};
export default function ProfileComp() {
  const { name } = useParams();

  const [readTweet, setReadTweet] = React.useState<type[]>([]);

  React.useEffect(() => {
    axios
      .get("https://64f19d680e1e60602d240795.mockapi.io/Tweets")
      .then((res) => {
        setReadTweet(res.data);
      });
  }, []);
  return (
    <>
      {/* frist section */}
      <div className=" bg-[#15202C] text-white rounded w-2/4 h-[110px] flex flex-col">
        <div>
          <div className=" flex gap-8 p-3">
            <FontAwesomeIcon icon={faArrowLeft} className="text-4xl" />
            <h1 className="font-bold text-5xl">Majd</h1>
          </div>

          <p className="text-2xl flex-col ml-12">0 Post</p>
          {/* End frist section */}

          {/* sec2 */}
          <div className="bg-gray-200 h-[320px] relative">
            <img
              className="rounded-full w-3/12 absolute bottom-[60px] "
              src="https://thumbs.dreamstime.com/b/pink-cosmos-flowe-flowerbackground-112007426.jpg"
            ></img>
          </div>
          {/* end sec2 */}

          {/* sec3  */}
          <div className="bg-[#15202C]">
            <div className="pb-3 ml-2">
              <h1 className="text-6xl font-bold">{name}</h1>
              <p className="text-xl">@user</p>
            </div>

            <span className="text-xl ml-2">
              <FontAwesomeIcon icon={faCalendarDays} />
              Joined September 2023
            </span>
            <span>
              <p className="text-xl  ml-2">1 Following 0 Followers</p>
            </span>
          </div>
          <div className="flex flex-col bg-[#15202C] shadow-lg w-full">
            {readTweet.map((item) => (
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
                            Brad Adams
                          </h2>
                          <small className="text-sm text-gray-400">
                            22h ago
                          </small>
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
