
"use client";
import React, { useState, useEffect } from "react";
import FlipLink from "../../components/ui/text-effect-flipper";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

const MobileShowcase = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-auto gap-4 mt-8 px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Left Big Card */}
        <div className="row-span-1 sm:row-span-2 lg:row-span-4 card h-auto lg:h-[698px] rounded-3xl w-full cursor-pointer flex flex-col gap-6 sm:gap-10 lg:gap-20  text-white p-4 mt-5">
          <Image
            src="/Picc.jpeg"
            alt="photo b/w"
            width={400}
            height={400}
            className="rounded-3xl"
          />
          <p className="text-xs sm:text-sm text-center pt-4 sm:pt-6 lg:pt-8">
            Development is where curiosity meets execution. For me it&apos;s a
            journey of constant learning and innovation. Every challenge in
            every project is an opportunity to build smarter solutions and
            create applications that truly make an impact.
          </p>
        </div>

        {/* Small Identity Card */}
        <div className="bg-[#161616] text-[#D9D9D9] card flex h-auto sm:h-[157px] w-full border border-[#262626] cursor-pointer flex-col justify-between p-4 sm:p-6 gap-4 rounded-3xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            k757
          </h2>
          <p className="text-xs sm:text-sm text-white">
            Within the realm of designers, I&apos;m recognised by the alias
          </p>
        </div>

        {/* About Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 sm:row-span-2 bg-[#161616] text-white border border-[#262626] rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium">
            Im Karan <br />
            <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold">
              Bodkhe
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base mt-4">
            My journey in the world of web development stems from a deep
            fascination with the digital realm. From my early days of curiosity
            to my current expertise, I have honed the craft of turning ideas
            into engaging, functional, and user-friendly web experiences. I
            specialize in building seamless and visually appealing web
            applications that balance design with performance. So let&apos;s
            create something impactful and innovative together.
          </p>
        </div>

        {/* Skills Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 sm:row-span-2 border-4 lg:border-8 text-white border-[#604BB5] bg-[#4D389A] rounded-3xl p-6 sm:p-8 lg:p-9 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">
              <FlipLink href="/">SKILLS</FlipLink>
            </h2>
            <img src="/star.svg" alt="star" className="h-10 w-10 sm:h-14 sm:w-14" />
          </div>
          <ul className="font-medium text-xs sm:text-sm md:text-base space-y-1">
            <li>FULL STACK DEVELOPER</li>
            <li>REACT.JS</li>
            <li>NEXT.JS</li>
            <li>TAILWIND CSS</li>
            <li>REDUX TOOLKIT</li>
            <li>NODE.JS EXPRESS.JS</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        {/* Clock Section */}
        <div className="row-span-1 sm:row-span-2 bg-[#161616] border border-[#262626] text-[#D9D9D9] rounded-3xl flex items-center justify-center p-4">
        <span className="text-3xl sm:text-5xl md:text-6xl font-black flex items-baseline gap-2">
            {dateTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }).split(" ")[0]}
            {dateTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }).split(" ")[1]}
        </span>
        </div>


        {/* Stack Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 p-4 text-[#D9D9D9] bg-[#161616] border border-[#262626] flex flex-col items-center gap-3 rounded-3xl justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">STACK</h1>
          <div className="flex flex-wrap justify-center gap-3">
            <Image src="/vscode.webp" alt="VSCode" width={40} height={40} className="hover:scale-125 transition-transform" />
            <Image src="/notion.png" alt="Notion" width={40} height={40} className="hover:scale-125 transition-transform" />
            <Image src="/STACK/github.png" alt="Github" width={40} height={40} className="hover:scale-125 transition-transform" />
            <Image src="/Mongodb.png" alt="MongoDB" width={40} height={40} className="hover:scale-125 transition-transform" />
            <Image src="/Postman.png" alt="Postman" width={40} height={40} className="hover:scale-125 transition-transform" />
            <Image src="/STACK/image.png" alt="Database" width={40} height={40} className="hover:scale-125 transition-transform" />
            <Image src="/Framer.png" alt="Framer" width={40} height={40} className="hover:scale-125 transition-transform" />
            <Image src="/STACK/photoshop.png" alt="photoshop" width={40} height={40} className="hover:scale-125 transition-transform" />
            <Image src="/STACK/sass.png" alt="sass" width={40} height={40} className="hover:scale-125 transition-transform" />
          </div>
        </div>

        {/* Links + Recent Works */}
        <div className="row-span-1 sm:row-span-2 lg:row-span-4 bg-[#161616] border border-[#262626] rounded-3xl flex flex-col gap-4 p-4 pl-3">
          <div className="grid grid-cols-3 gap-2 pl-4 ">
            <h2 className="col-span-1 font-spaceGrotesk text-5xl text-[#D9D9D9] font-bold">
              LI<br/>
              NKS
            </h2>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <img src="/linkdin.svg" alt="linkedin" />
            </a>
            <a href="https://www.behance.net" target="_blank" rel="noreferrer">
              <img src="/behance.svg" alt="behance" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img src="/github.svg" alt="github" />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">
              <img src="/dribble.svg" alt="dribble" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src="/instagram.svg" alt="instagram" />
            </a>
          </div>

          <div className="flex flex-col flex-1 gap-4 mt-4">
            <h1 className="text-4xl font-extrabold text-white py-4 text-center">
             RECENT WORKS
            </h1>

            <div className="flex flex-col gap-3 pt-4">
              {[
                { title: "AI-LMS", date: "AUG-25", link: "https://ai-lms-v3.vercel.app/" },
                { title: "Skiper-UI", date: "JULY-25", link: "skiper-UI.vercel.app" },
                { title: "Portfolio", date: "JAN-25", link: "kabir757.vercel.app" },
                { title: "FindMyPG", date: "JAN-25", link: "FindMyPG.vercel.app" },
              ].map((work, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-lg font-bold text-white">
                      {work.title}
                    </span>
                    <span className="text-xs text-[#8A8A8A]">{work.date}</span>
                  </div>
                  <a className="text-xs sm:text-sm text-[#8A8A8A]" href={work.link}>
                    {work.link.replace("https://", "")}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back Section */}
        <div className="bg-[#161616] border border-[#262626] text-white rounded-3xl p-4 text-5xl font-extrabold pb-4">
        <Link href='/'>
              <p>
                LETS GO BACK  
              </p>
        
        </Link>
        </div>
      </div>

    </div>
  );
};

export default MobileShowcase;
