import React from 'react';
import AboutImage from "../assets/about.png";
import Footer from '../component/Footer';


const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6 text-center">About Us</h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img src={AboutImage} alt="About Us" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:ml-6">
          <p className="text-gray-700 mb-4">
            At SafeSpace, our mission is to provide a safe and supportive environment for individuals struggling with mental health challenges. We understand that seeking help can be difficult, which is why we've created a platform where you can find resources, connect with others, and access professional support.
          </p>
          <p className="text-gray-700 mb-4">
            Our team is dedicated to promoting mental health awareness, breaking the stigma surrounding mental illness, and providing resources to those in need. We believe that everyone deserves access to quality mental health care, and we're committed to making a positive impact in the lives of our community members.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're struggling with anxiety, depression, or thoughts of suicide, you're not alone. SafeSpace is here to support you every step of the way. Together, we can create a safer and healthier world for everyone.
          </p>
        </div>
      </div>
      <div className='mt-10 -mb-8'>
      <Footer/>
      </div>
    </div>
  );
}

export default AboutUs;
