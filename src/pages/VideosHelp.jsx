import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Footer from "../component/Footer";

const videos = [
  {
    id: 1,
    title: "Taking Care Of Yourself | Joel Osteen",
    src: "https://www.youtube.com/embed/1DcCERSuF3g?si=JHdPnRVGRCCWXppY",
  },
  {
    id: 2,
    title: "Preventing Youth Suicide",
    src: "https://www.youtube.com/embed/nh6iEue0tcU",
  },
  {
    id: 3,
    title: "Mental Health and Suicide Prevention",
    src: "https://www.youtube.com/embed/oxx564hMBUI?si=8x4xVMKhQGkxTDom",
  },
  {
    id: 4,
    title: "The Power of Vulnerability | Brene Brown",
    src: "https://www.youtube.com/embed/iCvmsMzlF7o",
  },
  {
    id: 5,
    title: "How to manage your mental health | Leon Taylor | TEDxClapham",
    src: "https://www.youtube.com/embed/rkZl2gsLUp4?si=EVSV_9e1U2Hso_ld",
  },
  {
    id: 6,
    title: "Suicide Prevention: You are not alone",
    src: "https://www.youtube.com/embed/i7eE5G5Baps",
  },
  {
    id: 7,
    title: "Breaking the Silence About Suicide | Allison Milner",
    src: "https://www.youtube.com/embed/Hy4yby7ZAd0?si=meOOFnY1oVIIRo6A",
  },
  {
    id: 8,
    title: "STAY STRONG. STAY FOCUSED.",
    src: "https://www.youtube.com/embed/pjMz2wxgWY8?si=OTHllvO8vz8kPew5",
  },
  {
    id: 9,
    title: "THE POWER OF POSITIVITY",
    src: "https://www.youtube.com/embed/HwLK9dBQn0g?si=pWyj3VnDP_UWUSTK",
  },
  {
    id: 10,
    title: "You Can Do It | Don't Give Up",
    src: "https://www.youtube.com/embed/ug8iQVwDghU?si=gSiYJqmIGhogS0FS",
  },
  {
    id: 11,
    title: "Depression Treatment Options: A Quick-Start Guide",
    src: "https://www.youtube.com/embed/lAdp3nT4BFA?si=oo2KxBrc_ZMX5WWY",
  },
  {
    id: 12,
    title: "How To Be Happy",
    src: "https://www.youtube.com/embed/r4ZdyS6v3qA?si=Lb7LRVf-F6V2RBAc",
  },
  {
    id: 13,
    title: "How to Build Self Confidence",
    src: "https://www.youtube.com/embed/kMtNkJcJn3M?si=m-Tv0QfyCJ0GnYpT",
  },
  {
    id: 14,
    title: "How to overcome Depression",
    src: "https://www.youtube.com/embed/ssKSfQmIoLE?si=tAUCrumMOD5yRijO",
  },
  {
    id: 15,
    title: "How to Love Yourself to the Core | Jen Oliver | TEDx",
    src: "https://www.youtube.com/embed/ZQNk7KVU_6A?si=LTRLe2diUbn4PzBj",
  },
];

function VideosHelp() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-teal-700 via-gray-700 to-orange-700 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-gray-500/10 to-orange-500/10 animate-moveBackground"
        initial={{ x: -100, y: -100 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      ></motion.div>

      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Videos Help 
      </motion.h1>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="group relative bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-teal-500 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              rotate: [0, -2, 2, -2, 0], // Tilt effect
              boxShadow: "0 0 20px rgba(94, 234, 212, 0.6)", // Glow effect
              transition: { duration: 0.5 },
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Video Frame */}
            <iframe
              width="100%"
              height="315"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-t-xl hover:opacity-90 transition-opacity duration-300"
            ></iframe>

            {/* Video Title */}
            <motion.h3
              className="text-xl font-semibold mt-4 mb-6 text-center text-white cursor-pointer px-4"
              whileHover={{ color: "#5EEAD4", scale: 1.05 }} // Teal accent on hover
              transition={{ duration: 0.3 }}
            >
              {video.title}
            </motion.h3>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="-mb-8 mt-12 relative z-10 -mr-8 -ml-8">
        <Footer />
      </div>
    </div>
  );
}

export default VideosHelp;