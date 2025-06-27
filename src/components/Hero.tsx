
import { Button } from "@/components/ui/button";
import { ChartLine, Coins, Store } from "lucide-react";

const Hero = () => {
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="relative text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-6 leading-tight animate-fade-in transform transition-all duration-1000 overflow-hidden">
            <span className="relative inline-block">
              Level Up Your Money Skills
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 w-1/3 h-full animate-shine pointer-events-none"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in transform transition-all duration-1000" style={{ animationDelay: '0.2s' }}>
            A free 5-day hands-on workshop designed by high school students to teach 
            real-world financial skills to students grades 5-10.
          </p>

          <div className="space-y-4 animate-fade-in transform transition-all duration-1000" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1"
              onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
            >
              Sign Up Now - It's Free! 🚀
            </Button>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium animate-fade-in" style={{ animationDelay: '0.6s' }}>
              All supplies included • Hosted at local libraries & camps
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-fade-in transform transition-all duration-700 hover:scale-110" style={{ animationDelay: '0.8s' }}>
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-110">
                <ChartLine className="w-8 h-8 text-blue-600 dark:text-blue-400 transition-transform duration-300 hover:rotate-12" />
              </div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Stock Markets</p>
            </div>
            <div className="text-center animate-fade-in transform transition-all duration-700 hover:scale-110" style={{ animationDelay: '1s' }}>
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-green-200 dark:hover:bg-green-800 hover:scale-110">
                <Coins className="w-8 h-8 text-green-600 dark:text-green-400 transition-transform duration-300 hover:rotate-12" />
              </div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Budgeting</p>
            </div>
            <div className="text-center animate-fade-in transform transition-all duration-700 hover:scale-110" style={{ animationDelay: '1.2s' }}>
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-purple-200 dark:hover:bg-purple-800 hover:scale-110">
                <Store className="w-8 h-8 text-purple-600 dark:text-purple-400 transition-transform duration-300 hover:rotate-12" />
              </div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Online Business</p>
            </div>
            <div className="text-center animate-fade-in transform transition-all duration-700 hover:scale-110" style={{ animationDelay: '1.4s' }}>
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-orange-200 dark:hover:bg-orange-800 hover:scale-110">
                <ChartLine className="w-8 h-8 text-orange-600 dark:text-orange-400 transition-transform duration-300 hover:rotate-12" />
              </div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Investing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
