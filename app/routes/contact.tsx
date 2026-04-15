import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react';
import React from 'react';
import { Button } from '~/components/button';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden mb-16"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/alumni-bg.webp"
            alt="Contact Header Background"
            className="size-full object-cover grayscale-20%"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#701619]/90 to-[#8A1C21]/80 mix-blend-multiply" />
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#f27200] font-bold tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <MessageSquare className="size-5" /> Let's Connect
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Have questions, suggestions, or want to update your directory profile? Drop us a line.
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-[#FEF5C6] p-8 rounded-3xl border border-[#FDE8E9] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />

              <h3 className="text-2xl font-bold text-[#8A1C21] mb-8 relative z-10">
                Contact Information
              </h3>

              <div className="space-y-8 relative z-10">
                <motion.div whileHover={{ x: 5 }} className="flex items-start group/item">
                  <div className="bg-white p-3.5 rounded-2xl shadow-sm text-[#C72E34] mr-5 group-hover/item:bg-[#F27200] group-hover/item:text-white transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Ikeja High School,<br />Oba Akinjobi Way, GRA,<br />Ikeja, Lagos, Nigeria.
                    </p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start group/item">
                  <div className="bg-white p-3.5 rounded-2xl shadow-sm text-[#C72E34] mr-5 group-hover/item:bg-[#F27200] group-hover/item:text-white transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Email Us
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                      <a href="mailto:admin@ihs2001alumni.com" className="hover:text-[#8A1C21] transition-colors">admin@ihs2001alumni.com</a><br />
                      <a href="mailto:info@ihs2001alumni.com" className="hover:text-[#8A1C21] transition-colors">info@ihs2001alumni.com</a>
                    </p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start group/item">
                  <div className="bg-white p-3.5 rounded-2xl shadow-sm text-[#C72E34] mr-5 group-hover/item:bg-[#F27200] group-hover/item:text-white transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Call Us
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                      <a href="tel:+2348000000000" className="hover:text-[#8A1C21] transition-colors">+234 (0) 800 000 0000</a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Connect Mini Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-shadow">
              <div>
                <h4 className="font-bold text-gray-900">Follow Us</h4>
                <p className="text-sm text-gray-500">Stay connected on socials</p>
              </div>
              <div className="flex gap-2">
                <span className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#8A1C21] group-hover:bg-[#FDE8E9] transition-all cursor-pointer">
                  <FaLinkedin className="size-5" />
                </span>
                <span className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#8A1C21] group-hover:bg-[#FDE8E9] transition-all cursor-pointer">
                  <FaInstagram className="size-5" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 relative">
              <div className="absolute top-0 right-0 w-full h-2 bg-linear-to-r from-[#8A1C21] to-[#F27200]" />
              <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-4 focus:ring-[#F27200]/10 focus:border-[#F27200] outline-none transition-all placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-4 focus:ring-[#F27200]/10 focus:border-[#F27200] outline-none transition-all placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-4 focus:ring-[#F27200]/10 focus:border-[#F27200] outline-none transition-all placeholder-gray-400"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Message</label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-4 focus:ring-[#F27200]/10 focus:border-[#F27200] outline-none transition-all resize-none placeholder-gray-400"
                    placeholder="Type your message here..."
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full md:w-auto px-10 py-4 text-lg rounded-xl shadow-lg shadow-[#8A1C21]/20 hover:shadow-xl hover:shadow-[#8A1C21]/30 hover:-translate-y-1 transition-all"
                  >
                    <Send className="size-5 mr-3" /> Send Message
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
