import HomePage from "./components/sections/HomePage";
import LandingPage from "./components/sections/LandingPage";
import Portfolio from "./components/Portfolio/Portfolio";

export default function Page() {
  return (
    <>
      <LandingPage
      finalContent={<HomePage />}
      />
      <Portfolio/>
    </>
  );
}
