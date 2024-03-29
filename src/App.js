// import mark from "./images/avatar-mark-webber.webp";
// import angela from "./images/avatar-angela-gray.webp";
// import jacob from "./images/avatar-jacob-thompson.webp";
import rizky from "./images/avatar-rizky-hasanuddin.webp";
import kimberly from "./images/avatar-kimberly-smith.webp";
import chess from "./images/image-chess.webp";
import nathan from "./images/avatar-nathan-peterson.webp";
import anna from "./images/avatar-anna-kim.webp";
import { useState } from "react";
import { useEffect } from "react";
import { newNotifications } from "./data/notData";
import Notifications from "./components/Notifications";

function App() {
  const [notfication, setnotifcation] = useState(
    useEffect(() => {
      let length = document.querySelectorAll(".bg-Red").length;
      setnotifcation(length);
    }, [])
  );

  function handleClick() {
    let notification = document.querySelectorAll(".content");
    notification.forEach((not) => not.classList.remove("bg-lgblue1"));
    let notRead = document.querySelectorAll(".bg-Red");
    notRead.forEach((not) => not.classList.remove("bg-Red"));
    setnotifcation(0);
  }

  return (
    <>
      <main className="bg-white shadow-xl p-8 max-w-3xl sm:m-4 sm:rounded-2xl">
        <div className="flex justify-between items-center flex-col gap-4 mb-8 sm:flex-row">
          <h1 className="text-2xl text-vdblue font-bold flex items-center">
            Notifications
            <span className="grid place-items-center bg-Blue text-white rounded-md w-8 h-8 ml-2">
              {notfication}
            </span>
          </h1>
          <p
            className="text-dgblue text-lg hover:text-Blue hover:cursor-pointer"
            onClick={handleClick}
          >
            Marke all as read
          </p>
        </div>

        <div className="grid gap-4">
          {newNotifications.map((not, index) => (
            <Notifications
              key={index}
              avatar={not.img}
              name={not.name}
              action={not.action}
              action2={not.aciton2}
              time={not.time}
            />
          ))}
          <div className="p-4 rounded-md flex gap-5">
            <img className="rounded-full w-16 h-16" src={rizky} alt="rizky" />
            <div>
              <p className="text-dgblue">
                <b className="text-vdblue cursor-pointer hover:text-Blue">
                  Rizky Hasanuddin
                </b>
                sent you a private message<span className="block">5m ago</span>
              </p>
              <div className="border-gblue border rounded my-2 p-2 text-sm cursor-pointer hover:bg-lgblue2 hover:border-white sm:text-base">
                <p className="text-gblue">
                  Hello, thanks for setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of fun
                  and improving my game.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="p-4 rounded-md flex items-center gap-4">
              <img
                className="rounded-full w-16 h-16"
                src={kimberly}
                alt="kimberly"
              />
              <p className="text-dgblue">
                <b className="text-vdblue cursor-pointer hover:text-Blue">
                  Kimberly Smith
                </b>
                commented on your picture
                <span className="block">1week ago</span>
              </p>
            </div>
            <img className="w-16 h-16" src={chess} alt="chess" />
          </div>

          <div className="p-4 rounded-md flex items-center gap-4">
            <img className="rounded-full w-16 h-16" src={nathan} alt="nathan" />
            <p className="text-dgblue">
              <b className="text-vdblue cursor-pointer hover:text-Blue">
                Nathan Peterson
              </b>
              reacte to your recetn post
              <span className="text-vdblue hover:cursor-pointer hover:text-Blue">
                
                5 end-game strategies to increase your win rate
              </span>
              <span className="block">2 weeks ago</span>
            </p>
          </div>

          <div className="p-4 rounded-md flex items-center gap-4">
            <img className="rounded-full w-16 h-16" src={anna} alt="anna" />
            <p className="text-dgblue">
              <b className="text-vdblue cursor-pointer hover:text-Blue">
                Anna Kim
              </b>
              left the group
              <span className="text-vdblue hover:text-Blue cursor-pointer">
                Chess Club
              </span>
              <span className="block">2 weeks ago</span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
