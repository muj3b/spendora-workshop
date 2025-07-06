
import { GradientButton } from "@/components/ui/gradient-button";
import { FeatureCard } from "@/components/ui/feature-card";
import { ChartLine, Store, ArrowRight, Coins, Bitcoin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 flex items-center overflow-hidden transition-colors duration-300" role="main" aria-label="Spendora Workshop Hero Section">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-10 animate-[float_6s_ease-in-out_infinite]">
          <ChartLine size={120} className="text-blue-600" />
        </div>
        <div className="absolute top-40 right-20 opacity-10 animate-[float_8s_ease-in-out_infinite_2s]">
          <Coins size={100} className="text-green-600" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-10 animate-[float_7s_ease-in-out_infinite_1s]">
          <Store size={110} className="text-purple-600" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-[float_9s_ease-in-out_infinite_3s]">
          <ChartLine size={90} className="text-blue-600" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="relative text-display mb-6 sm:mb-8 animate-smooth-fade-in transform transition-all duration-1000" style={{ animationDelay: '0.5s' }}>
            <span className="relative inline-block gradient-text-primary">
              <span className="animate-letter-shine">Level Up Your Money Skills</span>
            </span>
          </h1>
          
          <p className="text-body-large text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto animate-smooth-fade-in transform transition-all duration-1000" style={{ animationDelay: '0.7s' }}>
            A free workshop designed by high school students to teach 
            real-world financial skills to students grades 5-10.
          </p>

          <section className="bg-gradient-primary rounded-3xl p-6 sm:p-8 mx-auto max-w-2xl mb-8 sm:mb-10 animate-dynamic-island-scale glass-strong shadow-large" style={{ animationDelay: '0.9s' }} aria-labelledby="workshop-details">
            <h2 id="workshop-details" className="text-heading text-white mb-3">
              July 6th - 10th, 2025
            </h2>
            <p className="text-body-large text-white/90 mb-2">
              <span role="img" aria-label="Clock">🕐</span> 2-4 PM Central Daylight Time
            </p>
            <p className="text-body-large text-white/90 mb-2">
              <span role="img" aria-label="Location">📍</span> R.H. Stafford Library
            </p>
            <p className="text-body text-white/80">
              Free • All supplies included
            </p>
          </section>

          <div className="space-y-4 animate-smooth-fade-in transform transition-all duration-1000" style={{ animationDelay: '1.1s' }}>
            <GradientButton 
              size="xl" 
              variant="primary"
              pulse={true}
              className="w-full sm:w-auto rounded-full"
              onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
              aria-label="Sign up for the free Spendora workshop"
            >
              Sign Up Now - It's Free! <span role="img" aria-label="Rocket">🚀</span>
            </GradientButton>
          </div>

          <section className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-2" aria-labelledby="workshop-topics">
            <h2 id="workshop-topics" className="sr-only">Workshop Topics</h2>
            <FeatureCard
              icon={ChartLine}
              title="Stock Markets & Investing"
              description="Learn investing fundamentals and market analysis"
              iconGradient="blue"
              iconSize="lg"
              variant="glass"
              animationDelay="1.3s"
              onCardClick={() => navigate('/stock-markets')}
              badge={
                <div className="flex items-center space-x-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <span>Click me</span>
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </div>
              }
            />
            <FeatureCard
              icon={Coins}
              title="Budgeting"
              description="Master personal finance and money management"
              iconGradient="green"
              iconSize="lg"
              variant="glass"
              animationDelay="1.5s"
              badge={<span className="text-sm text-muted-foreground">Coming Soon</span>}
            />
            <FeatureCard
              icon={Store}
              title="Online Business"
              description="Explore e-commerce and entrepreneurship"
              iconGradient="purple"
              iconSize="lg"
              variant="glass"
              animationDelay="1.7s"
              badge={<span className="text-sm text-muted-foreground">Coming Soon</span>}
            />
            <FeatureCard
              icon={Bitcoin}
              title="Crypto + NFTs"
              description="Understand digital assets and blockchain"
              iconGradient="orange"
              iconSize="lg"
              variant="glass"
              animationDelay="1.9s"
              badge={<span className="text-sm text-muted-foreground">Coming Soon</span>}
            />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;
