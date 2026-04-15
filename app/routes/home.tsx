import type { Route } from "./+types/home";
import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Nav from "~/components/nav";
import SectionHeader from "~/components/section-header";
import { Button } from "~/components/button";
import { BookOpen, Calendar, ChevronRight, ChevronLeft, ImageIcon, Users, MapPin, Clock } from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Footer from "~/components/footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "IHS Alumni Association 2001" },
    { name: "IHS Alumni 2001", content: "Welcome to the IHS Alumni Association 2001!" },
  ];
};

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
    title: '25th Anniversary Reunion Planning Commences',
    date: 'April 10, 2026',
    category: 'Announcement',
    excerpt: 'The planning committee has officially begun preparations for our 25th anniversary reunion coming up later this year.'
  },
  {
    id: 5,
    title: 'Annual Scholarship Fund Reaches Goal',
    date: 'March 22, 2026',
    category: 'News',
    excerpt: 'Thanks to your generous donations, we have reached our ₦5M goal for the IHS current students scholarship fund.'
  },
  {
    id: 6,
    title: 'Alumni Mentorship Program Registration',
    date: 'February 15, 2026',
    category: 'Event',
    excerpt: 'Sign up to become a mentor for the graduating class of 2026. Give back by sharing your career journey.'
  },
];

const MOCK_EVENTS = [
  {
    id: 1,
    title: '25th Christmas Get-Together',
    date: 'December 15, 2026',
    time: '6:00 PM',
    location: 'Eko Hotels & Suites, Victoria Island',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 2,
    title: 'Alumni Mentorship Kickoff',
    date: 'May 5, 2026',
    time: '10:00 AM',
    location: 'Ikeja High School Main Hall',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=500',
  }
];

const MOCK_GALLERY = [
  '/images/gal-1.webp',
  '/images/gal-2.webp',
  '/images/gal-3.webp',
  '/images/gal-4.webp',
  '/images/gal-5.webp',
  '/images/gal-6.webp',
];

export default function Home() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const directionRef = useRef<'right' | 'left'>('right');
  const isInteracting = useRef(false);

  useEffect(() => {
    let animationFrameId: number;

    const continuousScroll = () => {
      if (scrollRef.current && !isHovered && !isInteracting.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const speed = 0.5;

        scrollRef.current.scrollLeft += speed;

        if (scrollLeft + clientWidth >= scrollWidth - 1) {
           isInteracting.current = true;
           scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
           setTimeout(() => { isInteracting.current = false; }, 1200);
        }
      }
      animationFrameId = requestAnimationFrame(continuousScroll);
    };

    animationFrameId = requestAnimationFrame(continuousScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const handleManualScroll = (direction: 'left' | 'right', offset: number) => {
    directionRef.current = direction;
    isInteracting.current = true;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
    setTimeout(() => { isInteracting.current = false; }, 800);
  };

  const scrollLeft = () => handleManualScroll('left', -320);
  const scrollRight = () => handleManualScroll('right', 320);

  return (
    <div>
      <main className="grow">
        <div className="overflow-hidden">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[80vh] min-h-[600px] w-full flex items-center"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/images/alumni-bg.webp"
                alt="Alumni Gathering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#701619]/40"></div>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
              <span className="text-[#f27200] font-bold tracking-wider uppercase mb-4 block">
                Welcome Home, Alumni
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Ikeja High School <br /> <span className="text-[#f27200]">Class of 2001</span>
              </h1>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                Connecting the past, empowering the present, and building the future together. Welcome to your official digital home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate('about')}
                >
                  Discover Our History
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('contact')}
                >
                  Update Your Details
                </Button>
              </div>
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="py-12 bg-white border-b"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { icon: Users, label: 'Registered Alumni', value: '250+' },
                  { icon: Calendar, label: 'Years Since Grad', value: '25' },
                  { icon: BookOpen, label: 'Scholarships Given', value: '12' },
                  { icon: ImageIcon, label: 'Events Hosted', value: '10+' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="p-4"
                  >
                    <stat.icon className="size-10 mx-auto text-[#8a1c21] mb-3" />
                    <h4 className="text-3xl font-bold text-gray-900">{stat.value}</h4>
                    <p className="text-gray-600 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="py-20 bg-gray-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                title="Latest Updates"
                subtitle="Stay informed with the latest news, announcements, and upcoming events from our class."
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {MOCK_NEWS.map((news, idx) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8A1C21] bg-[#FDE8E9] px-3 py-1 rounded-full">{news.category}</span>
                    <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900 leading-tight">{news.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{news.date}</p>
                    <p className="text-gray-600 mb-6">{news.excerpt}</p>
                    <button
                      onClick={() => navigate('news')}
                      className="text-[#D96600] font-semibold flex items-center hover:text-[#B34700]"
                    >
                      Read More <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button
                  variant="secondary"
                  onClick={() => navigate('news')}
                >
                  View All News & Events
                </Button>
              </div>
            </div>
          </motion.section>

          {/* Upcoming Events Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="py-20 bg-white border-t"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                title="Upcoming Refined Events"
                subtitle="Mark your calendars. Here are the major events coming up for our alumni family."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {MOCK_EVENTS.map((event, idx) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
                  >
                    <div className="md:w-2/5 md:h-auto h-48 relative overflow-hidden">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 md:w-3/5 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-5 h-5 mr-3 text-[#8A1C21]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-5 h-5 mr-3 text-[#8A1C21]" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-5 h-5 mr-3 text-[#f27200]" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-fit" onClick={() => navigate('contact')}>
                        RSVP Now
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Memory Lane Photo Carousel */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="py-20 bg-gray-50 overflow-hidden border-t"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Memory Lane</h2>
                <p className="text-gray-600 max-w-2xl text-lg">A look back at 2001 and all our wonderful moments together since graduation.</p>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                <button
                  onClick={scrollLeft}
                  className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#8A1C21] hover:border-[#8A1C21] transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollRight}
                  className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#8A1C21] hover:border-[#8A1C21] transition-colors shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <Button variant="outline" onClick={() => navigate('gallery')} className="ml-4">
                  View Full Gallery
                </Button>
              </div>
            </div>

            {/* Scrollable Gallery Strip */}
            <div
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex overflow-x-auto gap-6 px-4 md:px-8 pb-8 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[...MOCK_GALLERY, ...MOCK_GALLERY, ...MOCK_GALLERY].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="shrink-0 w-72 h-96 sm:w-80 sm:h-[400px] rounded-2xl overflow-hidden relative group"
                >
                  <img src={src} alt="Memory" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
            <div className="text-center sm:hidden px-4 mt-6 flex flex-col gap-4">
              <div className="flex justify-center gap-4">
                <button
                  onClick={scrollLeft}
                  className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#8A1C21] transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollRight}
                  className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#8A1C21] transition-colors shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <Button variant="outline" onClick={() => navigate('gallery')} className="w-full">
                View Full Gallery
              </Button>
            </div>
          </motion.section>

          {/* Social Connect CTA */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="py-12 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6 md:mb-0 text-center md:text-left md:pr-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Let's Stay Connected</h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    Join our WhatsApp group and follow us on social platforms to never miss an update.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 px-4 py-2.5 rounded-lg font-medium transition-colors text-sm group"
                    onClick={(e) => { e.preventDefault(); navigate('contact'); }}
                  >
                    <FaWhatsapp className="w-5 h-5 text-gray-400 group-hover:text-[#25D366] transition-colors" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 px-4 py-2.5 rounded-lg font-medium transition-colors text-sm group"
                    onClick={(e) => { e.preventDefault(); navigate('contact'); }}
                  >
                    <FaLinkedin className="w-5 h-5 text-gray-400 group-hover:text-[#0A66C2] transition-colors" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 px-4 py-2.5 rounded-lg font-medium transition-colors text-sm group"
                    onClick={(e) => { e.preventDefault(); navigate('contact'); }}
                  >
                    <FaInstagram className="w-5 h-5 text-gray-400 group-hover:text-[#bc1888] transition-colors" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
