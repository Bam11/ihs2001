import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { HeartHandshake, Award, Lightbulb, Users, BookOpen } from 'lucide-react';
import SectionHeader from '~/components/section-header';

export default function About() {
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
            alt="About Header Background"
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
            <BookOpen className="w-5 h-5" /> Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About IHS Class of 2001
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Our journey from the classrooms of Ikeja High School to the global stage.
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10">
          <div>
            <img
              src="/images/student.webp"
              alt="School building or students"
              className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#701619] mb-4">
              Our History
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Graduating in the year 2001, our class stepped out of the gates of Ikeja High School into a new millennium. Over the past two decades, our members have excelled in various fields including business, medicine, law, arts, and technology across the globe.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The IHS2001Alumni association was formally established to foster lifelong connections, support our alma mater, and create a strong support network for members. We believe in the power of community and the shared bond of our formative years.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#FEF5C6] p-6 rounded-xl border-l-4 border-[#F27200]">
                <h4 className="text-lg font-bold text-[#8A1C21] mb-2">
                  Our Vision
                </h4>
                <p className="text-sm text-gray-700">
                  To be the most impactful and united alumni class, empowering members and uplifting Ikeja High School.
                </p>
              </div>
              <div className="bg-[#FEF5C6] p-6 rounded-xl border-l-4 border-[#F27200]">
                <h4 className="text-lg font-bold text-[#8A1C21] mb-2">
                  Our Mission
                </h4>
                <p className="text-sm text-gray-700">
                  Fostering networking, providing mentorship, and giving back to our alma mater through sustainable initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10">
          <div className="mt-20 bg-[#FEF5C6] p-8 md:p-12 rounded-3xl border-l-8 border-[#F27200] shadow-sm max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="md:w-1/3 flex justify-center pt-2">
              <div className="size-30 bg-white rounded-full border-[6px] border-[#701619] flex flex-col items-center justify-center shadow-lg">
                <span className="text-[#701619] font-black text-3xl">IHS</span>
                <span className="text-[#F27200] font-bold text-[10px] tracking-widest mt-1">ANTHEM</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-[#E31C23] mb-6 tracking-wide uppercase">
                School Anthem
              </h3>
              <div className="space-y-6 text-gray-800 text-lg md:text-xl font-medium leading-relaxed">
                <p>
                  God bless Ikeja Senior High School<br />
                  And all who pass through her<br />
                  And with high morals<br />
                  And academic work<br />
                  We'll be great mother<br />
                  And fathers tomorrow<br />
                  And the future leaders<br />
                  God bless thee my school.
                </p>
                <p>
                  In work and in play<br />
                  We'll keep her good name<br />
                  And keep her flag flying<br />
                  Flying anywhere I go<br />
                  God bless Ikeja Senior High School<br />
                  And all who pass through her<br />
                  And with high morals<br />
                  And academic work<br />
                  We'll be great mother<br />
                  And fathers tomorrow<br />
                  And the future leaders<br />
                  God bless thee my school. Amen
                </p>
              </div>
            </div>
          </div>
          <img
            src="/images/IHS1.webp"
            alt="School building or students"
            className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
          />
        </div>

        <div className="py-20 border-t mt-20">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones from our graduation to the present day."
          />
          <div className="max-w-3xl mx-auto mt-12 pl-4">
            <div className="border-l-4 border-gray-100 ml-4 space-y-12 pb-8">
              {[
                { year: '2001', title: 'Graduation', desc: 'Class of 2001 departed Ikeja High School into the new millennium.' },
                { year: '2011', title: '10-Year Reunion', desc: 'Our first major gathering celebrating a decade of friendship and growth.' },
                { year: '2021', title: 'Association Formed', desc: 'Formally registered the Alumni Association and launched the Scholarship Fund.' },
                { year: '2026', title: '25th Anniversary', desc: 'Preparing for our silver jubilee and the biggest alumni homecoming yet.' },
              ].map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  key={item.year} className="relative pl-12"
                >
                  <div className="absolute -left-[26px] top-1 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-[#8A1C21] shadow-sm z-10">
                    <span className="text-[#8A1C21] font-bold text-sm">'{item.year.slice(-2)}</span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold text-[#E31C23] mb-2">{item.title} <span className="text-gray-400 text-sm ml-2">{item.year}</span></h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-20 border-t mt-10">
          <SectionHeader title="Our Core Values" subtitle="The principles that guide our association and keep our community thriving." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-12">
            {[
              { icon: Users, title: 'Unity', desc: 'Fostering lifelong bonds and providing a reliable network for every member.' },
              { icon: Award, title: 'Excellence', desc: 'Celebrating milestones and pushing each other toward greatness.' },
              { icon: HeartHandshake, title: 'Philanthropy', desc: 'Giving back to Ikeja High School and supporting our community.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Embracing fresh ideas and initiatives to propel the alumni forward.' },
            ].map((val, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                key={val.title} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 mx-auto bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F27200] transition-colors">
                  <val.icon className="w-8 h-8 text-[#F27200] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-20 mb-10 bg-gray-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl mx-auto max-w-6xl"
        >
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-64 h-64 bg-[#8A1C21] rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-64 h-64 bg-[#F27200] rounded-full blur-3xl opacity-40"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet the Leadership</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Dedicated to serving our community. Meet the passionate individuals steering the affairs of the IHS 2001 Alumni Association.
            </p>
            <button onClick={() => navigate('/executives')} className="bg-white text-[#8A1C21] hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-colors cursor-pointer">
              View Executives
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
