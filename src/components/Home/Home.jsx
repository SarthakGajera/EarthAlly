import React from "react";
import img4 from "../../assets/Home4.gif";
import img3 from "../../assets/Home3.gif";
import backgroundImage from "../../assets/bgHome1.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="flex flex-col items-center   px-4 bg-contain  bg-center bg-no-repeat bg-DarkMouth">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-white py-5  ">
          Welcome to
          <span className="bg-gradient-to-r from-lightBrown to-darkBrown text-transparent bg-clip-text">
            {} EarthAlly
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-white max-w-4xl">
          Welcome to EarthAlly, your partner in promoting environmental
          sustainability. Our mission is to empower communities and individuals
          to take meaningful action for a greener planet. Through innovative
          solutions, resources, and a collaborative platform, EarthAlly connects
          you with the tools and knowledge needed to make a positive impact.
          Join us in creating a sustainable future where every action counts and
          every voice is heard. Together, let's be the change our world needs.
        </p>
        <div className="flex justify-center my-10">
        <Link
            to="/StartForFree"
            className="py-3 px-4 mx-3 rounded-md border text-white hover:border-darkBrown"
          >
            Start For Free
          </Link>
         
          <Link
            to="/Documentation"
            className="py-3 px-4 mx-3 rounded-md border text-white hover:border-darkBrown"
          >
            Documentation
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-DarkMouth">
        <img
          src={img3}
          alt=""
          className="w-96 h-auto mx-10 border border-green-500"
        />
        <h3 className="mt-4 mb-4  text-3xl font-semibold bg-gradient-to-r from-lightBrown to-darkBrown text-transparent bg-clip-text">
          "Earth Needs Allies – Be One."
        </h3>
      </div>
    </div>
  );
}

export default Home;
