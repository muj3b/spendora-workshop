
import Hero from "@/components/Hero";
import AboutSpendora from "@/components/AboutSpendora";
import WorkshopSchedule from "@/components/WorkshopSchedule";
import MeetTheTeam from "@/components/MeetTheTeam";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Hero />
        <AboutSpendora />
        <WorkshopSchedule />
        <MeetTheTeam />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
