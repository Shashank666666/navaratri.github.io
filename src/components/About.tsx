import { Sparkles, Calendar, Moon, Heart } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Calendar,
      title: '9 Sacred Nights',
      description: 'Nine divine nights dedicated to the worship of Goddess Durga in her nine forms',
    },
    {
      icon: Moon,
      title: 'Spiritual Significance',
      description: 'Celebrating the victory of good over evil and the divine feminine energy',
    },
    {
      icon: Heart,
      title: 'Cultural Heritage',
      description: 'A cherished tradition bringing communities together in devotion and celebration',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-orange-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span>About The Festival</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-4">
            Navaratri - The Festival of Nine Nights
          </h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            A celebration of divine feminine power, devotion, and the eternal triumph of light over darkness
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg">
              Navaratri, meaning "nine nights" in Sanskrit, is one of the most significant Hindu festivals celebrated with great enthusiasm across India and around the world. This auspicious festival honors Goddess Durga and her nine divine incarnations, each representing different aspects of the supreme feminine power.
            </p>
            <p className="text-lg">
              During these nine sacred nights, devotees engage in prayer, fasting, and traditional dances like Garba and Dandiya. The festival culminates on the tenth day with Vijayadashami (Dussehra), symbolizing the victory of Goddess Durga over the demon Mahishasura.
            </p>
            <p className="text-lg">
              Beyond its religious significance, Navaratri is a cultural extravaganza that brings families and communities together, celebrating faith, tradition, and the vibrant spirit of Indian heritage. 🎊
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border-2 border-orange-200 dark:border-orange-800">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="mb-1">{feature.title}</h3>
                      <p className="opacity-70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 text-4xl opacity-30">
          <span>🪔</span>
          <span>🌸</span>
          <span>✨</span>
          <span>🪔</span>
          <span>🌸</span>
        </div>
      </div>
    </section>
  );
}
