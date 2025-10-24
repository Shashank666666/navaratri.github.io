import { Sparkles } from 'lucide-react';
import { Card } from './ui/card';

export function Prayers() {
  const navadurga = [
    {
      day: 'Day 1',
      name: 'Shailaputri',
      description: 'Daughter of the mountains, riding a bull, symbolizing nature and purity.',
      color: 'from-orange-500 to-red-500',
      emoji: '🏔️',
    },
    {
      day: 'Day 2',
      name: 'Brahmacharini',
      description: 'The goddess of penance and devotion, representing asceticism and spiritual wisdom.',
      color: 'from-yellow-500 to-orange-500',
      emoji: '📿',
    },
    {
      day: 'Day 3',
      name: 'Chandraghanta',
      description: 'The goddess with a crescent moon on her forehead, embodying bravery and courage.',
      color: 'from-pink-500 to-purple-500',
      emoji: '🌙',
    },
    {
      day: 'Day 4',
      name: 'Kushmanda',
      description: 'The creator of the universe, radiating light and energy like the sun.',
      color: 'from-red-500 to-pink-500',
      emoji: '☀️',
    },
    {
      day: 'Day 5',
      name: 'Skandamata',
      description: 'The mother of Lord Skanda (Kartikeya), symbolizing motherly love and protection.',
      color: 'from-orange-500 to-yellow-500',
      emoji: '👶',
    },
    {
      day: 'Day 6',
      name: 'Katyayani',
      description: 'The warrior goddess, fierce and powerful, destroyer of evil forces.',
      color: 'from-red-600 to-orange-600',
      emoji: '⚔️',
    },
    {
      day: 'Day 7',
      name: 'Kalaratri',
      description: 'The dark goddess, removing ignorance and fear, granting fearlessness.',
      color: 'from-purple-600 to-pink-600',
      emoji: '🌑',
    },
    {
      day: 'Day 8',
      name: 'Mahagauri',
      description: 'The goddess of purity and serenity, symbolizing peace and compassion.',
      color: 'from-pink-400 to-purple-400',
      emoji: '🤍',
    },
    {
      day: 'Day 9',
      name: 'Siddhidatri',
      description: 'The giver of supernatural powers and perfection, fulfilling all desires.',
      color: 'from-yellow-500 to-pink-500',
      emoji: '✨',
    },
  ];

  return (
    <section id="prayers" className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Nine Divine Forms</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-4">
            Navadurga - Nine Manifestations
          </h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            Each day of Navaratri honors a different form of Goddess Durga, representing various divine qualities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navadurga.map((goddess, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-2 border-orange-200 dark:border-orange-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${goddess.color}`}></div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-sm opacity-60">{goddess.day}</span>
                    <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
                      {goddess.name}
                    </h3>
                  </div>
                  <div className="text-4xl">{goddess.emoji}</div>
                </div>

                <p className="opacity-70">{goddess.description}</p>

                <div className={`h-1 w-16 bg-gradient-to-r ${goddess.color} rounded-full`}></div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 opacity-10">
                <div className="text-6xl">🪔</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-2xl p-8 max-w-3xl">
            <p className="text-lg mb-4">
              "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता।<br />
              नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥"
            </p>
            <p className="opacity-70">
              "Salutations to the Goddess who resides in all beings in the form of power."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
