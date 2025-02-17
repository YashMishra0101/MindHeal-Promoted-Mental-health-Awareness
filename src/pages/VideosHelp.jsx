import React from "react";
import Footer from "../component/Footer";

function VideosHelp() {
  return (
    <div className="p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8 text-center">
        Videos Help
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="group">
          <iframe
            width="90%"
            height="315"
            src="https://www.youtube.com/embed/nh6iEue0tcU"
            title="Preventing Youth Suicide"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="hover:opacity-80 transition duration-300 rounded-md"
          ></iframe>
          <h3 className="text-xl font-semibold mt-2 mb-3 text-center text-purple-600 mr-16">
            Preventing Youth Suicide
          </h3>
        </div>
        <div className="group">
          <iframe
            width="90%"
            height="315"
            src="https://www.youtube.com/embed/oxx564hMBUI?si=8x4xVMKhQGkxTDom"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="hover:opacity-80 transition duration-300 rounded-md"
          ></iframe>
          <h3 className="text-xl font-semibold mt-2 mb-3 text-center text-purple-600 mr-16">
            Mental Health and Suicide Prevention
          </h3>
        </div>
        <div className="group">
          <iframe
            width="90%"
            height="315"
            src="https://www.youtube.com/embed/iCvmsMzlF7o"
            title="The Power of Vulnerability | Brené Brown"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="hover:opacity-80 transition duration-300 rounded-md"
          ></iframe>
          <h3 className="text-xl font-semibold mt-2 mb-3 text-center text-purple-600 mr-16">
            The Power of Vulnerability | Brené Brown
          </h3>
        </div>
        <div className="group">
          <iframe
            width="90%"
            height="315"
            src="https://www.youtube.com/embed/rkZl2gsLUp4?si=EVSV_9e1U2Hso_ld"
            title="The Power of Vulnerability | Brené Brown"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="hover:opacity-80 transition duration-300 rounded-md"
          ></iframe>
          <h3 className="text-xl font-semibold mt-2 mb-3 text-center text-purple-600 mr-16">
            How to manage your mental health | Leon Taylor | TEDxClapham
          </h3>
        </div>
        <div className="group">
          <iframe
            width="90%"
            height="315"
            src="https://www.youtube.com/embed/i7eE5G5Baps"
            title="Suicide Prevention: You are not alone"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="hover:opacity-80 transition duration-300 rounded-md"
          ></iframe>
          <h3 className="text-xl font-semibold mt-2 mb-3 text-center text-purple-600 mr-16">
            Suicide Prevention: You are not alone
          </h3>
        </div>
        <div className="group">
          <iframe
            width="90%"
            height="315"
            src="https://www.youtube.com/embed/Hy4yby7ZAd0?si=meOOFnY1oVIIRo6A"
            title="Breaking the Silence About Suicide | Allison Milner"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="hover:opacity-80 transition duration-300 rounded-md"
          ></iframe>
          <h3 className="text-xl font-semibold mt-2 mb-3 text-center text-purple-600 mr-16">
            Breaking the Silence About Suicide | Allison Milner
          </h3>
        </div>
        <div className="group">
          <iframe
            width="90%"
            height="315"
            src="https://www.youtube.com/embed/pjMz2wxgWY8?si=OTHllvO8vz8kPew5"
            title="Your Title Here"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="hover:opacity-80 transition duration-300 rounded-md"
          ></iframe>
          <h3 className="text-xl font-semibold mt-2 mb-3 text-center text-purple-600 mr-16">
          STAY STRONG. STAY FOCUSED.
          </h3>
        </div>
        <div className="group">
          <iframe
            width="90%"
            height="315"
            src="https://www.youtube.com/embed/HwLK9dBQn0g?si=pWyj3VnDP_UWUSTK"
            title="THE POWER OF POSITIVITY"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="hover:opacity-80 transition duration-300 rounded-md"
          ></iframe>
          <h3 className="text-xl font-semibold mt-2 mb-3 text-center text-purple-600 mr-16">
          THE POWER OF POSITIVITY 
          </h3>
        </div>
        <div className="group">
          <iframe
            width="90%"
            height="315"
            src="https://www.youtube.com/embed/ug8iQVwDghU?si=gSiYJqmIGhogS0FS"
            title="Your Title Here"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="hover:opacity-80 transition duration-300 rounded-md"
          ></iframe>
          <h3 className="text-xl font-semibold mt-2 mb-3 text-center text-purple-600 mr-16">
            You Can Do It | Don't Give Up
          </h3>
        </div>
      </div>
      <div className="-mb-4 mt-16">
        <Footer/>
      </div>
    </div>
  );
}

export default VideosHelp;
