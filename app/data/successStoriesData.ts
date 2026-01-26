export type SuccessStory = {
  slug: string;
  clientName: string;
  tagline: string;
  heroImage: string;
  challengeImage?: string;
  solutionImage?: string;
  logo: string;
  stats: Array<{ label: string; value: string }>;
  challenge: string[];
  solution: string[];
};

export const successStories: SuccessStory[] = [
  {
    slug: "ltimindtree",
    clientName: "LTIMindtree",
    tagline: "Building people capability through a long-term learning partnership.",
    heroImage: "/success/lti2.svg",
    challengeImage: "/success/lti1.svg",
    solutionImage: "/success/lti3.svg",
    logo: "/success/lti.svg",
    stats: [
      { label: "Client", value: "LTIMindtree" },
      { label: "Category", value: "Soft Skills | Instructor-Led Training" },
      { label: "Delivery", value: "Campus-to-Corporate | Multi-location" },
      { label: "Duration", value: "4+ Years" },
      { label: "Locations", value: "Pune, Mumbai" },
    ],
    challenge: [
      "Build consistent people capability across multiple delivery locations.",
      "Move beyond one-time training to sustained skill development.",
      "Align soft skills programs with evolving client and business expectations.",
    ],
    solution: [
      "Long-term partnership delivering customized, facilitator-led workshops.",
      "Programs focused on communication, collaboration, and workplace effectiveness.",
      "Consistent delivery across locations aligned to organizational culture.",
    ],
  },
  {
    slug: "persistent",
    clientName: "Persistent",
    tagline: "Strengthening full-stack engineering skills for a global workforce.",
    heroImage: "/success/persistent/per2.svg",
    challengeImage: "/success/persistent/per3.svg",
    solutionImage: "/success/persistent/per4.svg",
    logo: "/success/persistent/per1.svg",
    stats: [
      { label: "Client", value: "Persistent" },
      { label: "Category", value: "Technical Training | Engineering" },
      { label: "Delivery", value: "Multi-track | Role-based" },
      { label: "Scope", value: "Global Engineering Teams" },
    ],
    challenge: [
      "Continuously upskill engineers across rapidly evolving technologies.",
      "Ensure consistency across roles, projects, and experience levels.",
      "Balance certification, hands-on learning, and real-world application.",
    ],
    solution: [
      "Multi-track technical upskilling covering API, cloud, DevOps, and AI.",
      "Hands-on, certification-aligned programs with structured learning paths.",
      "Specialized AI and platform-focused tracks supporting scalable delivery.",
    ],
  },
  {
    slug: "hyundai-mobis",
    clientName: "Hyundai Mobis",
    tagline: "Strengthening leadership capability for managerial excellence.",
    heroImage: "/success/hyundai/hyu2.svg",
    challengeImage: "/success/hyundai/hyu3.svg",
    solutionImage: "/success/hyundai/hyu4.svg",
    logo: "/success/hyundai/hyu1.svg",
    stats: [
      { label: "Client", value: "Hyundai Mobis" },
      { label: "Category", value: "Leadership Development" },
      { label: "Audience", value: "Emerging & Mid-level Managers" },
      { label: "Delivery", value: "Instructor-led | Scenario-based" },
    ],
    challenge: [
      "Develop practical leadership skills aligned with organizational culture.",
      "Improve decision-making and people management capabilities.",
      "Ensure learning translates into day-to-day managerial effectiveness.",
    ],
    solution: [
      "Leadership development program covering communication and decision-making.",
      "Scenario-based learning using real workplace challenges.",
      "Interactive workshops focused on applied leadership behaviors.",
    ],
  },
  {
    slug: "pathkind-labs",
    clientName: "Pathkind Labs",
    tagline: "Enhancing Pathkind Labs through soft skills excellence.",
    logo: "/success/pathkind/pat1.svg",
    heroImage: "/success/pathkind/pat2.svg",
    challengeImage: "/success/pathkind/pat3.svg",
    solutionImage: "/success/pathkind/pat4.svg",
    stats: [
      { label: "Client", value: "Pathkind Labs" },
      { label: "Category", value: "Soft Skills Training" },
      { label: "Reach", value: "220+ Locations" },
      { label: "Delivery", value: "Pan-India | Multi-location" },
    ],
    challenge: [
      "Deliver consistent soft skills training across a large, distributed workforce.",
      "Address varying proficiency levels across regions.",
      "Maintain standardization without losing local relevance.",
    ],
    solution: [
      "Scalable soft skills program balancing customization and standardization.",
      "Structured learning design ensuring uniform outcomes across locations.",
      "Flexible delivery model supporting diverse learner needs.",
    ],
  },
  {
    slug: "gmr-group",
    clientName: "GMR Group",
    tagline: "Driving communication excellence through Generative AI training.",
    logo: "/success/gmr/gmr1.svg",
    heroImage: "/success/gmr/gmr2.svg",
    challengeImage: "/success/gmr/gmr3.svg",
    solutionImage: "/success/gmr/gmr4.svg",
    stats: [
      { label: "Client", value: "GMR Group" },
      { label: "Category", value: "Generative AI | Functional Training" },
      { label: "Audience", value: "Media, Digital & Branding Teams" },
      { label: "Focus", value: "AI-powered Communication" },
    ],
    challenge: [
      "Manage rising content demands across communication channels.",
      "Improve speed and consistency without compromising brand accuracy.",
      "Enable teams to adopt AI responsibly and effectively.",
    ],
    solution: [
      "Customized Generative AI training across communication functions.",
      "Role-specific tracks for media, digital, internal comms, and branding.",
      "Practical AI workflows enabling faster, smarter content creation.",
    ],
  },
  {
    slug: "jet2-travel",
    clientName: "JET2 Travel Technologies",
    tagline: "Scaling data engineering hiring through Interview-as-a-Service.",
    heroImage: "/success/jet/jet2.svg",
    challengeImage: "/success/jet/jet3.svg",
    solutionImage: "/success/jet/jet4.svg",
    logo: "/success/jet/jet1.svg",
    stats: [
      { label: "Client", value: "JET2 Travel Technologies" },
      { label: "Category", value: "Interview-as-a-Service" },
      { label: "Roles", value: "Senior & Leadership Data Roles" },
      { label: "Focus", value: "Quality & Speed of Hiring" },
    ],
    challenge: [
      "Assess senior data roles with depth and consistency.",
      "Reduce internal hiring effort for business-critical positions.",
      "Ensure high-quality, confident hiring decisions.",
    ],
    solution: [
      "Expert-led technical interviews by seasoned industry professionals.",
      "Structured role-specific assessments covering system design and leadership.",
      "Faster, more reliable hiring decisions with reduced internal load.",
    ],
  },
  {
    slug: "krafton",
    clientName: "KRAFTON",
    tagline: "Enabling leadership growth at scale through coaching.",
    heroImage: "/success/krafton/kra2.svg",
    challengeImage: "/success/krafton/kra3.svg",
    solutionImage: "/success/krafton/kra4.svg",
    logo: "/success/krafton/kra1.svg",
    stats: [
      { label: "Client", value: "KRAFTON" },
      { label: "Category", value: "Leadership Coaching" },
      { label: "Format", value: "1:1 & Group Coaching" },
      { label: "Batches", value: "2 Cohorts" },
    ],
    challenge: [
      "Support leaders navigating increasing complexity and growth.",
      "Strengthen decision-making and people leadership capabilities.",
      "Ensure consistent leadership development across cohorts.",
    ],
    solution: [
      "Structured coaching program focused on real leadership challenges.",
      "Guided coaching conversations with actionable frameworks.",
      "Direct application of learning to on-the-job leadership situations.",
    ],
  },
  {
    slug: "aequs",
    clientName: "Aequs",
    tagline: "Modernizing corporate learning with a tailored LMS solution.",
    heroImage: "/success/aequs/aeq2.svg",
    challengeImage: "/success/aequs/aeq3.svg",
    solutionImage: "/success/aequs/aeq4.svg",
    logo: "/success/aequs/aeq1.svg",
    stats: [
      { label: "Client", value: "Aequs" },
      { label: "Category", value: "LMS & eLearning Solutions" },
      { label: "Transformation", value: "Offline to Digital" },
      { label: "Focus", value: "Scalable Learning" },
    ],
    challenge: [
      "Move from offline training to a scalable digital ecosystem.",
      "Enable tracking, accessibility, and centralized learning management.",
      "Develop customized content aligned to employee development needs.",
    ],
    solution: [
      "Implementation of a full-scale Learning Management System.",
      "Custom eLearning modules covering role-based competencies.",
      "Digital-first, learner-centric training experience.",
    ],
  },
  {
    slug: "vip-bags",
    clientName: "VIP Bags",
    tagline: "Enhancing retail customer experience through interactive learning.",
    heroImage: "/success/vip/vip2.svg",
    challengeImage: "/success/vip/vip3.svg",
    solutionImage: "/success/vip/vip4.svg",
    logo: "/success/vip/vip1.svg",
    stats: [
      { label: "Client", value: "VIP Bags" },
      { label: "Category", value: "Retail eLearning" },
      { label: "Audience", value: "Store Attendants" },
      { label: "Focus", value: "Customer Experience" },
    ],
    challenge: [
      "VIP Bags needed an engaging and scalable training solution to upskill store attendants across retail locations.",
      "The objective was to strengthen customer interactions, query handling, and after-sales service consistency, while ensuring store staff possessed strong product knowledge and clear understanding of warranty processes.",
      "Maintaining a brand-aligned customer experience at every touchpoint was critical to upholding trust and service quality.",
    ],
    solution: [
      "iSkillBox designed and delivered an interactive eLearning program tailored specifically for VIP store attendants.",
      "The module covered:",
      "Step-by-step guidance on E-Warranty application processes",
      "Warranty validity conditions and exceptions",
      "Clear explanation of warranty terms and policies for accurate customer communication",
      "Scenario-based conversations demonstrating effective and ineffective communication practices",
      "The program combined clarity, interactivity, and real-world retail scenarios to ensure easy understanding and practical application.",
      "This approach empowered store staff with the right knowledge, confidence, and communication behaviors—enabling a seamless, trustworthy, and brand-consistent customer experience across retail locations.",
    ],
  },
];

export function getSuccessStory(slug: string) {
  return successStories.find((s) => s.slug === slug);
}
