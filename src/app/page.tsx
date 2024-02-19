"use client";
import React from "react";
import Link from "next/link"; // Import Link from next/link
import Spline from "@splinetool/react-spline";

export default function Page() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-center justify-center w-1/2 p-4">
        <h1 className="text-4xl font-bold font-serif mb-4">Aviral Chawla</h1>
        <div className="flex flex-col items-center mb-4">
          <Link href="/chat">
            <button className="w-36 h-10 btn mb-2">Chat</button>
          </Link>
          <Link href="mailto:ac724@snu.edu.in">
            <button className="w-36 h-10 btn">Mail</button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <div className="w-full h-full">
          <Spline scene="https://prod.spline.design/yRqFaY2i1AkuTRS0/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
