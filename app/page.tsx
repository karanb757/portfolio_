import ImageCursorTrailSection from "./components/sections/ImageCursorTrailSection";
import Hero from "./components/sections/Hero";
import LandingPage from "./components/sections/LandingPage";
import StickyScrollSections from "./components/sections/StickyScrollSections";

export default function Page() {
  return (
    <>
      <LandingPage
      finalContent={<Hero/>}
      />
      <StickyScrollSections />
      <ImageCursorTrailSection />
      
    </>
  );
}
