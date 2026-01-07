import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-brand-dark sm:text-5xl font-serif">
            About Brides of Destiny
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Restoring hope and empowering the widows of our nation's heroes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/images/Team working together.webp"
              alt="Team working together"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-4 font-serif">
              Our Vision
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              We envision a society where every widow of a fallen brethren or
              hero is treated with dignity, has the resources to achieve
              independence, and can build a secure and prosperous future for
              herself and her children. Our goal is to transform personal
              tragedy into a story of resilience and triumph.
            </p>
            <h2 className="text-3xl font-bold text-brand-dark mb-4 font-serif">
              Our History
            </h2>
            <p className="text-gray-600 text-lg">
              Founded on the principles of compassion and service, Brides of
              Destiny was established to address the profound challenges faced
              by the widows of gallant soldiers and police force personnel who
              made the ultimate sacrifice for Nigeria, especially those at the
              forefront of the nations war against terrorism in the far north.
              We are committed to honoring their memory by supporting the
              families they left behind.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-10 font-serif">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-brand-primary mb-2">
                Dignity
              </h3>
              <p className="text-gray-600">
                We believe in upholding the inherent worth and dignity of every
                widow, ensuring they are treated with respect and honor.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-brand-primary mb-2">
                Empowerment
              </h3>
              <p className="text-gray-600">
                We provide the tools, training, and support necessary for widows
                to take control of their lives and achieve economic
                independence.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-brand-primary mb-2">
                Community
              </h3>
              <p className="text-gray-600">
                We foster a strong, supportive community where widows can find
                solidarity, share experiences, and heal together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
