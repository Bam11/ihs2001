import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import SectionHeader from '~/components/section-header';
import { Button } from '~/components/button';
import { useNavigate } from 'react-router';

const MOCK_EXECUTIVES = [
  {
    id: 1,
    name: 'Oluwaseun Adeyemi',
    role: 'President',
    bio: 'Oluwaseun has been leading the alumni association since 2018, bringing 15+ years of corporate leadership experience.',
    image: '/images/exec-1.webp'
  },
  {
    id: 2,
    name: 'Chika Nwosu',
    role: 'Vice President',
    bio: 'A dedicated member of the class, Chika oversees our community outreach and charity initiatives.',
    image: '/images/exec-2.webp'
  },
  {
    id: 3,
    name: 'Tunde Bakare',
    role: 'General Secretary',
    bio: 'Tunde manages all official correspondence, event planning logistics, and alumni directory updates.',
    image: '/images/exec-3.webp'
  },
  {
    id: 4,
    name: 'Amina Bello',
    role: 'Financial Secretary',
    bio: 'With a background in accounting, Amina ensures transparency in all our financial dealings and dues.',
    image: '/images/exec-4.webp'
  },
  {
    id: 5,
    name: 'Emeka Uzo',
    role: 'Public Relations Officer',
    bio: 'Emeka handles our communications, social media presence, and brand image across all public channels.',
    image: '/images/exec-1.webp'
  },
  {
    id: 6,
    name: 'Sarah Johnson',
    role: 'Social Secretary',
    bio: 'Sarah is the creative force behind our reunions, galas, and all engaging events hosted by the alumni.',
    image: '/images/exec-2.webp'
  },
  {
    id: 7,
    name: 'Olayinka Peters',
    role: 'Welfare Officer',
    bio: 'Dedicated to member wellbeing, Olayinka coordinates support networks and assistance for our alumni family.',
    image: '/images/exec-3.webp'
  },
  {
    id: 8,
    name: 'Dr. Kunle Adewale',
    role: 'Chief Treasurer',
    bio: 'A certified financial analyst, Kunle strictly oversees our treasury, investments, and scholarship disbursements.',
    image: '/images/exec-4.webp'
  },
];

export default function Executives() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden mb-16"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/alumni-bg.webp"
            alt="Executives Header Background"
            className="w-full h-full object-cover grayscale-20%"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#701619]/90 to-[#8A1C21]/80 mix-blend-multiply"></div>
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#f27200] font-bold tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <Users className="w-5 h-5" /> Leadership
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Meet the Executives
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            The dedicated team driving the vision and operations of the IHS Class of 2001.
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_EXECUTIVES.map((exec, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={exec.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#701619]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                  <a href="#" className="text-white hover:text-[#F27200] transition-colors"><RiTwitterXFill size={20} /></a>
                  <a href="#" className="text-white hover:text-[#F27200] transition-colors"><FaLinkedin size={20} /></a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{exec.name}</h3>
                <p className="text-[#D96600] font-medium mb-4 text-sm">{exec.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{exec.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-white border border-gray-100 rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto shadow-sm"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Want to Contribute?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            You don't need to be an executive to make a difference. Join a sub-committee or volunteer for our upcoming milestone events.
          </p>
          <Button onClick={() => navigate('/contact')} className="mx-auto cursor-pointer">
            Contact Us to Volunteer
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
