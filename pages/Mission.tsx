import React from "react";

const Mission: React.FC = () => {
  return (
    <div className="bg-brand-light py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-10 rounded-lg shadow-2xl">
          <h1 className="text-center text-4xl font-extrabold text-brand-dark sm:text-5xl mb-8 font-serif">
            Our Mission
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="lead">
              In Africa, the loss of a husband often leads to a devastating
              decline in a woman’s quality of life. Widows frequently face
              poverty, social isolation, discrimination, and limited access to
              education and healthcare. These challenges negatively affect their
              well-being and the future of their families.
            </p>
            <blockquote className="border-l-4 border-brand-accent pl-4 italic text-brand-primary">
              Brides of Destiny exists to provide widows with structured
              support, practical resources, and empowerment programs that help
              them rebuild their lives with dignity, hope, and independence.
            </blockquote>
            <p>
              We are dedicated to creating lasting change by addressing the root
              causes of vulnerability. Our approach is holistic, focusing on
              four key pillars of support: Economic Empowerment, Education and
              Training, Health and Wellness, and Community Support.
            </p>
            <p>
              By equipping these resilient women with the skills and confidence
              they need to succeed, we not only honor the sacrifice of their
              husbands but also invest in the stability and prosperity of future
              generations. We strive to create a world where every widow of a
              fallen hero can stand tall, secure in her ability to provide for
              her family and contribute meaningfully to society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
