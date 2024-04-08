import React, { useState, useEffect } from "react";
import chickentikka from "../assets/chicken-tikka.jpg";
import chickenkorma from "../assets/chicken-korma.jpg";
import pizza from "../assets/pizz.jpg";
import fish from "../assets/fish.jpg";

function Home() {
  const images = [chickentikka, chickenkorma, pizza, fish];
  const product = ["Chicken Tikka", "Chicken Korma", "Pizza", "Fish"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      <div
        className="w-full h-80 bg-cover flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}>
        <div className="absolute text-center text-white">
          <h3 className="text-3xl font-bold mb-2">
            {product[currentImageIndex]}
          </h3>
          <p className="text-lg">
            Martini - Flavors of India, Right to Your Plate!
          </p>
          <button className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md">
            Order Now
          </button>
        </div>
      </div>

      <div className="w-full p-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              Martini - Flavors of India, Right to Your Plate!
            </h3>
            <p className="text-gray-700">
              Embark on a vibrant culinary journey at Martini - Flavors of
              India, where every dish is a celebration of India's rich tapestry
              of flavors. Nestled in the heart of the city, our restaurant
              offers an exquisite dining experience that transports you to the
              colorful streets of India with just one bite. From the fiery
              spices of the North to the tangy zest of the South, our expert
              chefs craft authentic Indian dishes with a contemporary twist, all
              served in a warm, inviting atmosphere. Whether you're craving the
              creamy goodness of a Butter Chicken, the robust flavors of a Lamb
              Rogan Josh, or the tangy punch of a Paneer Tikka, Martini welcomes
              you to explore the diverse and delightful tastes of India, right
              on your plate.
            </p>
          </div>
          <div className="w-50 md:w-1/4">
            <img src="Martini.png" alt="martini" className="w-50 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 py-8">
        <div className="w-full max-w-screen-lg mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Our Special Dishes:
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-4/5 md:w-1/3 mx-2 mb-4 md:mb-0">
              <img
                src={chickenkorma}
                alt="chicken korma"
                className="w-full rounded-lg mb-2"
              />
              <p className="text-lg font-semibold mb-2">Chicken Korma</p>
              <button className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md">
                Order Now
              </button>
            </div>
            <div className="w-4/5 md:w-1/3 mx-2 mb-4 md:mb-0">
              <img src={fish} alt="fish" className="w-full rounded-lg mb-2" />
              <p className="text-lg font-semibold mb-2">Fish Fry</p>
              <button className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md">
                Order Now
              </button>
            </div>
            <div className="w-4/5 md:w-1/3 mx-2 mb-4 md:mb-0">
              <img
                src={chickentikka}
                alt="chicken tikka"
                className="w-full rounded-lg mb-2"
              />
              <p className="text-lg font-semibold mb-2">Chicken Tikka</p>
              <button className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
