import Hero from "@/components/Hero";
import AboutSpendora from "@/components/AboutSpendora";
import WorkshopSchedule from "@/components/WorkshopSchedule";
import MeetTheTeam from "@/components/MeetTheTeam";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollNavigator from "@/components/ScrollNavigator";

const Index = () => {
  return (
    <PageTransition transitionType="fade">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Hero />
        <div id="about-spendora">
          <AboutSpendora />
        </div>
        <div id="workshop-schedule">
          <WorkshopSchedule />
        </div>
        <div id="meet-the-team">
          <MeetTheTeam />
        </div>
        <Footer />
        <ScrollNavigator />
      </div>
    </PageTransition>
  );
};

export default Index;
