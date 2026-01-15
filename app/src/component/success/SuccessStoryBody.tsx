type Props = {
  stats?: Array<{ label: string; value: string }>;
  challenge: string[];
  solution: string[];
};

export default function SuccessStoryBody({ stats, challenge, solution }: Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* The Challenge */}
        <div className="flex gap-20">

        <div>
          <h2 className="text-xl sm:text-4xl font-semibold text-gray-900 flex items-center gap-2">
            <span>The Challenge</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-xl text-gray-700 ">
            {challenge.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt=""
                width={420}
                height={360}
                className="w-full max-w-md md:max-w-xl h-auto"
                priority
              />
            ) : null}

        </div>

        {/* The iSkillBox Solution */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <span className="text-2xl">{"\u{1F4A1}"}</span>
            <span>The iSkillBox Solution</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            {solution.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>

        {stats?.length ? (
          <div className="mt-10 border-t border-gray-200 pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  {s.label}
                </div>
                <div className="text-gray-900 font-medium">{s.value}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

