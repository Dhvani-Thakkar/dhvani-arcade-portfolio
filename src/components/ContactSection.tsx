
import React, { useState } from 'react';
import { Mail, User, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleResumeDownload = () => {
    toast({
      title: "Resume Download",
      description: "Your resume download will start shortly!",
    });
  };

  const contactInfo = [
    { label: 'EMAIL', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
    { label: 'PHONE', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { label: 'LOCATION', value: 'Your City, State', href: '#' },
    { label: 'LINKEDIN', value: '/in/yourprofile', href: 'https://linkedin.com/in/yourprofile' }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-4">
            &lt;CONTACT.EXE /&gt;
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate? Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-black/50 border-2 border-cyan-400/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                CONTACT.INFO
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-cyan-400 font-mono text-sm tracking-wider">
                      {info.label}:
                    </span>
                    <a
                      href={info.href}
                      className="text-white hover:text-green-400 transition-colors duration-300 font-mono"
                    >
                      {info.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-black/50 border-2 border-green-400/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                RESUME.DOWNLOAD
              </h3>
              <p className="text-gray-300 mb-6">
                Get my complete professional profile in PDF format
              </p>
              <Button
                onClick={handleResumeDownload}
                className="w-full bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-mono text-lg tracking-wider border-2 border-green-400 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 py-3"
              >
                <Download className="w-5 h-5 mr-3" />
                DOWNLOAD.RESUME.PDF
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/50 border-2 border-cyan-400/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">
              SEND.MESSAGE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-cyan-400 font-mono text-sm tracking-wider mb-2">
                  NAME.INPUT:
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-2 border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20 font-mono"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              <div>
                <label className="block text-cyan-400 font-mono text-sm tracking-wider mb-2">
                  EMAIL.INPUT:
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-2 border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20 font-mono"
                  placeholder="Enter your email..."
                  required
                />
              </div>

              <div>
                <label className="block text-cyan-400 font-mono text-sm tracking-wider mb-2">
                  MESSAGE.INPUT:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-gray-800/50 border-2 border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20 font-mono p-4 resize-none"
                  placeholder="Enter your message..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-green-600 hover:from-cyan-600 hover:to-green-700 text-white font-mono text-lg tracking-wider border-2 border-cyan-400 hover:border-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 py-3"
              >
                <Mail className="w-5 h-5 mr-3" />
                SEND.MESSAGE
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-cyan-400/20">
          <p className="text-gray-400 font-mono text-sm">
            &copy; 2024 YOUR.NAME - Built with React & Tailwind CSS
          </p>
          <p className="text-cyan-400 font-mono text-xs mt-2">
            GAME.OVER? PRESS.SPACE.TO.CONTINUE
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
