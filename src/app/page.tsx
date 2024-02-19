"use client";
import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import Spline from '@splinetool/react-spline';

export default function Page() {
  return (
    <div className="flex justify-between items-center h-screen">
      {/* Left side */}
      <div className="flex flex-col items-start justify-center w-3/5 px-12 bg-red-500"> {/* Adjusted width and padding */}
        <h1 className="relative text-4xl font-bold font-serif mx-8 my-4 before:absolute before:inset-0 before:bg-white before:animate-typewriter">
          Aviral Chawla
        </h1>
        {/* Buttons */}
        <div className="flex">
          {/* Link to /chat */}
          <Link href="/chat">
            <button className="btn mr-4 border border-gray-500">Chat</button> {/* Added border styles */}
          </Link>
          {/* Mailto link */}
          <Link href="mailto:ac724@snu.edu.in">
            <button className="btn border border-gray-500">Mail</button> {/* Added border styles */}
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="w-4/5 h-full pb-20"> {/* Adjusted width */}
        <div className="w-full h-full">
          <Spline scene="https://prod.spline.design/yRqFaY2i1AkuTRS0/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
