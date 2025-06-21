import React from 'react';
import { HeroSection } from './HeroSection';
import { CourseOverview } from './CourseOverview';
import { FeatureTags } from './FeatureTags';
import { ContactBanner } from './ContactBanner';
import { TabSection } from './TabSection';
import { CourseCurriculum } from './CourseCurriculum';
import { InstructorProfiles } from './InstructorProfiles';
import { FAQSection } from './FAQSection';

export default function CourseLandingPage() {
  return (
    <div>
      <HeroSection />
      <CourseOverview />
      <FeatureTags />
      <ContactBanner />
      <TabSection />
      <CourseCurriculum />
      <InstructorProfiles />
      <FAQSection />
    </div>
  );
}
