import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full mb-4">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-4">
            Contact Us
          </h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            Have questions about the festival? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 border-2 border-orange-200 dark:border-orange-800">
            <h3 className="text-2xl mb-6">Send us a Message</h3>
            
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-green-500" />
                <h4 className="text-xl">Message Sent Successfully! ✨</h4>
                <p className="text-center opacity-70">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="border-orange-200 dark:border-orange-800 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="border-orange-200 dark:border-orange-800 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Your message or questions..."
                    rows={5}
                    required
                    className="border-orange-200 dark:border-orange-800 focus:border-orange-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-6">
            <Card className="p-8 border-2 border-orange-200 dark:border-orange-800">
              <h3 className="text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <p className="opacity-70">+1 (555) 123-4567</p>
                    <p className="opacity-70">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="opacity-70">info@navaratri2025.com</p>
                    <p className="opacity-70">events@navaratri2025.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-1">Venue Address</h4>
                    <p className="opacity-70">
                      Durga Temple Complex<br />
                      123 Heritage Street<br />
                      Cultural District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Google Map Placeholder */}
            <Card className="overflow-hidden border-2 border-orange-200 dark:border-orange-800">
              <div className="relative h-64 bg-gradient-to-br from-orange-200 to-pink-200 dark:from-orange-900 dark:to-pink-900 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 mx-auto opacity-50" />
                  <p className="opacity-70">Festival Venue Location</p>
                  <p className="text-sm opacity-50">Interactive map view</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
