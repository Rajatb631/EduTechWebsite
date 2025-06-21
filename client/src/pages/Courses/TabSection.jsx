import React, { useState } from 'react';

export function TabSection() {
  const [activeTab, setActiveTab] = useState("project-learning");

  const tabs = [
    {
      id: "project-learning",
      label: "Project-Based Learning",
    },
    {
      id: "doubt-support",
      label: "24x7 Doubt Support",
    },
    {
      id: "expert-mentors",
      label: "Expert Mentors",
    },
  ];

  function toggleTab(tabName) {
    setActiveTab(tabName);
  }

  return (
    <section className="px-5 py-0 mx-auto my-20 max-w-[1200px]">
      <h2 className="mb-12 text-3xl text-center font-bold text-neutral-800">
        What Sets Us Apart
      </h2>

      <div className="flex justify-center mb-10 border-b border-solid border-b-gray-200">
        {tabs.map((tab) => (
          <button
            className="px-8 py-4 text-base font-medium cursor-pointer border-none bg-transparent"
            role="tab"
            key={tab.id}
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => toggleTab(tab.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleTab(tab.id);
              }
            }}
            style={{
              borderBottom: activeTab === tab.id ? "3px solid rgb(47, 141, 70)" : "3px solid transparent",
              color: activeTab === tab.id ? "rgb(47, 141, 70)" : "rgb(108, 117, 125)",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-16 items-center grid-cols-[1fr_1fr] max-md:gap-8 max-md:grid-cols-[1fr]">
        <div>
          {activeTab === "project-learning" && (
            <div id="tabpanel-project-learning" role="tabpanel" aria-labelledby="tab-project-learning">
              <h3 className="mb-5 text-2xl font-bold">Learn by Building Real Projects</h3>
              <p className="text-base leading-relaxed text-gray-500">
                Work on industry-relevant projects including recommendation systems, computer vision applications,
                and natural language processing solutions. Build a portfolio that showcases your skills to potential employers.
              </p>
            </div>
          )}

          {activeTab === "doubt-support" && (
            <div id="tabpanel-doubt-support" role="tabpanel" aria-labelledby="tab-doubt-support">
              <h3 className="mb-5 text-2xl font-bold">Round-the-Clock Support</h3>
              <p className="text-base leading-relaxed text-gray-500">
                Get instant help whenever you're stuck. Our dedicated support team and community of learners
                ensure you never feel alone in your learning journey.
              </p>
            </div>
          )}

          {activeTab === "expert-mentors" && (
            <div id="tabpanel-expert-mentors" role="tabpanel" aria-labelledby="tab-expert-mentors">
              <h3 className="mb-5 text-2xl font-bold">Learn from Industry Experts</h3>
              <p className="text-base leading-relaxed text-gray-500">
                Our instructors are working professionals from top tech companies with years of real-world
                experience in AI and machine learning.
              </p>
            </div>
          )}
        </div>

        <div>
          <img
            alt="Learning Experience"
            src="https://images.pexels.com/photos/7869084/pexels-photo-7869084.jpeg"
            className="object-cover overflow-hidden w-full h-auto rounded-xl aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
