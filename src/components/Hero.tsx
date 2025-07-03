
import { Button } from "@/components/ui/button";
import { ChartLine, Store, ArrowRight, Coins, Bitcoin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 flex items-center overflow-hidden transition-colors duration-300">
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
          <h1 className="relative text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in transform transition-all duration-1000">
            <span className="relative inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              <span className="animate-letter-shine">Level Up Your Money Skills</span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in transform transition-all duration-1000 px-2" style={{ animationDelay: '0.2s' }}>
            A free 5-day hands-on workshop designed by high school students to teach 
            real-world financial skills to students grades 5-10.
          </p>

          <div className="space-y-4 animate-fade-in transform transition-all duration-1000 px-2" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
            >
              Sign Up Now - It's Free! 🚀
            </Button>
            
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium animate-fade-in" style={{ animationDelay: '0.6s' }}>
              All supplies included • Hosted at local libraries & camps
            </p>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-2">
            <div 
              className="text-center animate-fade-in transform transition-all duration-700 hover:scale-110 relative cursor-pointer" 
              style={{ animationDelay: '0.8s' }}
              onClick={() => navigate('/stock-markets')}
            >
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-110">
                <ChartLine className="w-10 h-10 text-blue-600 dark:text-blue-400 transition-transform duration-300 hover:rotate-12" />
              </div>
              <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">Stock Markets & Investing</p>
              <div className="flex items-center justify-center space-x-1 text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                <span>Click me</span>
                <ArrowRight className="w-4 h-4 animate-pulse" />
              </div>
            </div>
            <div className="text-center animate-fade-in transform transition-all duration-700 hover:scale-110 relative" style={{ animationDelay: '1s' }}>
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-green-200 dark:hover:bg-green-800 hover:scale-110 cursor-pointer">
                <Coins className="w-10 h-10 text-green-600 dark:text-green-400 transition-transform duration-300 hover:rotate-12" />
              </div>
              <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">Budgeting</p>
              <div className="flex items-center justify-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                <span>Coming Soon</span>
              </div>
            </div>
            <div className="text-center animate-fade-in transform transition-all duration-700 hover:scale-110 relative" style={{ animationDelay: '1.2s' }}>
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-purple-200 dark:hover:bg-purple-800 hover:scale-110 cursor-pointer">
                <Store className="w-10 h-10 text-purple-600 dark:text-purple-400 transition-transform duration-300 hover:rotate-12" />
              </div>
              <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">Online Business</p>
              <div className="flex items-center justify-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                <span>Coming Soon</span>
              </div>
            </div>
            <div className="text-center animate-fade-in transform transition-all duration-700 hover:scale-110 relative" style={{ animationDelay: '1.4s' }}>
              <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-orange-200 dark:hover:bg-orange-800 hover:scale-110 cursor-pointer">
                <Bitcoin className="w-10 h-10 text-orange-600 dark:text-orange-400 transition-transform duration-300 hover:rotate-12" />
              </div>
              <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">Crypto + NFTs</p>
              <div className="flex items-center justify-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
