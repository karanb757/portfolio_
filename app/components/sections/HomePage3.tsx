"use client"
import React from "react"
import { SparklesIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import ImageCursorTrail from "../../../components/ui/image-cursortrail"

// const images = [
//   "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
//   "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
//   "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
//   "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
//   "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
//   "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
// ]

const images = [
    // Transparent tech logos
    "https://images.unsplash.com/photo-1569766670290-f5581d3bb53f?q=80&w=2403&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1579762715459-5a068c289fda?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1665392996886-0949d131a5da?q=80&w=969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677589153209-1fe49e5f1348?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_vector-1725420765442-8eebcfcd5155?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_vector-1737358767923-c0bf99bdee1b?q=80&w=1322&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_vector-1725501012146-b8fb9c6dd5ff?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];


export default function HomePage3() {
  return (
    <section className="w-screen rounded-[24px] border border-black/5 p-2 shadow-sm">
    <div className="relative flex w-screen flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 shadow-sm">
        <ImageCursorTrail
        items={images}
        maxNumberOfImages={5}
        distance={20}
        imgClass="sm:w-40 w-28 sm:h-48 h-36"
        className="w-screen rounded-3xl"
        >
        <article className="relative z-50 flex flex-col items-center justify-center">
            <Badge
            variant="outline"
            className="mb-3 rounded-[14px] border border-black/10 bg-white text-base"
            >
            <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
            Component Preview
            </Badge>
            <h1 className="max-w-2xl text-center text-3xl font-black tracking-extrabold ">
            Hover Mouse here
            </h1>           
        </article>
        </ImageCursorTrail>
    </div>
</section>
  )
}
