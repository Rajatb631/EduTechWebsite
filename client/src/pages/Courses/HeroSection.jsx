import React from 'react';
import './HeroSection.css';
export function HeroSection() {
  return (
    <section className="relative px-0 pt-10 pb-16 text-white">
      <div className="px-5 py-0 mx-auto my-0 max-w-[1200px]">
        <nav className="mb-5 text-sm opacity-90">
          <a href="#" className="no-underline black-txt text-white">
            All Courses
          </a>
          <span className="mx-2 my-0 black-txt">/</span>
          <span className='black-txt'>AI & Machine Learning</span>
        </nav>
        <h1 className="mb-5 black-txt text-4xl leading-tight font-bold max-sm:text-3xl">
          Complete AI & Machine Learning Mastery Program
        </h1>
        <div className="flex flex-wrap gap-5 items-center mb-8">
          <span className="px-3 black-txt py-1 text-xs bg-red-600 rounded-3xl font-bold">
            LIVE COURSE
          </span>
          <div className="flex gap-1.5 items-center">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm">4.8 (2,847 reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
