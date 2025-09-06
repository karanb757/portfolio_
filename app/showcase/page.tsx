"use client";

import { useEffect, useState } from "react";
import LaptopShowcase from "./LaptopShowcase";
import MobileShowcase from "./MobileShowcase";

export default function ShowcasePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize(); // run on first load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      {isMobile ? <MobileShowcase /> : <LaptopShowcase />}
    </div>
  );
}