import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, fireDb } from "../firebase/FirebaseConfig";
import imageOne from "../assets/support.jpeg";
import imageTwo from "../assets/positive.jpeg";
import imagethree from "../assets/imageOne.jpeg";
import imagefour from "../assets/strong.jpeg";
import Footer from "../component/Footer";
import carsoul1 from "../assets/Carousel1.jpg";
import carsoul2 from "../assets/Carousel2.jpg";
import carsoul3 from "../assets/Carousel3.jpg";
import carsoul4 from "../assets/Carousel4.jpg";
import carsoul5 from "../assets/Carousel5.jpg";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 5);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + 5) % 5);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    const fetchUserName = async (userId) => {
      try {
        const userDoc = await getDoc(doc(fireDb, "users", userId));
        if (userDoc.exists()) {
          setUserName(userDoc.data().name);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserName(user.uid);
      } else {
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Carousel started */}
      <div
        id="default-carousel"
        className="relative h-[450px] overflow-hidden -mb-72 md:mb-0 "
        data-carousel="slide"
      >
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="duration-700 ease-in-out absolute w-full flex"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <img
              src={carsoul1}
              className="w-full h-full object-cover -z-10"
              alt="..."
            />
            <img
              src={carsoul3}
              className="w-full h-full object-cover -z-10"
              alt="..."
            />
            <img
              src={carsoul5}
              className="w-full h-full object-cover -z-10"
              alt="..."
            />
            <img
              src={carsoul2}
              className="w-full h-full object-cover -z-10"
              alt="..."
            />
            <img
              src={carsoul4}
              className="w-full object-cover -z-10"
              alt="..."
            />
          </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse hidden md:block">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-black" : "bg-gray-300"
              }`}
              aria-current={index === currentSlide ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          {/* Previous button icon */}
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          {/* Next button icon */}
        </button>
      </div>
      {/* Carousel ends */}
      <header className="text-center lg:mt-10 md:mt-10 mt-2 sm:mt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600">
          {userName ? `${userName}, we care for you.` : "We Care For You"}
        </h1>
        <p className="text-d md:text-lg text-gray-700 mt-4">
          Support is just a call away - You are not alone. We are here for you
          😊❤️{" "}
        </p>
      </header>
      <div className="flex flex-col md:flex-row items-center justify-center p-4 mt-8">
        <div className="w-full md:w-1/2 px-4">
          <section className="text-center md:text-left">
            <h2 className="text-xl md:text-4xl font-semibold text-purple-600 mb-4">
              We're Here to Support You
            </h2>
            <p className="text-gray-700 mb-2 md:text-lg">
              If you're feeling overwhelmed or need someone to talk to, know
              that we're here for you. Our team of dedicated professionals is
              ready to provide support and guidance whenever you need it.
            </p>
            <p className="text-gray-700 md:text-lg">
              Don't hesitate to reach out to us. We believe in the power of
              connection and are committed to helping you navigate through
              life's challenges with compassion and understanding.
            </p>
          </section>
        </div>
        <div className="md:w-[30rem] w-[20rem] px-4">
          <img
            src={imageOne}
            alt="We Are With You"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center p-4 mt-8 mb-5">
        <div className="md:w-[30rem] w-[20rem]  px-4">
          <img
            src={imagefour}
            alt="We Are With You"
            className="w-full h-auto rounded-lg "
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <section className="text-center md:text-left">
            <h2 className="text-xl md:text-4xl font-semibold text-purple-600 mb-4">
              Stay Strong
            </h2>
            <p className="text-gray-700 mb-2 md:text-lg">
              Life can throw unexpected challenges our way, but remember that
              within you lies the strength to overcome anything. Embrace your
              resilience and courage, and know that with each step, you're
              becoming stronger.
            </p>
            <p className="text-gray-700 md:text-lg">
              Surround yourself with positivity, lean on your support system,
              and never lose sight of your goals. We're here to walk this
              journey with you, offering support and encouragement every step of
              the way.
            </p>
          </section>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-4 mt-8">
        <div className="w-full md:w-1/2 px-4">
          <section className="text-center md:text-left">
            <h2 className="text-xl md:text-4xl font-semibold text-purple-600 mb-4">
              Be Positive
            </h2>
            <p className="text-gray-700 mb-2 md:text-lg">
              Life is a journey filled with twists and turns, challenges, and
              moments of joy. It's about embracing the ups and downs, navigating
              through uncertainties, and discovering the strength within
              ourselves.
            </p>
            <p className="text-gray-700 md:text-lg">
              Every experience shapes us, molds us into who we are today.
              Sometimes, we may feel lost or overwhelmed, but it's important to
              remember that we're capable of overcoming anything that comes our
              way.
            </p>
          </section>
        </div>
        <div className="md:w-[30rem] w-[20rem] px-4">
          <img
            src={imageTwo}
            alt="We Are With You"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-4 mt-8">
        <div className="md:w-[30rem] w-[20rem] px-4">
          <img
            src={imagethree}
            alt="We Are With You"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <section className="text-center md:text-left">
            <h2 className="text-xl md:text-4xl font-semibold text-purple-600 mb-4">
              You're Never Alone
            </h2>
            <p className="text-gray-700 mb-2 md:text-lg">
              No matter what challenges you're facing, remember that you're not
              alone. We're here to support you every step of the way. Whether
              you need guidance, a listening ear, or just someone to talk to,
              our team is dedicated to providing a compassionate and
              understanding space for you.
            </p>
            <p className="text-gray-700 md:text-lg">
              Don't hesitate to reach out whenever you need support. Your
              well-being is important to us, and we're committed to helping you
              navigate through any difficulties you may encounter.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
