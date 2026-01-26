import { notFound } from "next/navigation";
import SuccessStoryHero from "../../src/component/success/SuccessStoryHero";
import SuccessStoryBody from "../../src/component/success/SuccessStoryBody";
import { getSuccessStory, successStories } from "../../data/successStoriesData";
import { getSVGContent } from "../../utils/svgUtils";

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

  const logoContent = story.logo ? getSVGContent(story.logo) : null;
  const heroImageContent = story.heroImage
    ? getSVGContent(story.heroImage)
    : null;
  const challengeImageContent = story.challengeImage
    ? getSVGContent(story.challengeImage)
    : null;
  const solutionImageContent = story.solutionImage
    ? getSVGContent(story.solutionImage)
    : null;

  return (
    <div className="bg-white">
      <SuccessStoryHero
        title={story.clientName}
        subtitle={story.tagline}
        logoContent={logoContent || undefined}
        logoPath={logoContent ? undefined : story.logo}
        imageContent={heroImageContent || undefined}
        imagePath={heroImageContent ? undefined : story.heroImage}
        stats={story.stats}
      />
      <SuccessStoryBody
        stats={story.stats}
        challenge={story.challenge}
        solution={story.solution}
        challengeImageContent={challengeImageContent || undefined}
        solutionImageContent={solutionImageContent || undefined}
      />
    </div>
  );
}

