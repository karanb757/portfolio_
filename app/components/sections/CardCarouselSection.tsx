"use client"
import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

const CardCarouselSection: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 30px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 200px;
  }
  
  @media (min-width: 640px) {
    .swiper-slide {
      width: 250px;
    }
    .swiper {
      padding-bottom: 40px;
    }
  }
  
  @media (min-width: 768px) {
    .swiper-slide {
      width: 300px;
    }
    .swiper {
      padding-bottom: 50px;
    }
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  
  /* Mobile pagination adjustments */
  @media (max-width: 640px) {
    .swiper-pagination {
      bottom: 10px !important;
    }
    .swiper-pagination-bullet {
      width: 6px !important;
      height: 6px !important;
    }
  }
  `
  return (
    <section className="w-full space-y-4 px-2 sm:px-4 md:px-0">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-[16px] sm:rounded-[20px] md:rounded-[24px] border border-black/5 p-1 sm:p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[16px] sm:rounded-[20px] md:rounded-[24px] border border-black/5 bg-neutral-800/5 p-1 sm:p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px]">
          <Badge
            variant="outline"
            className="absolute left-2 sm:left-4 md:left-6 top-3 sm:top-4 md:top-6 rounded-[10px] sm:rounded-[12px] md:rounded-[14px] border border-black/10 text-xs sm:text-sm md:text-base"
          >
            <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800 w-3 h-3 sm:w-4 sm:h-4" />{" "}
            <span className="hidden sm:inline">Latest component</span>
            <span className="sm:hidden">Latest</span>
          </Badge>
          <div className="flex flex-col justify-center pb-2 pl-2 sm:pl-4 pt-10 sm:pt-12 md:pt-14 md:items-center">
            <div className="flex gap-2">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl opacity-85 font-bold tracking-tight">
                  Card Carousel
                </h3>
                <p className="text-xs sm:text-sm md:text-base">Seamless Images carousel animation.</p>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4 px-2 sm:px-4">
            <div className="w-full">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation && window.innerWidth > 768
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : false
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-2xl sm:rounded-3xl">
                      <Image
                        src={image.src}
                        width={500}
                        height={500}
                        className="size-full rounded-lg sm:rounded-xl object-cover"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                {images.map((image, index) => (
                  <SwiperSlide key={`duplicate-${index}`}>
                    <div className="size-full rounded-2xl sm:rounded-3xl">
                      <Image
                        src={image.src}
                        width={200}
                        height={200}
                        className="size-full rounded-lg sm:rounded-xl object-cover"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardCarouselSection