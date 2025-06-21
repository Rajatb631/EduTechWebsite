import React, { useState } from 'react';

export function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      question: "Do I need prior programming experience?",
      answer: "No prior programming experience is required. We start with Python basics and gradually build up to advanced AI concepts.",
    },
    {
      question: "What is the duration of the course?",
      answer: "The complete program is 6 months long with 150+ hours of live classes and additional self-paced learning materials.",
    },
    {
      question: "Will I get job placement assistance?",
      answer: "Yes, we provide comprehensive job placement support including resume building, interview preparation, and direct connections with hiring partners.",
    },
    {
      question: "What tools and technologies will I learn?",
      answer: "You'll learn Python, TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Jupyter Notebooks, and various cloud platforms for ML deployment.",
    },
    {
      question: "Is the certification industry-recognized?",
      answer: "Yes, you'll receive certificates from both GeeksforGeeks and IBM, which are widely recognized in the industry.",
    },
  ];

  function toggleFAQ(index) {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  }

  return (
    <section className="px-5 py-0 mx-auto my-20 max-w-[1200px]">
      <h2 className="mb-12 text-3xl text-center font-bold text-neutral-800">
        Frequently Asked Questions
      </h2>

      <div className="mx-auto my-0 max-w-[800px]">
        {faqs.map((faq, index) => (
          <div
            className="overflow-hidden mb-4 rounded-lg border border-gray-200 border-solid"
            key={index}
          >
            <button
              className="flex justify-between items-center p-5 w-full text-base font-medium text-left cursor-pointer border-none bg-white"
              aria-expanded={expandedFAQ === index}
              aria-controls={`faq-content-${index}`}
              onClick={() => toggleFAQ(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleFAQ(index);
                }
              }}
            >
              <span>{faq.question}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="rgb(108, 117, 125)"
                className="transition-transform duration-[0.3s] ease-[ease]"
                style={{
                  transform: expandedFAQ === index ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>

            {expandedFAQ === index && (
              <div
                className="px-5 pt-0 pb-5 text-sm leading-relaxed text-gray-500 bg-gray-50"
                id={`faq-content-${index}`}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
