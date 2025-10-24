import { Calendar, Clock, MapPin, Music, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Events() {
  const events = [
    {
      title: 'Garba Night',
      date: 'September 22-30, 2025',
      time: '7:00 PM - 11:00 PM',
      location: 'Community Hall, Main Street',
      description: 'Experience the joy of traditional Garba dance with live music, colorful attire, and authentic Gujarat-style celebration.',
      image: 'https://images.unsplash.com/photo-1605029271330-95970e826af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJiYSUyMGRhbmNlJTIwbmlnaHQlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NjEyODA1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'Dandiya Night',
      date: 'September 22-30, 2025',
      time: '8:00 PM - 12:00 AM',
      location: 'Temple Grounds, Park Avenue',
      description: 'Join the rhythmic beats of Dandiya Raas with colorful sticks, energetic music, and a night of endless dancing.',
      image: 'https://images.unsplash.com/photo-1672306325342-8373e06baf99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5kaXlhJTIwc3RpY2tzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYxMjgwNTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-pink-500 to-red-500',
    },
    {
      title: 'Durga Pooja Ceremony',
      date: 'September 22-30, 2025',
      time: '6:00 AM - 9:00 AM & 6:00 PM - 9:00 PM',
      location: 'Durga Temple, Heritage Street',
      description: 'Participate in the sacred rituals, aarti, and prasad distribution. Witness the divine presence of Maa Durga.',
      image: 'https://images.unsplash.com/photo-1698221182264-d2b5e821c3a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXJnYSUyMHB1amElMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjEyODA1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-orange-50 to-pink-50 dark:from-orange-950/20 dark:to-pink-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-4 py-2 rounded-full mb-4">
            <Music className="w-4 h-4" />
            <span>Festival Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600 mb-4">
            Upcoming Events & Celebrations
          </h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            Join us for nine nights of devotion, dance, and divine festivities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden border-2 border-orange-200 dark:border-orange-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-60`}></div>
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2">
                  <Sparkles className="w-5 h-5 text-orange-600" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl">{event.title}</h3>
                <p className="opacity-70">{event.description}</p>

                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Button className={`w-full bg-gradient-to-r ${event.color} hover:opacity-90 text-white`}>
                  Register / RSVP
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
