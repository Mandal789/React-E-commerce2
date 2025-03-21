import React from "react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className=" body-font ">
      <div className=" container mx-auto flex px-10 py-10 md:flex-row flex-col items-center gap-5">
        <div className="  lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900 capitalize text-justify ">
            <br className="hidden lg:inline-block capitalize" />
            <p className="text-purple-500"> Best Deals shop here.... 👋</p>

            <p className=" text-2xl text-purple-500 mt-2">
              welcome to my store{" "}
            </p>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-justify font-serif ">
            If shopping doesn't make you happy then you're in the wrong shop
            Shop here Copper mug try-hard pitchfork pour-over freegan heirloom
            neutra air plant cold-pressed tacos poke beard tote bag. Heirloom
            echo park mlkshk tote bag selvage hot chicken authentic tumeric
            truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded ml-20"
            style={{width:'85%'}}
            alt="Hero"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazIydXkxcGJvbHNkMWIzdXA2eTgyeW03MmFkNnF6dWNxb2N4dGFydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QAVfJ35dd0GT5v1mCZ/giphy.gif "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
