import InlineSVG from "./InlineSVG";
import React from "react";

type Props = {
  stats?: Array<{ label: string; value: string }>;
  challenge: string[];
  solution: string[];
  challengeImageContent?: string;
  solutionImageContent?: string;
};

// Helper function to render mixed content (paragraphs, headings, bullet points)
const renderMixedContent = (items: string[]) => {
  const elements: React.ReactElement[] = [];
  let inBulletList = false;
  let bulletItems: string[] = [];
  let keyIndex = 0;

  const flushBulletList = () => {
    if (bulletItems.length > 0) {
      elements.push(
        <ul key={`bullets-${keyIndex++}`} className="mt-5 mb-6 space-y-3.5 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed list-disc pl-7 marker:text-blue-600 marker:text-lg">
          {bulletItems.map((item, idx) => (
            <li key={idx} className="pl-3 leading-relaxed">{item.trim()}</li>
          ))}
        </ul>
      );
      bulletItems = [];
      inBulletList = false;
    }
  };

  items.forEach((item, index) => {
    const trimmed = item.trim();

    // Skip empty strings but flush bullet list if we were in one
    if (!trimmed) {
      if (inBulletList) {
        flushBulletList();
      }
      return;
    }

    // Check if this looks like a heading (ends with colon and is relatively short)
    const isHeading = trimmed.endsWith(':') && trimmed.length < 100;

    // Check if this looks like a bullet point (short, doesn't end with period, or starts with capital letter and is concise)
    const isBulletPoint =
      trimmed.length < 150 &&
      !trimmed.endsWith('.') &&
      !trimmed.endsWith(':') &&
      (trimmed.length < 80 || /^[A-Z][^.]{0,100}$/.test(trimmed));

    // Check if previous item was a heading - if so, start bullet list
    if (index > 0 && items[index - 1]?.trim().endsWith(':')) {
      inBulletList = true;
    }

    if (isHeading) {
      flushBulletList();
      elements.push(
        <h3 key={keyIndex++} className="mt-7 mb-4 text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          {trimmed}
        </h3>
      );
    } else if (isBulletPoint && (inBulletList || index > 0 && items[index - 1]?.trim().endsWith(':'))) {
      // Add to bullet list
      bulletItems.push(trimmed);
      inBulletList = true;
    } else {
      // Regular paragraph
      flushBulletList();
      elements.push(
        <p key={keyIndex++} className="mb-5 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          {trimmed}
        </p>
      );
    }
  });

  // Flush any remaining bullet list
  flushBulletList();

  return elements;
};

export default function SuccessStoryBody({
  stats,
  challenge,
  solution,
  challengeImageContent,
  solutionImageContent,
}: Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-4">
        {/* The Challenge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-8 lg:gap-20 xl:gap-28 items-start mb-2 sm:mb-2 md:mb-2">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                The Challenge
              </h2>
            </div>
            <div className="mt-8 space-y-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              {challenge.map((para, idx) => {
                const trimmed = para.trim();
                if (!trimmed) return null;
                return (
                  <p key={idx} className="leading-relaxed text-gray-700">
                    {trimmed}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center md:sticky md:top-24">
            {challengeImageContent ? (
              <InlineSVG
                svgContent={challengeImageContent}
                className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto drop-shadow-xl"
              />
            ) : null}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8  md:my-20 lg:my-12 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* The iSkillBox Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-28 items-start">
          <div className="order-2 md:order-2 flex items-center justify-center md:sticky md:top-24">
            {solutionImageContent ? (
              <InlineSVG
                svgContent={solutionImageContent}
                className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto drop-shadow-xl"
              />
            ) : null}
          </div>

          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                The iSkillBox Solution
              </h2>
            </div>
            <div className="mt-8 text-base sm:text-lg md:text-xl text-gray-700">
              {renderMixedContent(solution)}
            </div>
          </div>
        </div>


      </div>
    </section >
  );
}
