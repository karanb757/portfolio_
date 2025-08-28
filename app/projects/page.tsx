"use client";
import React from "react";
import { useState, useEffect } from "react";
import FlipLink from "../../components/ui/text-effect-flipper"
import Navbar from '../components/Navbar/Navbar'

const Projects = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen pt-2">
      <Navbar />

      <div className="grid grid-cols-5 grid-rows-5 gap-4 p-5">

        <div className="row-span-4 card h-[698px] rounded-3xl w-full cursor-pointer focus:z-[99px] flex flex-col gap-20 bg-[#161616] text-white">
          <img src="/card1.webp" alt="photo b/w"></img>
          <p className="text-xs text-center">My journey in the world of design began 4 years ago with a fascination for the digital realm. From my early days of curiosity to todays expertise, Ive honed the art of transforming ideas into captivating designs, mastering the art of creating design solutions that bridge the gap between aesthetics and functionality. Lets craft something remarkable together.</p>
        </div>

        <div className="col-start-1 row-start-5 bg-[#161616] text-white card flex h-[157px] w-full border-1 border-[#262626] cursor-pointer flex-col justify-between py-6 focus:z-[99px] p-3 rounded-3xl">
          <h2 className="text-6xl font-extrabold">AKA</h2>
          <p>Within the realm of designers, I&apos;m recognised by the alias</p>
        </div>

        <div className="col-span-3 row-span-2 col-start-2 row-start-1 bg-[#161616] text-white border-1 border-[#262626]  rounded-3xl p-8 flex flex-col justify-between">
          <h2 className="text-6xl font-medium">
            Im Karan <br />
            <span className="text-7xl font-extrabold"> Bodkhe </span>
          </h2>
          <p className="text-[#494949] text-sm/4 ">
            My journey in the world of design began 4 years ago with a
            fascination for the digital realm. From my early days of curiosity
            to todays expertise, Ive honed the art of transforming ideas into
            captivating designs, mastering the art of creating design solutions
            that bridge the gap between aesthetics and functionality. Lets craft
            something remarkable together.
          </p>
        </div>

        <div className="col-span-2 row-span-2 col-start-2 row-start-3 border-8 text-white border-[#604BB5] bg-[#4D389A] rounded-3xl p-9 pl-10 flex flex-col gap-9">
          <div className="flex justify-between">
            <h2 className="font-bold text-5xl">SKILLS</h2>
            <img src="/star.svg" alt="star" className="h-18 w-15"></img>
          </div>
          <div>
            <ul className="font-medium text-sm">
              <li>FULL STACK ENGINNER</li>
              <li>UI/UX DESIGNER</li>
              <li>ANIMATOR</li>
              <li>LOGO DESIGNER</li>
              <li>VERSATILE PROGRAMMER</li>
              <li>PYTHON</li>
              <li>JAVA</li>
            </ul>
          </div>
        </div>

        <div className="row-span-2 col-start-4 row-start-3  bg-[#161616] border-1 border-[#262626]  text-white rounded-3xl flex items-center justify-center">
          <span className="text-6xl font-black pb-3 pr-1">
            {dateTime.toLocaleTimeString()}
          </span>
        </div>

        <div className="col-span-3 col-start-2 row-start-5 p-3  text-white bg-[#161616] border-1 border-[#262626] flex flex-col items-center gap-4 rounded-3xl">
          <div className="text-5xl font-extrabold pt-2">
            STACK
          </div>
          <div className="flex h-13 w-13 ml-4 justify-center">
            <img src="/vscode.webp" alt="vscode"/>
            <img src="/figma.webp" alt="Figma"/>
            <img src="/notion.png" alt="Notion"/>
            <img src="Github.png" alt="Github"/>
            <img src="Mongodb.png" alt="MongoDB"/>
            <img src="Discord.png" alt="Discord"/>
            <img src="Postman.png" alt="Postman"/>
            <img src="Framer.png" alt="Framer"/>
            <img src="Chrome.webp" alt="Chrome"/>
            <img src="/notion.png" alt="Notion"/>
            <img src="Mongodb.png" alt="MongoDB"/>
            <img src="/figma.webp" alt="Figma"/>
          </div>
        </div>

        <div className="row-span-4 col-start-5 row-start-1 text-white border-1 border-[#262626] bg-[#161616] rounded-3xl">
          <div className="grid grid-cols-3 grid-rows-2 gap-2 h-44">
            <div>
              <h2 className="m-0 font-spaceGrotesk text-[50px] font-bold leading-10 ">
                LIN <br />
                KS.
              </h2>
            </div>
            <div><img src="/linkdin.svg" alt="linkedin" /></div>
            <div><img src="/behance.svg" alt="behance" /></div>
            <div><img src="/github.svg" alt="github" /></div>
            <div><img src="/dribble.svg" alt="dribble" /></div>
            <div><img src="/instagram.svg" alt="instagram" /></div>
          </div>

          <div className=" h-[520px] p-3 mt-2 rounded-3xl text-white border-1 border-[#262626] flex flex-col">
            <div className="flex flex-col">
              <h1 className="text-6xl font-bold">RECENT</h1>
              <h1 className="text-6xl font-bold">WORKS</h1>
            </div>

            <div className="flex flex-col gap-3 pt-10">
              
              <div className="flex flex-col">
                <div className="flex justify-between">
                    <span className="text-lg font-bold">AI-LMS</span>
                    <span className="text-xs text-[#8A8A8A]">AUG-25</span>
                </div>
                <div>
                  <a className='text-sm text-[#8A8A8A]' href="https://ai-lms-v3.vercel.app/">ai-lms.vercel.app</a>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between">
                    <span className="text-lg font-bold">Skiper-UI</span>
                    <span className="text-xs text-[#8A8A8A]">JULY-25</span>
                </div>
                <div>
                  <a className='text-sm text-[#8A8A8A]' href="#">skiper-UI.vercel.app</a>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between">
                    <span className="text-lg font-bold">Portfolio</span>
                    <span className="text-xs text-[#8A8A8A]">JAN-25</span>
                </div>
                <div>
                  <a className='text-sm text-[#8A8A8A]' href="#">kabir757.vercel.app</a>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between">
                    <span className="text-lg font-bold">FindMyPG</span>
                    <span className="text-xs text-[#8A8A8A]">JAN-25</span>
                </div>
                <div>
                  <a className='text-sm text-[#8A8A8A]' href="#">FindMyPG.vercel.app</a>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="col-start-5 row-start-5 border-1 border-[#262626]  text-white  rounded-3xl ">
          <div className="p-2 pt-4">
            <FlipLink href="#">LETS</FlipLink>
            <FlipLink href="#">GO</FlipLink>
            <FlipLink href="#">BACK</FlipLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
