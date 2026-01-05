
import React from 'react';

const Impact: React.FC = () => {
  const stats = [
    { value: '500+', label: 'Women Empowered' },
    { value: '1200+', label: 'Children Supported' },
    { value: '85%', label: 'Increased Family Income' },
    { value: '30+', label: 'New Businesses Started' },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-brand-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl font-serif">
            Our Lasting Impact
          </h1>
          <p className="mt-4 text-xl text-gray-200">
            Measuring our success through transformed lives and empowered communities.
          </p>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white text-center p-8 rounded-lg shadow-md">
                <p className="text-5xl font-bold text-brand-primary">{stat.value}</p>
                <p className="mt-2 text-lg font-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-12 font-serif">Stories of Change</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Story 1 */}
            <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <img src="https://picsum.photos/400/400?random=10" alt="Portrait of a beneficiary" className="w-full md:w-1/3 h-64 md:h-full object-cover"/>
              <div className="p-8">
                <blockquote className="text-xl italic text-gray-700">
                  "Before joining the program, I felt lost. Now, I run my own tailoring business, and I can send all my children to school. I have found my strength again."
                </blockquote>
                <p className="mt-4 font-semibold text-brand-primary">- Adeola, Program Graduate</p>
              </div>
            </div>
            {/* Story 2 */}
            <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <img src="https://picsum.photos/400/400?random=11" alt="Portrait of a beneficiary" className="w-full md:w-1/3 h-64 md:h-full object-cover"/>
              <div className="p-8">
                <blockquote className="text-xl italic text-gray-700">
                  "The community support group was my lifeline. Sharing my story with women who understood gave me the courage to heal and build a new life for my family."
                </blockquote>
                <p className="mt-4 font-semibold text-brand-primary">- Chiamaka, Community Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
