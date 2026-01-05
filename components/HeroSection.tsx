import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[500px] bg-brand-secondary">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/images/hero-shot-african-women-sitting-together.jpg"
          alt="Supportive community"
        />
        <div
          className="absolute inset-0 bg-brand-primary opacity-30"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif">
          Empowering Widows, Building Futures
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
          Providing hope, dignity, and independence to the widows of Nigeria's
          fallen heroes.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <Link
            to="/about"
            className="w-full sm:w-auto inline-block bg-brand-accent border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-opacity-90 sm:px-10 transition-transform transform hover:scale-105"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
