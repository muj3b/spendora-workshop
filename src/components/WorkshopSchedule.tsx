import { Card } from "@/components/ui/card";

const WorkshopSchedule = () => {
  const schedule = [
    {
      day: "Day 1",
      title: "Intro to Markets & Payment Setup",
      description: "Interactive presentation on market basics, icebreakers, and hands-on workshop to set up online payment methods and bank accounts",
      activities: ["Market fundamentals icebreaker", "Payment method setup workshop", "Personal finance basics"],
      color: "from-blue-500 to-blue-600"
    },
    {
      day: "Day 2", 
      title: "How Money Works",
      description: "Interactive demonstrations on taxes, saving vs investing strategies, and economic principles like inflation and interest rates",
      activities: ["Tax basics demonstration", "Spend vs. Invest case studies", "Economic principles workshop"],
      color: "from-green-500 to-green-600"
    },
    {
      day: "Day 3",
      title: "Online Business & Marketing", 
      description: "Learn online advertising, business setup strategies, and brainstorm your own business ideas in breakout sessions",
      activities: ["Successful business strategy videos", "Dropshipping & TikTok Shop basics", "Business idea brainstorming"],
      color: "from-purple-500 to-purple-600"
    },
    {
      day: "Day 4",
      title: "Stocks & Investment Strategy",
      description: "Understand what stocks are, practice predicting trends, and learn investment research through interactive games", 
      activities: ["Stock trend prediction game", "Investment strategy workshop", "Research fundamentals"],
      color: "from-orange-500 to-orange-600"
    },
    {
      day: "Day 5",
      title: "Final Competition & Celebration",
      description: "Apply everything you've learned in fun competitions, presentations, and celebrate with prizes and refreshments!",
      activities: ["Blooket fishing game competition", "Student presentations", "Prize ceremony & celebration"],
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
          <p className="text-xl text-gray-700 mb-4">
            Each day builds on the last, creating a comprehensive foundation in financial literacy
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 animate-fade-in">
            <p className="text-blue-800 font-medium">
              📅 Specific dates, times, and locations will be sent to you via your contact information some time after you sign up!
            </p>
          </div>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {schedule.map((day, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex">
                <div className={`w-2 bg-gradient-to-b ${day.color}`}></div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${day.color} mr-4`}>
                        {day.day}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {day.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-4">
                      {day.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {day.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                          • {activity}
                        </div>
                      ))}
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
