import InlineSVG from "./InlineSVG";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  logoContent?: string | null;
  logoPath?: string;
  imageContent?: string | null;
  imagePath?: string;
  stats?: Array<{ label: string; value: string }>;
};

export default function SuccessStoryHero({
  title,
  subtitle,
  logoContent,
  logoPath,
  imageContent,
  imagePath,
  stats,
}: Props) {
  return (
    <section className="relative bg-[#08a4d3] overflow-hidden h-screen">
      <svg
        className="absolute inset-x-0 top-0 h-full w-full"
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        
        <path
          d="M0,430 C240,500 360,485 480,475 C600,460 720,455 840,448 C960,441 1080,435 1200,430 C1320,425 1380,422 1440,420 L1440,560 L0,560 Z"
          fill="#ffffff"
          opacity="0.98"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-28 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Left: Logo + title + meta */}
          <div className="text-left">
            {logoContent ? (
              <div className="mb-10 flex justify-start items-center">
                <InlineSVG
                  svgContent={logoContent}
                  className="h-fit w-80 object-contain"
                />
              </div>
            ) : logoPath ? (
              <div className="mb-10 flex justify-start items-center">
                <Image
                  src={logoPath}
                  alt={`${title} logo`}
                  width={80}
                  height={80}
                  className="h-fit w-80 object-contain"
                />
              </div>
            ) : null}

           
            <p className="mt-3 text-base sm:text-2xl font-semibold text-white/90 max-w-lg">
              {subtitle}
            </p>

            {stats?.length ? (
              <div className="mt-6 space-y-1 text-xl text-white/90">
                {stats.map((item) => (
                  <p key={item.label}>
                    <span className="font-semibold">{item.label}:</span>{" "}
                    <span>{item.value}</span>
                  </p>
                ))}
              </div>
            ) : null}
          </div>

          {/* Right: Illustration */}
          <div className="flex items-center justify-center">
            {imageContent ? (
              <InlineSVG
                svgContent={imageContent}
                className="w-fit max-w-md md:max-w-xl h-auto"
              />
            ) : imagePath ? (
              <Image
                src={imagePath}
                alt=""
                width={420}
                height={360}
                className="w-fit max-w-md md:max-w-xl h-auto"
                priority
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

