import React, { useState } from 'react';

export function CourseOverview() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  function toggleDescription() {
    setShowFullDescription(!showFullDescription);
  }

  const features = [
    "150+ Hours of Live Classes",
    "50+ Hands-on Projects",
    "Industry Mentorship",
    "Job Placement Support",
    "Lifetime Access to Materials",
    "24/7 Doubt Resolution",
  ];

  return (
    <section className="relative z-10 px-5 py-0 mx-auto -mt-10 mb-0 max-w-[1200px]">
      <div className="grid overflow-hidden rounded-xl bg-white grid-cols-[1fr_400px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] max-md:grid-cols-[1fr]">
        <div className="p-10">
          <div className="flex overflow-hidden relative justify-center items-center mb-8 bg-gray-200 rounded-lg aspect-[16/9]">
            <img
              alt="AI/ML Course Preview"
              src="https://images.pexels.com/photos/18524070/pexels-photo-18524070.jpeg"
              className="object-cover overflow-hidden aspect-square size-full"
            />
            <div className="flex absolute top-2/4 left-2/4 justify-center items-center rounded-full -translate-x-2/4 -translate-y-2/4 cursor-pointer bg-white bg-opacity-90 h-[60px] w-[60px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7z" fill="rgb(47, 141, 70)" />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 mb-8">
            <div className="flex gap-2 items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(108, 117, 125)">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-sm text-gray-500">6 Months Duration</span>
            </div>
            <div className="flex gap-2 items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(108, 117, 125)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm text-gray-500">Beginner to Advanced</span>
            </div>
            <div className="flex gap-2 items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(108, 117, 125)">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z" />
              </svg>
              <span className="text-sm text-gray-500">Certificate Included</span>
            </div>
          </div>

          <p className="mb-5 text-base leading-relaxed text-neutral-800">
            <span>
              Master the fundamentals and advanced concepts of Artificial Intelligence and Machine Learning.
              Build real-world projects, work with industry datasets, and learn from expert practitioners.
            </span>
            {showFullDescription && (
              <span>
                This comprehensive program covers everything from Python programming and statistics to deep learning
                and neural networks. You'll gain hands-on experience with popular ML libraries like TensorFlow,
                PyTorch, and Scikit-learn while building a portfolio of impressive projects.
              </span>
            )}
          </p>

          <button
            className="mb-8 text-sm text-sky-600 cursor-pointer border-none bg-transparent"
            onClick={toggleDescription}
          >
            {showFullDescription ? "Read Less" : "Read More"}
          </button>

          <div className="p-5 mb-8 bg-gray-200 rounded-lg">
            <div className="flex gap-2.5 items-center mb-2.5">
              <img
                alt="IBM Logo"
                src="https://images.pexels.com/photos/16294304/pexels-photo-16294304.jpeg"
                className="object-cover overflow-hidden w-10 h-10 aspect-square"
              />
              <span className="text-base font-bold">IBM Certification Available</span>
            </div>
            <p className="m-0 text-sm text-gray-500">
              Get industry-recognized certification from IBM upon course completion
            </p>
          </div>
        </div>

        <div className="flex flex-col px-8 py-10 bg-gray-50">
          <div className="mb-8">
            <div className="mb-1.5 text-3xl font-bold text-neutral-800">₹15,999</div>
            <div className="text-lg text-gray-500 line-through">₹25,999</div>
            <div className="text-sm text-green-700 font-bold">38% OFF - Limited Time</div>
          </div>

          <button className="px-5 py-4 mb-4 text-base bg-green-700 rounded-md cursor-pointer border-none font-bold text-white">
            Enroll Now
          </button>

          <button className="px-5 py-3 mb-8 text-base text-sky-600 bg-transparent rounded-md border-2 border-sky-600 border-solid cursor-pointer font-bold">
            Access Free Demo
          </button>

          <div className="pt-5 border-t border-solid border-t-gray-200">
            <h4 className="mb-4 text-base font-bold">What's Included:</h4>
            <ul className="p-0 m-0">
              {features.map((item, index) => (
                <li className="flex gap-2.5 items-center mb-2.5 text-sm" key={index}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgb(47, 141, 70)">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
