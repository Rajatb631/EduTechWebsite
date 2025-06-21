import React from 'react';

export function InstructorProfiles() {
  const instructors = [
    {
      name: "Dr. Sarah Chen",
      title: "Senior AI Researcher at Google",
      image: "https://images.pexels.com/photos/5332246/pexels-photo-5332246.jpeg",
      experience: "8+ years in AI/ML",
    },
    {
      name: "Rajesh Kumar",
      title: "Lead Data Scientist at Microsoft",
      image: "https://images.pexels.com/photos/7869071/pexels-photo-7869071.jpeg",
      experience: "10+ years in Data Science",
    },
    {
      name: "Emily Rodriguez",
      title: "ML Engineer at Tesla",
      image: "https://images.pexels.com/photos/3862600/pexels-photo-3862600.jpeg",
      experience: "6+ years in ML Engineering",
    },
    {
      name: "David Park",
      title: "AI Consultant & Entrepreneur",
      image: "https://images.pexels.com/photos/5648105/pexels-photo-5648105.jpeg",
      experience: "12+ years in AI Strategy",
    },
  ];

  return (
    <section className="px-0 py-20 bg-gray-50">
      <div className="px-5 py-0 mx-auto my-0 max-w-[1200px]">
        <h2 className="mb-12 text-3xl text-center font-bold text-neutral-800">
          Meet Your Instructors
        </h2>

        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {instructors.map((instructor, index) => (
            <div
              className="p-8 text-center rounded-xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
              key={index}
            >
              <img
                className="object-cover overflow-hidden mx-auto mt-0 mb-5 rounded-full aspect-square h-[120px] w-[120px]"
                src={instructor.image}
                alt={instructor.name}
              />
              <h4 className="mb-2 text-xl font-bold text-neutral-800">
                {instructor.name}
              </h4>
              <p className="mb-2 text-sm font-medium text-sky-600">
                {instructor.title}
              </p>
              <p className="m-0 text-xs text-gray-500">
                {instructor.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
