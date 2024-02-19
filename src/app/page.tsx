"use client";
import React from "react";
import Link from "next/link"; // Import Link from next/link
import Spline from "@splinetool/react-spline";

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full h-3/4">
        <div className="w-full h-20 text-5xl font-bold font-serif flex pt-8 text-center justify-center text-white">
          Aviral Chawla
        </div>
        <div
          className="w-full h-full"
          style={{ transform: "translateY(-6rem)" }}
        >
          <Spline scene="https://prod.spline.design/yRqFaY2i1AkuTRS0/scene.splinecode" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-4">
        <style jsx>{`
          .btn {
            color: white;
            background-color: transparent;
            transition: background-color 0.3s, color 0.3s;
            border-radius: 5px; /* Adjust the value based on your preference */
          }

          .btn:hover {
            color: black;
            background-color: white;
          }
        `}</style>
        <div className="flex flex-col items-center">
          <Link href="/chat">
            <button className="w-40 font-semibold h-10 btn border mb-2">
              Chat
            </button>
          </Link>
          <Link href="mailto:ac724@snu.edu.in">
            <button className="w-40 font-semibold h-10 border btn">Mail</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
