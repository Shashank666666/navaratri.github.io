import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">
              Stay Updated with Festival News
            </h2>
            <p className="text-lg opacity-90">
              Subscribe to our newsletter for event updates, special announcements, and exclusive content.
            </p>
          </div>

          {subscribed ? (
            <div className="flex flex-col items-center justify-center py-8 space-y-4">
              <CheckCircle className="w-12 h-12" />
              <p className="text-xl">Thank you for subscribing! 🙏</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                />
                <Button
                  type="submit"
                  className="bg-white text-orange-600 hover:bg-white/90"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
