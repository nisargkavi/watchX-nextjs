'use client';
import React, { useEffect, useState } from 'react';
import 'animate.css';

const Home = () => {
  const [time, setTime] = useState("MyWatchX - Online Clock");
  const [date, setDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false }));
      setDate(currentTime.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' }));
    }, 1000);

    document.title = `${time} | MyWatchX`;

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-[18vw] font-black dark:selection:bg-white dark:selection:text-black selection:bg-black selection:text-white ease-in-out animate__animated animate__fadeIn">
          {time === "MyWatchX - Online Clock" ? "WatchX" : time}
        </h1>
        <h3 className="text-black text-[6vw] dark:text-white dark:selection:bg-white dark:selection:text-black selection:bg-black selection:text-white">{date}</h3>
      </div>
    </div>
  );
};

export default Home;
