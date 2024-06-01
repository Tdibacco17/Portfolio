import AboutMeComponent from "@/components/AboutMeComponent/AboutMeComponent";
import ExperienceComponent from "@/components/ExperienceComponent/ExperienceComponent";
import StudiesComponent from "@/components/StudiesComponent/StudiesComponent";
import TechnologiesComponent from "@/components/TechnologiesComponent/TechnologiesComponent";
//PAGE NOT FOUND
export default function Home() {
  return (
    <main>
      <AboutMeComponent />
      <ExperienceComponent />
      <TechnologiesComponent />
      <StudiesComponent />
    </main>
  );
}