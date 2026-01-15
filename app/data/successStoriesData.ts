export type SuccessStory = {
  slug: string;
  clientName: string;
  tagline: string;
  heroImage: string;
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
    heroImage: "/contact/hero_new.png",
    logo: "/landing/success/image 12.png",
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
    heroImage: "/contact/hero_new.png",
    logo: "/landing/success/image 13.png",
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
    heroImage: "/contact/hero_new.png",
    logo: "/landing/success/Group 362.png",
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
    heroImage: "/contact/hero_new.png",
    // NOTE: user referenced image 14.png but it does not exist in /public; using an existing asset instead.
    logo: "/landing/success/image 19.png",
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
    heroImage: "/contact/hero_new.png",
    // NOTE: user referenced image 15.png but it does not exist in /public; using an existing asset instead.
    logo: "/landing/success/image 16.png",
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
    heroImage: "/contact/hero_new.png",
    logo: "/landing/success/image 20.png",
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
    heroImage: "/contact/hero_new.png",
    logo: "/landing/success/image 17.png",
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
    heroImage: "/contact/hero_new.png",
    logo: "/landing/success/image 18.png",
    stats: [
      { label: "Client", value: "VIP Bags" },
      { label: "Category", value: "Retail eLearning" },
      { label: "Audience", value: "Store Attendants" },
      { label: "Focus", value: "Customer Experience" },
    ],
    challenge: [
      "Ensure consistent customer communication across retail touchpoints.",
      "Improve product and warranty knowledge among store staff.",
      "Build confidence in handling real customer scenarios.",
    ],
    solution: [
      "Interactive eLearning modules with scenario-based conversations.",
      "Clear guidance on e-warranty processes and policies.",
      "Behavioral simulations reinforcing correct customer interactions.",
    ],
  },
];

export function getSuccessStory(slug: string) {
  return successStories.find((s) => s.slug === slug);
}

