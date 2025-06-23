
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 animate-fade-in">
            Ready to Start Your Financial Journey?
          </h3>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Join hundreds of students already signed up for Spendora's summer workshop
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 mb-12 animate-fade-in"
            onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
            style={{ animationDelay: '0.2s' }}
          >
            Sign Up for Free Workshop
          </Button>

          <div className="border-t border-gray-700 pt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="transition-all duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Spendora
                </h4>
                <p className="text-gray-400 text-sm">
                  Student-led financial literacy workshop
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
                <button 
                  onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Registration Form
                </button>
                <div className="flex space-x-3">
                  <div className="w-6 h-6 bg-gray-700 rounded hover:bg-gray-600 transition-all duration-300 hover:scale-110"></div>
                  <div className="w-6 h-6 bg-gray-700 rounded hover:bg-gray-600 transition-all duration-300 hover:scale-110"></div>
                  <div className="w-6 h-6 bg-gray-700 rounded hover:bg-gray-600 transition-all duration-300 hover:scale-110"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 text-gray-500 text-sm">
              <p>&copy; 2025 Spendora. A project by East Ridge High School students.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
