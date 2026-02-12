import React from "react";
import bannerImage from "../assets/banner-1.png";
import pImage from "../assets/p.png";

const Hero = () => {
  return (
    <div className="bg-[#004F44]">
      <div className="my-auto h-[calc(100vh-5rem)] container  mx-auto flex items-center justify-between">
        {/* left */}
        <div>
          <h2>Happiness blooms from within</h2>
          <p>
            Our environment, the world in which we live and work, is a mirror of
            our attitudes and expectations.
          </p>
        </div>

        {/* right */}
        <div className="relative">
          <div className="flex items-center justify-center gap-1">
            <div>
              <img
                src={bannerImage}
                alt="Girl in a jacket"
                className="h-[257px] w-[222px] object-cover mb-1"
              />
              <img
                src={bannerImage}
                alt="Girl in a jacket"
                className="h-[257px] w-[222px] object-cover"
              />
            </div>

            <div className="relative">
              <img
                src={bannerImage}
                alt="Girl in a jacket"
                className="h-[520px] w-full object-contain"
              />

              <button className="absolute left-10 top-10 text-accent">
                Featured
              </button>
              <h3 className="absolute left-7 bottom-30 text-accent">
                Anthurium Flower
              </h3>
              <p className="absolute  left-7 bottom-16 text-accent">
                The flower of human being. It has meaningful of fact that the
                plant always grow whatever season and weather...
              </p>

              <button className="absolute left-7  bottom-4 text-accent">
                READ MORE
              </button>
            </div>
          </div>
          <img
            className="absolute -bottom-8 -left-10 -z-10"
            src={pImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
