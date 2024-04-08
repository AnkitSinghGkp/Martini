import React from "react";

function About() {
  return (
    <div>
      <div id="about" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  About me
                </h2>

                <p>
                  Embark on a vibrant culinary journey at Martini - Flavors of
                  India, where every dish is a celebration of India's rich
                  tapestry of flavors. Nestled in the heart of the city, our
                  restaurant offers an exquisite dining experience that
                  transports you to the colorful streets of India with just one
                  bite. From the fiery spices of the North to the tangy zest of
                  the South, our expert chefs craft authentic Indian dishes with
                  a contemporary twist, all served in a warm, inviting
                  atmosphere. Whether you're craving the creamy goodness of a
                  Butter Chicken, the robust flavors of a Lamb Rogan Josh, or
                  the tangy punch of a Paneer Tikka, Martini welcomes you to
                  explore the diverse and delightful tastes of India, right on
                  your plate.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3">
          <img
            className="h-full w-full object-cover object-top sm:h-auto md:h-auto lg:w-auto lg:h-auto"
            src="Martini.png"
            alt=""
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
