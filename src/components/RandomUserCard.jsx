import React, { useEffect, useState } from "react";
import RandomUserBg from "../assets/RandomUser.png";
import backButton from "../assets/backButton.png";
import refresh from "../assets/refresh.png";
import user from "../assets/user.png";
import location from "../assets/location.png";
import callMe from "../assets/callMe.png";
import chaiLogo from "../assets/chaiLogo.png";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

function RandomUserCard() {
  const [userData, setUserData] = useState();
  const [birthDate, setbirthDate] = useState("");
  const [registeredDate, setRegisteredDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get("https://api.freeapi.app/api/v1/public/randomusers/user/random")
        .then((res) => setUserData(res.data.data));
      setIsLoading(false);
    };

    fetchUser();
    formatBirthDate();
  }, []);

  console.log(userData);
  const formatBirthDate = () => {
    const dateObj = new Date(userData?.dob?.date);
    const registeredDateObj = new Date(userData?.registered?.date);

    // Define options for formatting the date
    const options = { year: "numeric", month: "long", day: "2-digit" };

    // Format the date according to your requirements
    const formattedBirthDate = dateObj.toLocaleDateString("en-GB", options);
    const formattedRegisteredDate = registeredDateObj.toLocaleDateString(
      "en-GB",
      options
    );
    setbirthDate(formattedBirthDate);
    setRegisteredDate(formattedRegisteredDate);
    setIsLoading(false);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(async () => {
      await axios
        .get("https://api.freeapi.app/api/v1/public/randomusers/user/random")
        .then((res) => setUserData(res.data.data));
      formatBirthDate();
    }, 1000);
  };

  return (
    <>
      <div>
        <img
          src={RandomUserBg}
          alt="image"
          className="w-full h-screen object-cover absolute -z-10 bg-black"
        />
      </div>

      <div className="card_div w-full h-screen flex items-center justify-center">
        <div
          className={`${isLoading ? "bg-gray-100" : "bg-white"} rounded-2xl`}
        >
          {isLoading ? (
            <div className="p-2">
              <Stack
                spacing={1}
                height={610}
                width={358}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton
                  animation={"wave"}
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                  width={150}
                />

                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton
                  animation={"wave"}
                  variant="circular"
                  width={100}
                  height={100}
                />
                <Skeleton
                  animation={"wave"}
                  variant="text"
                  sx={{ fontSize: "3rem" }}
                  width={200}
                />
                <Skeleton
                  animation={"wave"}
                  variant="text"
                  sx={{ fontSize: "0.75rem" }}
                  width={130}
                />
                <Skeleton
                  animation={"wave"}
                  variant="rounded"
                  width={300}
                  height={50}
                />
                <Box
                  pt={2}
                  sx={{
                    display: "grid",
                    columnGap: 1,
                    rowGap: 1,
                    gridTemplateColumns: "repeat(2, 1fr)",
                  }}
                >
                  <Skeleton
                    animation={"wave"}
                    variant="rounded"
                    width={145}
                    height={60}
                  />
                  <Skeleton
                    animation={"wave"}
                    variant="rounded"
                    width={145}
                    height={60}
                  />
                  <Skeleton
                    animation={"wave"}
                    variant="rounded"
                    width={145}
                    height={60}
                  />
                  <Skeleton
                    animation={"wave"}
                    variant="rounded"
                    width={145}
                    height={60}
                  />
                  <Skeleton
                    animation={"wave"}
                    variant="rounded"
                    width={145}
                    height={60}
                  />
                  <Skeleton
                    animation={"wave"}
                    variant="rounded"
                    width={145}
                    height={60}
                  />
                </Box>
              </Stack>
            </div>
          ) : (
            <div className="card rounded-xl p-4">
              {/* header section of card  */}
              <div className="flex justify-between">
                <button>
                  <img src={backButton} alt="" />
                </button>
                <p className="dm-serif-text-regular text-xl">
                  Profile Overview
                </p>
                <button onClick={() => handleRefresh()}>
                  <img src={refresh} alt="" />
                </button>
              </div>

              {/* detail section here  */}
              <div className="p-4 flex flex-col items-center pt-8 gap-3 ">
                <div className="relative w-fit">
                  <div className="bg-black text-white px-2 rounded-3xl text-xs absolute top-0 -right-3">
                    {userData?.name?.title}
                  </div>
                  <img
                    src={userData?.picture?.large}
                    alt="user image"
                    className="rounded-full block"
                  />
                </div>
                <p className="text-3xl donegal-one-regular font-medium   text-black">
                  {userData?.name?.first} {userData?.name?.last}
                </p>
                <p className="text-sm font-sans font-medium">
                  {userData?.login?.username}
                </p>
              </div>

              {/* location call button  */}

              <hr className="h-px bg-gray-200 border-0 dark:bg-black opacity-10" />
              <div className="flex justify-center py-1">
                <a
                  target="_blank"
                  href={`https://maps.google.com/?q=${userData?.location?.coordinates?.latitude},${userData?.location?.coordinates?.longitude}`}
                  className="flex gap-1 p-2 items-center"
                >
                  <img src={location} alt="" />
                  <span className="text-xs">Location</span>
                </a>
                <a
                  className="flex gap-1 p-2 items-center"
                  href={`tel: ${userData?.phone}`}
                  target="_blank"
                >
                  <img src={callMe} alt="" />
                  <span className="text-xs">Call Me</span>
                </a>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-black opacity-10" />

              {/* card-details here  */}

              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-left pt-5">
                <div>
                  <p className=" font-sans ">City</p>
                  <h3 className="font-medium text-lg dm-serif-text-regular ">
                    {userData?.location?.city}
                  </h3>
                </div>
                <div>
                  <p className=" font-sans ">Nationality</p>
                  <h3 className="font-medium text-lg dm-serif-text-regular ">
                    {userData?.location?.country}
                  </h3>
                </div>
                <div>
                  <p className=" font-sans ">Date of birth</p>
                  <h3 className="font-medium text-lg dm-serif-text-regular ">
                    {birthDate}
                  </h3>
                </div>
                <div>
                  <p className=" font-sans ">Phone no.</p>
                  <h3 className="font-medium text-lg dm-serif-text-regular ">
                    {userData?.cell}
                  </h3>
                </div>
                <div>
                  <p className=" font-sans ">Time Zone</p>
                  <h3 className="font-medium text-lg dm-serif-text-regular ">
                    {userData?.location?.timezone?.offset}
                  </h3>
                </div>
                <div>
                  <p className=" font-sans ">Registered Since</p>
                  <h3 className="font-medium text-lg dm-serif-text-regular ">
                    {registeredDate}
                  </h3>
                </div>
              </div>

              {/* footer here  */}
              <div className="flex items-baseline justify-end pt-5">
                <a href="https://chaicode.com/" target="_blank">
                  <img className="w-14" src={chaiLogo} alt="" />
                </a>
              </div>
              <p className="text-white -mt-4 text-center">@chai aur code</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default RandomUserCard;
