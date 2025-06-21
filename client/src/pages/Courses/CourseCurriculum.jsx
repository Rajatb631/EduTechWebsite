import React, { useState } from 'react';

export function CourseCurriculum() {
  const [expandedCurriculum, setExpandedCurriculum] = useState(null);

  const modules = [
    {
      number: "01",
      title: "Python Programming Fundamentals",
      topics: [
        "Variables & Data Types",
        "Control Structures",
        "Functions & Modules",
        "Object-Oriented Programming",
      ],
    },
    {
      number: "02",
      title: "Mathematics for Machine Learning",
      topics: [
        "Linear Algebra",
        "Statistics & Probability",
        "Calculus Basics",
        "Data Visualization",
      ],
    },
    {
      number: "03",
      title: "Machine Learning Algorithms",
      topics: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Model Evaluation",
        "Feature Engineering",
      ],
    },
    {
      number: "04",
      title: "Deep Learning & Neural Networks",
      topics: [
        "Neural Network Basics",
        "CNN for Computer Vision",
        "RNN for Sequence Data",
        "Transfer Learning",
      ],
    },
    {
      number: "05",
      title: "Advanced AI Topics",
      topics: [
        "Natural Language Processing",
        "Reinforcement Learning",
        "MLOps & Deployment",
        "Ethics in AI",
      ],
    },
  ];

  function toggleCurriculum(index) {
    setExpandedCurriculum(expandedCurriculum === index ? null : index);
  }

  return (
    <section className="px-5 py-0 mx-auto my-20 max-w-[1200px]">
      <h2 className="mb-12 text-3xl text-center font-bold text-neutral-800">
        Course Content
      </h2>

      <div className="mx-auto my-0 max-w-[800px]">
        {modules.map((module, index) => (
          <div
            className="overflow-hidden mb-4 rounded-lg border border-gray-200 border-solid"
            key={index}
          >
            <button
              className="flex gap-5 items-center p-5 w-full cursor-pointer border-none bg-white text-left"
              aria-expanded={expandedCurriculum === index}
              aria-controls={`curriculum-content-${index}`}
              onClick={() => toggleCurriculum(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleCurriculum(index);
                }
              }}
            >
              <div className="flex justify-center items-center w-10 h-10 text-base bg-green-700 rounded-full font-bold text-white">
                {module.number}
              </div>
              <div className="flex-1 text-left">
                <h4 className="m-0 text-lg font-bold">{module.title}</h4>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="rgb(108, 117, 125)"
                className="transition-transform duration-[0.3s] ease-[ease]"
                style={{
                  transform: expandedCurriculum === index ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>

            {expandedCurriculum === index && (
              <div
                className="pt-0 pr-5 pb-5 pl-20 bg-gray-50"
                id={`curriculum-content-${index}`}
              >
                <ul className="pl-5 m-0">
                  {module.topics.map((topic, topicIndex) => (
                    <li className="mb-2 text-sm text-gray-500" key={topicIndex}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="px-8 py-3 text-base text-sky-600 bg-transparent rounded-md border-2 border-sky-600 border-solid cursor-pointer font-bold">
          View Detailed Syllabus
        </button>
      </div>
    </section>
  );
}
