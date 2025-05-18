import { HeroSection } from "../../components/hero-section";
import { RegionSection } from "../../components/region";
import { TechnologiesSection } from "../../components/tecnologies";
import { TestimonialsSection } from "../../components/testemonials"
import { HeroSlider } from "../../components/hero-slider";
import { VideoPitchSection } from "../../components/video";
import { TeamPhoto } from "../../components/team";

function Home() {
  return (
    <div>
      <HeroSlider />
      <HeroSection />
      <RegionSection/>
      <TestimonialsSection/>
      <VideoPitchSection/>
      <TechnologiesSection />
      <TeamPhoto/>
    </div>
  );
}

export default Home;
