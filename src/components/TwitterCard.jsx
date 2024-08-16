import React from "react";
import twitter from "../assets/twitter/twitter.png";
import backImage from "../assets/twitter/backImage.png";
import twitterProfile from "../assets/twitter/twitterProfile.png";
import twitterMark from "../assets/twitter/twitterMark.png";
import threeDot from "../assets/twitter/threeDot.png";

function TwitterCard() {
  return (
    <>
      <div>
        <img
          src={twitter}
          alt="background image"
          className="absolute object-cover w-full h-screen -z-10"
        />
      </div>

      {/* main content here  */}
      <div className="h-screen w-full flex justify-center items-center">
        <div className="twitter_card bg-black h-auto p-6">
          {/* header section  */}
          <div className="flex gap-4 items-center">
            <button>
              <img src={backImage} alt="back button" />
            </button>
            <p className="text-white text-base">Post</p>
          </div>

          {/* profile section  */}
          <div className="flex justify-between pt-3">
            <div className="flex gap-2">
              <img src={twitterProfile} alt="profile image" />
              <div>
                <div className="flex gap-1 items-center">
                  <p className="text-white text-lg ">Elon Musk</p>{" "}
                  <img src={twitterMark} alt="twitter mark" />
                </div>
                <p className="twitter_username text-sm">@elonmusk</p>
              </div>
            </div>
            <div>
              <img src={threeDot} alt="" />
            </div>
          </div>

          {/* twite section  */}
          <h4 className="text-white text-sm pt-3">
            Even some of the best AI software engineers in the world don’t
            realize how advanced Tesla AI has become
          </h4>

          {/* time section  */}

          <div className="time_section pt-4">
            <p className="time_text text-xs">
              {Math.floor(Math.random() * 12 + 1)}:
              {Math.floor(Math.random() * 59 + 1)} PM · Jul{" "}
              {Math.floor(Math.random() * 30 + 1)}, 20
              {Math.floor(Math.random() * 14 + 10)} ·{" "}
              <span className="text-white font-semibold">
                {Math.floor(Math.random() * 10 + 1)}.
                {Math.floor(Math.random() * 10 + 1)}M
              </span>{" "}
              Views
            </p>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default TwitterCard;
