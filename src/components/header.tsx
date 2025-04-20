"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [city, setCity] = useState("Loading...");
  const [time, setTime] = useState("");

  useEffect(() => {
    // Function to get and format the current time
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(timeString);
    };

    // Update time immediately and then every minute
    updateTime();
    const timeInterval = setInterval(updateTime, 60000);

    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await response.json();
            setCity(data.city || data.locality || "Unknown location");
          } catch (error) {
            setCity("Location unavailable");
            console.error("Error fetching location:", error);
          }
        },
        () => {
          setCity("Location access denied");
        }
      );
    } else {
      setCity("Geolocation not supported");
    }

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="w-full h-full flex justify-between items-center px-8 text-zinc-50 text-xs font-boska">
      <div>
        <Image src="/logo.png" alt="logo" width={25} height={25} />
      </div>
      <div>
        {city}, {time}
      </div>
    </div>
  );
};

export default Header;
