import React from "react";
import Footer from "../component/Footer";

const EmergencyContacts = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8 text-center">
          Emergency Contacts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              National Helplines
            </h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <strong>National Suicide Prevention Helpline India:</strong>{" "}
                9152987821
              </li>
              <li className="mb-2">
                <strong>Vandrevala Foundation:</strong> 9999666555
              </li>
              <li className="mb-2">
                <strong>Sumaitri (Delhi-based):</strong> 011-23389090
              </li>
              <li className="mb-2">
                <strong>Snehi (Bihar-based):</strong> 9152987821
              </li>
              <li className="mb-2">
                <strong>AASRA:</strong> 91-22-27546669
              </li>
              <li className="mb-2">
                <strong>Snehi (Kolkata-based):</strong> 033-2474 4704
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Government Websites
            </h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <a
                  href="https://www.mohfw.gov.in/"
                  className="text-purple-600 hover:text-purple-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ministry of Health and Family Welfare (MoHFW)
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.nimhans.ac.in/"
                  className="text-purple-600 hover:text-purple-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Institute of Mental Health and Neurosciences
                  (NIMHANS)
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.aarogyasetu.gov.in/"
                  className="text-purple-600 hover:text-purple-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aarogya Setu
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://mha.gov.in/"
                  className="text-purple-600 hover:text-purple-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ministry of Home Affairs (MHA)
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Support Organizations
            </h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <a
                  href="https://sangath.in/"
                  className="text-purple-600 hover:text-purple-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sangath
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.thebetterindia.com/168317/india-mental-health-helplines-ngo/"
                  className="text-purple-600 hover:text-purple-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Better India - List of Mental Health Helplines
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.icallhelpline.org/"
                  className="text-purple-600 hover:text-purple-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iCALL (TISS)
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.fortishealthcare.com/india/mental-health"
                  className="text-purple-600 hover:text-purple-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fortis Healthcare Mental Health
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.mpower.ind.in/"
                  className="text-purple-600 hover:text-purple-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MPower - The Centre
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Regional Helplines
            </h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <strong>Snehi (Mumbai-based):</strong> 022-23804811
              </li>
              <li className="mb-2">
                <strong>COOJ Mental Health Foundation (Goa-based):</strong>{" "}
                0832-2252525
              </li>
              <li className="mb-2">
                <strong>Lifeline Foundation (Kolkata-based):</strong>{" "}
                033-40447437
              </li>
              <li className="mb-2">
                <strong>Maithri (Kochi-based):</strong> 0484-2540530
              </li>
              <li className="mb-2">
                <strong>Saath (Ahmedabad-based):</strong> 079-26305544
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 -mb-4">
        <Footer />
      </div>
    </div>
  );
};

export default EmergencyContacts;
