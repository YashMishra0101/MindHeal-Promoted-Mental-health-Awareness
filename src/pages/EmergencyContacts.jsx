//

import React from "react";
import { motion } from "framer-motion";
import Footer from "../component/Footer";

const EmergencyContacts = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-purple-200 min-h-screen min-w-full p-6">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Emergency Contacts
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 cursor-pointer">
          {contactSections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-[0px_4px_15px_rgba(128,0,128,0.4)] transition-shadow duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 6px 20px rgba(75, 0, 130, 0.6)",
              }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>
              <ul className="list-disc list-inside">
                {section.contacts.map((contact, idx) => (
                  <li key={idx} className="mb-2">
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="text-purple-600 hover:text-purple-800 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.name}
                      </a>
                    ) : (
                      <>
                        <strong>{contact.name}:</strong>{" "}
                        {contact.phone || "N/A"}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-10 -mb-[1.45rem] -mr-6 -ml-6">
        <Footer />
      </div>
    </div>
  );
};

// Define `contactSections` before using it
const contactSections = [
  {
    title: "National Helplines",
    contacts: [
      {
        name: "National Suicide Prevention Helpline India",
        phone: "9152987821",
      },
      { name: "Vandrevala Foundation", phone: "9999666555" },
      { name: "Sumaitri (Delhi-based)", phone: "011-23389090" },
      { name: "Snehi (Bihar-based)", phone: "9152987821" },
      { name: "AASRA", phone: "91-22-27546669" },
      { name: "Snehi (Kolkata-based)", phone: "033-2474 4704" },
    ],
  },
  {
    title: "Government Websites",
    contacts: [
      {
        name: "Ministry of Health and Family Welfare (MoHFW)",
        link: "https://www.mohfw.gov.in/",
      },
      {
        name: "National Institute of Mental Health and Neurosciences (NIMHANS)",
        link: "https://www.nimhans.ac.in/",
      },
      { name: "Aarogya Setu", link: "https://www.aarogyasetu.gov.in/" },
      { name: "Ministry of Home Affairs (MHA)", link: "https://mha.gov.in/" },
    ],
  },
  {
    title: "Support Organizations",
    contacts: [
      { name: "Sangath", link: "https://sangath.in/" },
      {
        name: "The Better India - List of Mental Health Helplines",
        link: "https://www.thebetterindia.com/168317/india-mental-health-helplines-ngo/",
      },
      { name: "iCALL (TISS)", link: "https://www.icallhelpline.org/" },
      {
        name: "Fortis Healthcare Mental Health",
        link: "https://www.fortishealthcare.com/india/mental-health",
      },
      { name: "MPower - The Centre", link: "https://www.mpower.ind.in/" },
    ],
  },
  {
    title: "Regional Helplines",
    contacts: [
      { name: "Snehi (Mumbai-based)", phone: "022-23804811" },
      {
        name: "COOJ Mental Health Foundation (Goa-based)",
        phone: "0832-2252525",
      },
      { name: "Lifeline Foundation (Kolkata-based)", phone: "033-40447437" },
      { name: "Maithri (Kochi-based)", phone: "0484-2540530" },
      { name: "Saath (Ahmedabad-based)", phone: "079-26305544" },
    ],
  },
  {
    title: "Crisis Text Helplines",
    contacts: [
      {
        name: "Shout (UK-based, 24/7 text support)",
        phone: "Text 'SHOUT' to 85258",
      },
      {
        name: "Crisis Text Line (US-based, 24/7)",
        phone: "Text 'HELLO' to 741741",
      },
      {
        name: "Vandrevala Foundation - Helpline",
        phone: "Text 'VDMHP' to 9999 666 555",
      },
      { name: "iCALL (TISS) - WhatsApp Support", phone: "9152987821" },
    ],
  },
  {
    title: "Online Mental Health Support",
    contacts: [
      { name: "7 Cups - Free Online Therapy", link: "https://www.7cups.com/" },
      {
        name: "Talkspace - Online Counseling",
        link: "https://www.talkspace.com/",
      },
      {
        name: "BetterHelp - Professional Therapy",
        link: "https://www.betterhelp.com/",
      },
      {
        name: "YourDOST - Online Emotional Support",
        link: "https://yourdost.com/",
      },
    ],
  },
];

export default EmergencyContacts;
