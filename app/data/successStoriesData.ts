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
      "LTIMindtree requires a reliable learning partner to support ongoing soft skills development across key delivery locations, including Pune and Mumbai. With diverse teams and evolving client expectations, the organization needed more than one-time training programs.",
      "The focus was on building people's capability consistently at scale—ensuring that communication, collaboration, and workplace effectiveness remained aligned with business and cultural expectations across locations and batches.",
    ],
    solution: [
      "iSkillBox partnered with LTIMindtree as a long-term learning partner, delivering customized, facilitator-led soft skills programs over a period of 4+ years.",
      "The programs were designed to be contextual, interactive, and scalable, tailored to LTIMindtree’s work environment, team dynamics, and business needs. Through consistent delivery across locations and campus-to-corporate batches, iSkillBox enabled sustained capability building rather than isolated learning interventions.",
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
      { label: "Category", value: "Technical Upskilling | Engineering & Cloud Trainin" },
      { label: "Delivery", value: "Multi-track | Role-based | Certification-Aligned" },
      { label: "Duration", value: "4+ Years" },
      { label: "Scope", value: "Global Engineering Teams" },
    ],
    challenge: [
      "Persistent required a continuous and scalable upskilling approach to strengthen engineering capabilities across teams working on diverse client platforms and evolving technology stacks. With rapid advancements in API development, cloud-native architectures, DevOps, AI-powered engineering, and cost optimization, the organization needed structured learning interventions to ensure engineers remained technically current, delivery-ready, and future-focused .",
      "The requirement spanned multiple skill tracks, certifications, and role-based programs, demanding consistency in capability building across projects, geographies, and experience levels.",
    ],
    solution: [
      "iSkillBox partnered with Persistent to deliver a comprehensive, multi-track technical upskilling program covering a wide spectrum of modern engineering and cloud technologies.",
      "Through structured learning journeys, hands-on training, and certification-aligned programs, iSkillBox enabled Persistent’s engineering teams to deepen technical expertise, adopt modern engineering practices, and support scalable, high-quality delivery across client engagements. .",
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
      { label: "Category", value: "hnical Upskilling | Engineering & Cloud Training" },
      { label: "Audience", value: "Emerging & Mid-level Managers" },
      { label: "Delivery", value: "Instructor-led | Scenario-based" },
    ],
    challenge: [
      "Hyundai Mobis sought to strengthen leadership capabilities across key managerial roles to support organizational growth and evolving business demands.",
      "The organization required a leadership development program that would enhance decision-making, communication, team management, and future-readiness among emerging and mid-level leaders—while ensuring alignment with Hyundai Mobis’ culture, performance expectations, and long-term vision. The focus was on building a consistent leadership mindset that could translate learning into day-to-day managerial effectiveness",
    ],
    solution: [
      "iSkillBox designed and delivered a practical, application-driven Leadership development Program tailored to Hyundai Mobis’ managerial context. ",
      "Through hands-on facilitation and contextual scenarios, the program equipped managers with stronger decision-making, collaboration, and people leadership capabilities, enabling them to lead teams more confidently and effectively.",
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
      { label: "Category", value: "Soft Skills Training | Workforce Enablement" },
      { label: "Reach", value: "220+ Locations" },
      { label: "Delivery", value: "Pan-India | Multi-location" },
    ],
    challenge: [
      "PathKind Labs required a scalable soft skills training solution to support a geographically dispersed workforce spread across 220+ locations.",
      "With employees across regions having varying levels of familiarity and proficiency in soft skills, the organization needed a program that was flexible enough to address diverse learning needs, while remaining standardized enough to ensure consistency, quality, and measurable impact across the organization.",
      "The objective was to create a unified learning experience that could be delivered reliably at scale without losing relevance at the local level. ",
    ],
    solution: [
      "iSkillBox designed and delivered a structured, scalable soft skills training program tailored for a multi-location workforce.  ",
      "The solution balanced customization and standardization—ensuring contextual relevance across regions while maintaining consistent learning outcomes. The program was designed to accommodate varying proficiency levels and enable effective skill application in day-to-day interactions. ",
      "Through consistent delivery and a unified learning framework, iSkillBox helped PathKind Labs build a more confident, aligned, and service-ready workforce across all 220+ locations",
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
    ],
    challenge: [
      "GMR Group aimed to modernize and streamline communication workflows across media, internal communications, and digital channels. ",
      "With increasing content demands—from press releases and internal updates to social media and branding campaigns—the organization needed agile, AI-powered capabilities to enable faster content creation while maintaining consistency, accuracy, and brand alignment. ",
      "The objective was to equip teams with the skills and systems required to scale high-quality communication efficiently and adapt to a rapidly evolving digital landscape",
    ],
    solution: [
      "iSkillBox designed and delivered a customized Generative AI training program tailored specifically for GMR Group’s communication, digital, and branding functions. ",
      "Through hands-on learning, role-specific use cases, and practical application, the initiative enabled GMR Group to accelerate content creation, enhance communication quality, and adopt a smarter, future-ready communication model. ",
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
      { label: "Category", value: "Talent Assessment | Interview-as-a-Service" },
      { label: "Delivery Model", value: "Expert-Led | Role-Specific Evaluation" },
      { label: "Roles Assessed", value: "Lead Data Engineer, Senior Data Engineer, Principal Architect" },
    ],
    challenge: [
      "JET2 Travel Technologies needed to accelerate and standardize the evaluation of senior and leadership-level data roles.",
      "The organization faced difficulty in assessing deep technical expertise, architectural thinking, leadership capability, and real-world problem-solving skills through conventional interviews.",
      "The challenge was to make confident hiring decisions for business-critical positions without increasing internal effort or slowing down recruitment timelines.",
    ],
    solution: [
      "iSkillBox delivered an Interview-as-a-Service model to assess senior data candidates through expert-led technical interviews conducted by seasoned industry professionals.",
      "The structured evaluation framework covered: Technical depth and hands-on expertise, System design and architectural thinking, Leadership and decision-making capability, Real-world problem-solving scenarios.",
      "By outsourcing complex technical interviews to domain experts, JET2 Travel Technologies streamlined the hiring process, ensuring high-quality, role-aligned assessments, and enabling the organization to reduce effort, improve evaluation consistency, and make data-backed hiring decisions for business-critical leadership roles.",
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
      { label: "Category", value: "Leadership Coaching | Managerial Effectiveness" },
      { label: "Delivery Model", value: "Structured Coaching | Cohort-Based" },
      { label: "Batches", value: "2 Cohorts" },
    ],
    challenge: [
      "KRAFTON needed a leadership coaching intervention to enhance decision-making, people leadership, and managerial effectiveness.",
      "With increasing organizational complexity, the organization required structured support for leaders to navigate challenges, drive performance, and lead with confidence.",
      "The objective was to create a consistent leadership development experience across multiple cohorts.",
    ],
    solution: [
      "iSkillBox designed and delivered a structured leadership coaching program conducted across two batches.",
      "The program focused on: Practical leadership and people management challenges, Real-time decision-making and leadership scenarios, Guided reflection and application of learning to daily roles.",
      "Through facilitated coaching conversations and actionable leadership frameworks, participants were able to reflect, recalibrate, and apply insights directly to their leadership responsibilities. The engagement strengthened leadership confidence, communication, and effectiveness, supporting KRAFTON's leadership ecosystem with sustainable, long-term impact.",
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
      { label: "Category", value: "eLearning | Learning Management System (LMS)" },
      { label: "Delivery Model", value: "Digital-First | Scalable Learning Ecosystem" },
      { label: "Scope", value: "Organization-Wide Training" },
    ],
    challenge: [
      "Aequs needed to transition from manual, offline training to a modern, online learning ecosystem.",
      "The organization required a solution that would provide consistent training, improved accessibility, tracking and reporting, centralized management, and customized content.",
      "The goal was to build a scalable, trackable, and learner-centric environment without disruption.",
    ],
    solution: [
      "iSkillBox implemented a full-scale Learning Management System (LMS) for Aequs, enabling online learning and centralized management.",
      "The solution included the design and development of custom eLearning modules focused on role-based and behavioral competencies.",
      "This digital transformation helped Aequs move to a modern, efficient, and scalable learning ecosystem, providing flexible, on-demand access to training.",
    ],
  },
  {
    slug: "vip-bags",
    clientName: "VIP Bags ",
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
