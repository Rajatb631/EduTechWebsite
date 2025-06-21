import React from 'react';

export function ContactBanner() {
  return (
    <section className="flex gap-4 items-center px-5 py-4 mx-auto my-5 bg-green-50 rounded-lg border border-green-700 border-solid max-w-[1200px]">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(235, 34, 34)">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
      <span className="text-sm text-neutral-800">
        <span>For further queries, reach us via Call/WhatsApp at: </span>
        <strong>+91-8130806418</strong>
      </span>
    </section>
  );
}
