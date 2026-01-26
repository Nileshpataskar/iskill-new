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
        <ul key={`bullets-${keyIndex++}`} className="mt-3 mb-3 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed list-disc pl-5">
          {bulletItems.map((item, idx) => (
            <li key={idx}>{item.trim()}</li>
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
        <h3 key={keyIndex++} className="mt-4 mb-2 text-base sm:text-lg font-semibold text-gray-900">
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
        <p key={keyIndex++} className="mb-3 text-sm sm:text-base text-gray-700 leading-relaxed">
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* The Challenge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 items-center">
          <div>
            <h2 className="text-xl sm:text-4xl font-semibold text-gray-900 flex items-center gap-2">
              <span>The Challenge</span>
            </h2>
            <div className="mt-4 space-y-3 text-sm sm:text-xl text-gray-700">
              {challenge.map((para, idx) => {
                const trimmed = para.trim();
                if (!trimmed) return null;
                return <p key={idx}>{trimmed}</p>;
              })}
            </div>
          </div>

          <div className="flex items-center justify-center">
            {challengeImageContent ? (
              <InlineSVG
                svgContent={challengeImageContent}
                className="w-full max-w-md md:max-w-xl h-auto"
              />
            ) : null}
          </div>
        </div>

        {/* The iSkillBox Solution */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 items-center">
          <div className="order-2 md:order-1 flex items-center justify-center">
            {solutionImageContent ? (
              <InlineSVG
                svgContent={solutionImageContent}
                className="w-full max-w-md md:max-w-xl h-auto"
              />
            ) : null}
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-xl sm:text-4xl font-semibold text-gray-900 flex items-center gap-2">
              <span>The iSkillBox Solution</span>
            </h2>
            <div className="mt-4 text-sm sm:text-base text-gray-700">
              {renderMixedContent(solution)}
            </div>
          </div>
        </div>


      </div>
    </section >
  );
}
