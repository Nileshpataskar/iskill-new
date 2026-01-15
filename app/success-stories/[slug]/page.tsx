import { notFound } from "next/navigation";
import SuccessStoryHero from "../../src/component/success/SuccessStoryHero";
import SuccessStoryBody from "../../src/component/success/SuccessStoryBody";
import { getSuccessStory, successStories } from "../../data/successStoriesData";

export function generateStaticParams() {
  return successStories.map((s) => ({ slug: s.slug }));
}

export default async function SuccessStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getSuccessStory(slug);
  if (!story) return notFound();

  return (
    <div className="bg-white">
      <SuccessStoryHero
        title={story.clientName}
        subtitle={story.tagline}
        logoSrc={story.logo}
        imageSrc={story.heroImage}
        stats={story.stats}
      />
      <SuccessStoryBody
        stats={story.stats}
        challenge={story.challenge}
        solution={story.solution}
      />
    </div>
  );
}

