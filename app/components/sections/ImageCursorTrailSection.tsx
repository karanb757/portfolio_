"use client"
import React from "react"
import ImageCursorTrail from "../../../components/ui/image-cursortrail"
import ColourfulText from "@/components/ui/colourful-text"

const images = [
    // Transparent tech logos
    "https://images.unsplash.com/photo-1579762715459-5a068c289fda?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1665392996886-0949d131a5da?q=80&w=969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677589153209-1fe49e5f1348?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_vector-1725420765442-8eebcfcd5155?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_vector-1737358767923-c0bf99bdee1b?q=80&w=1322&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_vector-1725501012146-b8fb9c6dd5ff?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1716045168176-15d310a01dc0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFuaW1lfGVufDB8fDB8fHww",
  ];


export default function ImageCursorTrailSection() {
  return (
    <section className="w-screen h-[68vh] rounded-[24px] p-2 mt-15">
    <div className="relative flex w-screen flex-col rounded-[24px]">
        <ImageCursorTrail
        items={images}
        maxNumberOfImages={5}
        distance={20}
        imgClass="sm:w-40 w-28 sm:h-48 h-36"
        className="w-screen rounded-3xl"
        >
        <article className="relative z-50 flex flex-col items-center justify-center ">
            <h1 className="max-w-2xl text-center text-4xl font-black tracking-extrabold ">
            <ColourfulText text="Hover Mouse here"/>
            </h1> 
        </article>
        </ImageCursorTrail>
    </div>
</section>
  )
}
