
import { Card } from "@/components/ui/card";
import { ChartLine, Coins, Store } from "lucide-react";

const AboutSpendora = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Spendora</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            A student-led financial literacy workshop by <span className="font-semibold text-blue-600 dark:text-blue-400">East Ridge High School</span> students, 
            designed to make financial literacy fun, accessible, and practical for the next generation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-dynamic-island-pop" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-lg">
              <Coins className="w-8 h-8 text-white transition-transform duration-300 hover:rotate-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Real-World Skills</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn budgeting, online payments, taxes, and smart spending habits that you'll actually use.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-dynamic-island-pop" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-lg">
              <Store className="w-8 h-8 text-white transition-transform duration-300 hover:rotate-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Modern Business</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore online businesses, TikTok Shop, reselling, and digital entrepreneurship opportunities.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-dynamic-island-pop" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-lg">
              <ChartLine className="w-8 h-8 text-white transition-transform duration-300 hover:rotate-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Investment Basics</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Understand stocks, markets, and how to make your money work for you from an early age.
            </p>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 animate-fade-in transform transition-all duration-700 hover:scale-105" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Completely Free to Attend
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              All supplies included, hosted in partnership with local libraries and camps. 
              Plus, you'll build a resume and gain practical experience with money management.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
              <div className="transition-all duration-300 hover:scale-110">✓ All Materials</div>
              <div className="transition-all duration-300 hover:scale-110">✓ Expert Instruction</div>
              <div className="transition-all duration-300 hover:scale-110">✓ Hands-on Practice</div>
              <div className="transition-all duration-300 hover:scale-110">✓ Final Competition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSpendora;
