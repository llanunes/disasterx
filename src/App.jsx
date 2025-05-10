import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSlider } from "./components/hero-slider";

function App() {
  return (
    <>
      <Header />
      <HeroSlider />
      <Outlet />
    </>
  );
}

export default App;
