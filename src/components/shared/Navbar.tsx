import React from "react";
import Image from "next/image";
import logo from "../../../public/Assets/video_image-IKBpZZ8Rc.jpeg";
import avatar from"../../../public/Assets/pexels-photo-2379004.jpeg";
import { GiftIcon } from '@heroicons/react/solid';
import { BellIcon } from '@heroicons/react/solid';
import { useState } from 'react';
const Navbar = () => {
   
  return (
    <header className="bg-gradient-to-r from-[#000000] to-[#6650A5] w-full h-20">
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={logo}
          alt="Description of the image"
          width={150}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-10 md:flex">
          <li className="headerLink ">HOME</li>
          <li className="headerLink">TV SHOW</li>
          <li className="headerLink">MOVIES</li>
          <li className="headerLink">NEW</li>
        </ul>
      </div>

      <div className="flex items-center space-x-2 md:space-x-10 font-light">
        <label className="sr-only font-bold text-white">Search</label>

        <div>
         

          <input
            id="search"
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 h-8 rounded-full w-72 border   bg-white text-white hidden sm:inline"
          />
        </div>
        <GiftIcon className="w-6 h-6" />
        <BellIcon  className="w-6 h-6" ></BellIcon>
        <div className="w-10 h-10 rounded-full overflow-hidden">
      <Image
        src={avatar}
        alt="Avatar"
        width={100}
          height={100}
      />
    </div>
      </div>
    </header>
  );
};

export default Navbar;
