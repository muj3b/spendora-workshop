
import { Card } from "@/components/ui/card";

const WorkshopSchedule = () => {
  const schedule = [
    {
      day: "Day 1",
      title: "Markets & Payment Setup",
      description: "Introduction to financial markets and setting up digital payment systems",
      color: "from-blue-500 to-blue-600"
    },
    {
      day: "Day 2", 
      title: "Taxes, Saving & Smart Spending",
      description: "Learn about taxes, building savings habits, and making smart purchasing decisions",
      color: "from-green-500 to-green-600"
    },
    {
      day: "Day 3",
      title: "Online Business & Reselling", 
      description: "Explore e-commerce, TikTok Shop, and profitable reselling strategies",
      color: "from-purple-500 to-purple-600"
    },
    {
      day: "Day 4",
      title: "Stocks & Investing",
      description: "Understand stock markets, research companies, and make investment decisions", 
      color: "from-orange-500 to-orange-600"
    },
    {
      day: "Day 5",
      title: "Final Competition & Prizes",
      description: "Put your skills to the test in our final challenge and win amazing prizes!",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            5-Day Workshop <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Schedule</span>
          </h2>
          <p className="text-xl text-gray-700">
            Each day builds on the last, creating a comprehensive foundation in financial literacy
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {schedule.map((day, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex">
                <div className={`w-2 bg-gradient-to-b ${day.color}`}></div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${day.color} mr-4`}>
                          {day.day}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                          {day.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-lg">
                        {day.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Ready to transform your relationship with money?
          </p>
          <button 
            onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Reserve Your Spot Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSchedule;
