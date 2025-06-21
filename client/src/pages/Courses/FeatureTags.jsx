import React from 'react';

export function FeatureTags() {
  const tags = [
    "Beginner Friendly",
    "Industry Projects",
    "Expert Mentors",
    "Job Assistance",
    "Flexible Schedule",
  ];

  return (
    <section className="px-5 py-0 mx-auto my-10 max-w-[1200px]">
      <div className="flex flex-wrap gap-4 justify-center">
        {tags.map((tag) => (
          <span
            className="px-4 py-2 text-sm font-medium bg-green-700 rounded-3xl text-white"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
