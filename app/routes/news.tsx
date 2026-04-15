import React from 'react';
import SectionHeader from '~/components/section-header';
import { Calendar, ChevronRight, ArrowRight, Bell } from 'lucide-react';
import { Button } from '~/components/button';
import { motion } from 'framer-motion';

const MOCK_NEWS = [
  {
    id: 1,
    title: '25th Anniversary Reunion Planning Commences',
    date: 'April 10, 2026',
    category: 'Announcement',
    excerpt: 'The planning committee has officially begun preparations for our 25th anniversary reunion coming up later this year.'
  },
  {
    id: 2,
    title: 'Annual Scholarship Fund Reaches Goal',
    date: 'March 22, 2026',
    category: 'News',
    excerpt: 'Thanks to your generous donations, we have reached our ₦5M goal for the IHS current students scholarship fund.'
  },
  {
    id: 3,
    title: 'Alumni Mentorship Program Registration',
    date: 'February 15, 2026',
    category: 'Event',
    excerpt: 'Sign up to become a mentor for the graduating class of 2026. Give back by sharing your career journey.'
  },
  {
    id: 4,
    title: 'New Alumni Business Directory Launched',
    date: 'January 28, 2026',
    category: 'Announcement',
    excerpt: 'Support alumni-owned businesses! Browse our new directory to find services offered by fellow class of 2001 grads.'
  },
];

export default function News() {
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
            alt="News Header Background"
            className="w-full h-full object-cover grayscale-30%"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#701619]/90 to-[#8A1C21]/70 mix-blend-multiply"></div>
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#f27200] font-bold tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <Bell className="w-5 h-5" /> Stay Updated
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            News & Events
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            The latest happenings, announcements, and upcoming events from our community.
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

          {/* Main News Area */}
          <div className="lg:col-span-2 space-y-8">
            {MOCK_NEWS.map((news, idx) => (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={news.id}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row gap-6 group"
              >
                <div className="md:w-1/4 shrink-0">
                  <div className="bg-[#FEF5C6] group-hover:bg-[#F27200] transition-colors duration-500 rounded-2xl p-4 text-center h-full flex flex-col justify-center border border-[#FDE8E9] group-hover:border-[#F27200]">
                    <span className="text-sm font-semibold uppercase text-[#8A1C21] group-hover:text-white transition-colors">{news.date.split(' ')[0]}</span>
                    <span className="text-3xl font-bold my-1 text-[#8A1C21] group-hover:text-white transition-colors">{news.date.split(' ')[1].replace(',', '')}</span>
                    <span className="text-xs text-[#8A1C21]/70 group-hover:text-white/80 transition-colors uppercase font-bold tracking-wider">{news.date.split(' ')[2]}</span>
                  </div>
                </div>
                <div className="md:w-3/4 flex flex-col justify-center">
                  <div className="mb-3">
                    <span className="inline-block px-4 py-1.5 bg-[#FDE8CC]/80 text-[#A64D00] text-xs font-black tracking-wider uppercase rounded-full">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#8A1C21] transition-colors">{news.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{news.excerpt}</p>
                  <a href="#" className="font-bold text-[#8A1C21] hover:text-[#C72E34] inline-flex items-center group/link">
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}

            <div className="pt-8 text-center">
              <Button variant="outline" className="w-full sm:w-auto cursor-pointer">Load More News</Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-linear-to-br from-[#8A1C21] to-[#601015] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-white/10">
                <Calendar className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 flex items-center tracking-wide uppercase text-white/90">
                  <Calendar className="mr-3 w-5 h-5 text-[#F27200]" />
                  Upcoming Event
                </h3>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
                  <h4 className="font-bold text-xl mb-2 text-white">Q2 General Meeting</h4>
                  <p className="text-[#FFD9DB] text-sm mb-4 font-medium tracking-wide">May 15, 2026 • 2:00 PM WAT</p>
                  <p className="text-sm text-gray-200 leading-relaxed">Join us virtually for our quarterly general meeting to discuss ongoing projects and upcoming reunions.</p>
                </div>
                <button className="w-full bg-[#F27200] hover:bg-[#D96600] text-white py-3 px-4 rounded-xl font-bold shadow-lg transition-colors cursor-pointer">
                  RSVP Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-gray-900 border-b border-gray-100 pb-4">Categories</h3>
              <ul className="space-y-4">
                {['All Updates', 'Announcements', 'Events & Reunions', 'Alumni Spotlights'].map(cat => (
                  <li key={cat}>
                    <a href="#" className="text-gray-600 hover:text-[#8A1C21] flex justify-between items-center group font-medium">
                      <span className="group-hover:translate-x-1 transition-transform">{cat}</span>
                      <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#FDE8E9] transition-colors">
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#8A1C21]" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
