"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [loading, setloading] = useState(false);
  const [generated, setgenerated] = useState("");

  // check if the box is empty or not
  const generate = () => {
    if (!url || !shorturl) {
      alert("Please fill the box first");
      return;
    }

    setloading(true);

    // request
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, shorturl }),
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          alert(result.message);
          setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
          seturl("");
          setshorturl("");
        } else {
          alert("Error: " + result.message);
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        alert("Server error, try again later");
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <div className="w-full min-h-screen relative container mx-auto flex flex-col min-[1538px]:flex-row items-center justify-center overflow-hidden">
      <img
        className="
        h-full w-full min-[1538px]:w-1/2 max-[1537px]:absolute max-[1537px]:left-1/2 max-[1537px]:-translate-x-1/2 min-w-[644px] object-contain max-[1537px]:opacity-40
        "
        src="/side photo.svg"
        alt=""
      />
      <div className="w-full min-[1538px]:w-1/2 z-10 flex flex-col justify-center items-center px-6">
        {/* site name */}
        <h1>
          <span className="text-3xl font-bold"> &lt;</span>
          <span className="text-[#575a89] font-extrabold text-2xl">URL</span>
          <span className="font-bold text-xl">shortner</span>
          <span className="font-extrabold">&gt;</span>
        </h1>
        {/* First input box or long link */}
        <input
          value={url}
          onChange={(e) => {
            seturl(e.target.value);
          }}
          className="bg-[#edf2f5] min-[1539px]:w-2xl min-[510px]:w-[500px] w-[350px] h-12 rounded-2xl m-2 p-4 outline-none"
          type="text"
          placeholder="Enter your URL"
        />
        {/* Second input box or desire short version */}
        <input
          value={shorturl}
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
          className="bg-[rgb(237,242,245)] min-[1539px]:w-2xl min-[510px]:w-[500px] w-[350px] h-12 rounded-2xl m-2 p-4 outline-none"
          type="text"
          placeholder="Enter your preferred short URL text"
        />
        {/* the generate button */}
        <button
          onClick={generate}
          className="bg-[#483dff] min-[1539px]:w-2xl min-[510px]:w-[500px] w-[350px] h-12 rounded-2xl m-2 text-white font-bold active:bg-[#2b21f0] active:scale-95"
        >
          Generate
        </button>
        {/* show the generated url */}
        {generated && (
          <>
            <span className="font-bold">Your link is :</span>
            <code>
              <Link
                target="_blank"
                href={generated}
                className="text-blue-600 underline"
              >
                {generated}
              </Link>
            </code>
          </>
        )}
      </div>
    </div>
  );
}
