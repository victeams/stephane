import React from 'react';

export default function VideoPresentation() {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4 text-[#0f380f]">Shop Preview</h2>
      <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-[#0f380f]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://youtu.be/WrX63l0Lzns?t=5"
          title="Shop Presentation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}