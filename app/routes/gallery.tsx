import React, { useState, useEffect } from 'react';
import SectionHeader from '~/components/section-header';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const MOCK_GALLERY_ALBUMS = ['All', '10th Reunion', '20th Christmas Get-together', 'Old School Days'];
const MOCK_GALLERY = [
  { id: 1, album: '10th Reunion', url: '/images/gal-1.webp' },
  { id: 2, album: '20th Christmas Get-together', url: '/images/gal-2.webp' },
  { id: 3, album: 'Old School Days', url: '/images/gal-3.webp' },
  { id: 4, album: '10th Reunion', url: '/images/gal-4.webp' },
  { id: 5, album: '20th Christmas Get-together', url: '/images/gal-5.webp' },
  { id: 6, album: 'Old School Days', url: '/images/gal-6.webp' },
  { id: 7, album: '10th Reunion', url: '/images/gal-1.webp' },
  { id: 8, album: '20th Christmas Get-together', url: '/images/gal-2.webp' },
  { id: 9, album: 'Old School Days', url: '/images/gal-3.webp' },
  { id: 10, album: '10th Reunion', url: '/images/gal-4.webp' },
  { id: 11, album: '20th Christmas Get-together', url: '/images/gal-5.webp' },
  { id: 12, album: 'Old School Days', url: '/images/gal-6.webp' },
];

export default function Gallery() {
  const [activeAlbum, setActiveAlbum] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = activeAlbum === 'All'
    ? MOCK_GALLERY
    : MOCK_GALLERY.filter(img => img.album === activeAlbum);

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredImages]);

  const showNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  const showPrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const closeLightbox = () => setSelectedImageIndex(null);

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
            src="/images/gal-4.webp"
            alt="Gallery Header Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#701619]/80 mix-blend-multiply"></div>
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#f27200] font-bold tracking-wider uppercase mb-3 block">
            Visual Memories
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Relive the memories. Browse through collections from our past events, reunions, and school days.
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Album Filters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {MOCK_GALLERY_ALBUMS.map(album => (
            <button
              key={album}
              onClick={() => {
                setActiveAlbum(album);
                setSelectedImageIndex(null); // reset lightbox on filter change
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${activeAlbum === album
                  ? 'bg-[#8A1C21] text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {album}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style Grid with Staggered Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={`${img.id}-${activeAlbum}`}
                className="group relative rounded-2xl overflow-hidden aspect-4/3 shadow-sm hover:shadow-xl cursor-pointer bg-gray-200"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={img.url}
                  alt={img.album}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#8A1C21]/90 via-[#8A1C21]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#f27200] text-xs font-bold uppercase tracking-wider mb-1 block">Album</span>
                    <span className="text-white font-semibold text-xl">{img.album}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No photos found for this album.
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/20 rounded-full"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Left */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 transition-colors z-50 hidden sm:block bg-black/20 rounded-full hover:bg-black/40"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full px-4 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImageIndex].url}
                alt={filteredImages[selectedImageIndex].album}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-[-60px] text-center w-full">
                <p className="text-white text-lg font-medium">{filteredImages[selectedImageIndex].album}</p>
                <p className="text-gray-400 text-sm mt-1">Image {selectedImageIndex + 1} of {filteredImages.length}</p>
              </div>
            </motion.div>

            {/* Navigation Right */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 transition-colors z-50 hidden sm:block bg-black/20 rounded-full hover:bg-black/40"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Mobile Swipe / Tap Area Background */}
            <div className="absolute inset-0 z-40 sm:hidden" onClick={closeLightbox}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
