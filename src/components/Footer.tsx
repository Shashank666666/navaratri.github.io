import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { label: 'About Navaratri', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Prayers', href: '#prayers' },
    // { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Navaratri 2025
            </h3>
            <p className="mb-4 opacity-80">
              Celebrating the divine feminine power and the triumph of good over evil. Join us for nine nights of devotion, dance, and divine blessings.
            </p>
            <div className="flex items-center gap-2 text-yellow-300">
              <MapPin className="w-5 h-5" />
              <span>Temple Location, City, State</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="opacity-80 hover:opacity-100 hover:text-yellow-300 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 opacity-80">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 opacity-80">
                <Mail className="w-5 h-5" />
                <span>info@navaratri2025.org</span>
              </div>
            </div>
            
            <h4 className="text-xl mt-6 mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center opacity-70">
          <p>&copy; 2025 Navaratri Festival. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}