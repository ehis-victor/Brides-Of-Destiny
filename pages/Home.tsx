
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection.tsx';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />

      {/* Mission Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-brand-accent font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-dark sm:text-4xl font-serif">
              A Path to Renewed Hope and Dignity
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              In Africa, the loss of a husband often leads to a devastating decline in a woman’s quality of life. We exist to provide widows with structured support, practical resources, and empowerment programs that help them rebuild their lives.
            </p>
            <div className="mt-6">
              <Link to="/mission" className="text-brand-primary hover:text-brand-accent font-semibold">
                Read our full mission statement &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-brand-primary font-semibold tracking-wide uppercase">Our Programs</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-dark sm:text-4xl font-serif">
              Building Blocks for a Brighter Future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-brand-dark mb-2">Economic Empowerment</h3>
              <p className="text-gray-600">Business and skill-development training to foster self-reliance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-brand-dark mb-2">Education & Training</h3>
              <p className="text-gray-600">Educational support and vocational skills for widows and their children.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-brand-dark mb-2">Health & Wellness</h3>
              <p className="text-gray-600">Access to healthcare services and mental well-being support.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-brand-dark mb-2">Community Support</h3>
              <p className="text-gray-600">Counseling, peer-support systems, and advocacy for widows’ rights.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/programs" className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-dark transition-colors">
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
