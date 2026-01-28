export interface Member {
  id: number;
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  background: string;
  email?: string;
  phone?: string;
  socialMedia?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  customSections?: {
    title: string;
    content: string;
  }[];
  photos?: string[];
  videos?: string[];
}

export const members: Member[] = [
  {
    id: 1,
    slug: 'ahmad-rizki',
    name: 'Ahmad Rizki',
    role: 'Software Engineer at Google',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Passionate about building scalable systems and mentoring young developers.',
    background: 'Ahmad started his journey as a backend developer and now works on cloud infrastructure at Google. He loves traveling and photography in his free time.',
    email: 'ahmad.rizki@example.com',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/ahmadrizki',
      instagram: 'https://instagram.com/ahmadrizki',
    },
    customSections: [
      {
        title: 'Achievements',
        content: 'Led the migration of legacy systems to microservices architecture, improving system reliability by 40%.',
      },
      {
        title: 'Hobbies',
        content: 'Photography, hiking, and teaching programming to underprivileged children.',
      },
    ],
    photos: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
    ],
  },
  {
    id: 2,
    slug: 'siti-nurhaliza',
    name: 'Siti Nurhaliza',
    role: 'Product Manager at Tokopedia',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    bio: 'Driving product innovation in e-commerce with a user-centric approach.',
    background: 'Siti has 6 years of experience in product management, specializing in marketplace platforms. She enjoys cooking and running marathons.',
    email: 'siti.nurhaliza@example.com',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/sitinurhaliza',
      instagram: 'https://instagram.com/sitinurhaliza',
    },
    customSections: [
      {
        title: 'Product Launches',
        content: 'Successfully launched 5 major features that increased user engagement by 35%.',
      },
      {
        title: 'Philosophy',
        content: 'Users first, always. Every feature should solve a real problem.',
      },
    ],
    photos: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600',
    ],
  },
  {
    id: 3,
    slug: 'budi-santoso',
    name: 'Budi Santoso',
    role: 'Data Scientist at Grab',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    bio: 'Turning data into actionable insights for better decision making.',
    background: 'Budi specializes in machine learning and predictive analytics. He has published several research papers on AI applications in transportation.',
    email: 'budi.santoso@example.com',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/budisantoso',
      twitter: 'https://twitter.com/budisantoso',
    },
    customSections: [
      {
        title: 'Research',
        content: 'Published 3 papers on machine learning optimization in transportation systems.',
      },
      {
        title: 'Interests',
        content: 'Chess, classical music, and exploring new ML frameworks.',
      },
    ],
    photos: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600',
    ],
  },
  {
    id: 4,
    slug: 'dewi-lestari',
    name: 'Dewi Lestari',
    role: 'UX Designer at Shopee',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    bio: 'Crafting delightful user experiences through thoughtful design.',
    background: 'Dewi is a UX designer with a passion for creating intuitive interfaces. She believes in the power of design to solve complex problems.',
    email: 'dewi.lestari@example.com',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/dewilestari',
      instagram: 'https://instagram.com/dewilestari',
    },
    customSections: [
      {
        title: 'Design Philosophy',
        content: 'Simplicity is sophistication. Every pixel should have a purpose.',
      },
      {
        title: 'Awards',
        content: 'Winner of Southeast Asia UX Design Competition 2023.',
      },
    ],
    photos: [
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600',
    ],
  },
  {
    id: 5,
    slug: 'eko-prasetyo',
    name: 'Eko Prasetyo',
    role: 'DevOps Engineer at Gojek',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'Building reliable infrastructure and automating everything.',
    background: 'Eko is passionate about cloud technologies and infrastructure automation. He enjoys cycling and contributing to open-source projects.',
    email: 'eko.prasetyo@example.com',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/ekoprasetyo',
      twitter: 'https://twitter.com/ekoprasetyo',
    },
    customSections: [
      {
        title: 'Tech Stack',
        content: 'Kubernetes, Docker, AWS, Terraform, and GitOps practices.',
      },
      {
        title: 'Open Source',
        content: 'Active contributor to several DevOps tools and maintains 2 popular npm packages.',
      },
    ],
    photos: [
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
    ],
  },
  {
    id: 6,
    slug: 'fani-wijaya',
    name: 'Fani Wijaya',
    role: 'Marketing Manager at Bukalapak',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    bio: 'Connecting brands with audiences through creative campaigns.',
    background: 'Fani leads marketing initiatives for Indonesia\'s leading e-commerce platform. She loves traveling and trying new cuisines.',
    email: 'fani.wijaya@example.com',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/faniwijaya',
      instagram: 'https://instagram.com/faniwijaya',
    },
    customSections: [
      {
        title: 'Campaigns',
        content: 'Led 10+ successful marketing campaigns with average ROI of 250%.',
      },
      {
        title: 'Passion',
        content: 'Digital storytelling, content creation, and community building.',
      },
    ],
    photos: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600',
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600',
    ],
  },
  {
    id: 7,
    slug: 'gilang-ramadhan',
    name: 'Gilang Ramadhan',
    role: 'Full Stack Developer at Traveloka',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    bio: 'Building end-to-end solutions for travel technology.',
    background: 'Gilang works on both frontend and backend, specializing in React and Node.js. He enjoys gaming and playing guitar.',
    email: 'gilang.ramadhan@example.com',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/gilangramadhan',
      instagram: 'https://instagram.com/gilangramadhan',
    },
    customSections: [
      {
        title: 'Skills',
        content: 'React, Node.js, TypeScript, PostgreSQL, GraphQL, AWS.',
      },
      {
        title: 'Side Projects',
        content: 'Built 3 successful SaaS applications serving 10k+ users.',
      },
    ],
    photos: [
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
    ],
  },
  {
    id: 8,
    slug: 'hana-putri',
    name: 'Hana Putri',
    role: 'Business Analyst at Ruangguru',
    photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
    bio: 'Analyzing data to drive strategic business decisions in EdTech.',
    background: 'Hana helps educational technology companies make data-driven decisions. She is passionate about education reform and yoga.',
    email: 'hana.putri@example.com',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/hanaputri',
      instagram: 'https://instagram.com/hanaputri',
    },
    customSections: [
      {
        title: 'Impact',
        content: 'Analyzed user behavior patterns that led to 50% increase in course completion rates.',
      },
      {
        title: 'Values',
        content: 'Education is the key to unlocking human potential.',
      },
    ],
    photos: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
    ],
  },
  {
    id: 9,
    slug: 'irfan-hakim',
    name: 'Irfan Hakim',
    role: 'Security Engineer at Tokopedia',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop',
    bio: 'Protecting digital assets and ensuring secure systems.',
    background: 'Irfan specializes in application security and penetration testing. He regularly participates in CTF competitions and bug bounty programs.',
    email: 'irfan.hakim@example.com',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/irfanhakim',
      twitter: 'https://twitter.com/irfanhakim',
    },
    customSections: [
      {
        title: 'Certifications',
        content: 'OSCP, CEH, CISSP certified security professional.',
      },
      {
        title: 'Achievements',
        content: 'Found and responsibly disclosed 20+ critical vulnerabilities in major platforms.',
      },
    ],
    photos: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600',
      'https://images.unsplash.com/photo-1550439062-609e1531270e?w=600',
    ],
  },
  {
    id: 10,
    slug: 'julia-rahman',
    name: 'Julia Rahman',
    role: 'HR Manager at Gojek',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    bio: 'Building great teams and fostering positive work culture.',
    background: 'Julia is passionate about people development and organizational culture. She enjoys reading psychology books and practicing mindfulness.',
    email: 'julia.rahman@example.com',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/juliarahman',
      instagram: 'https://instagram.com/juliarahman',
    },
    customSections: [
      {
        title: 'Initiatives',
        content: 'Implemented employee wellness programs that improved satisfaction scores by 45%.',
      },
      {
        title: 'Belief',
        content: 'Happy employees create great products and satisfied customers.',
      },
    ],
    photos: [
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600',
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600',
    ],
  },
  {
    id: 11,
    slug: 'kevin-ananda',
    name: 'Kevin Ananda',
    role: 'Mobile Developer at Shopee',
    photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    bio: 'Creating smooth mobile experiences for millions of users.',
    background: 'Kevin builds native mobile apps for iOS and Android. He is passionate about mobile UX and performance optimization. Enjoys basketball and coffee.',
    email: 'kevin.ananda@example.com',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/kevinananda',
      instagram: 'https://instagram.com/kevinananda',
    },
    customSections: [
      {
        title: 'Expertise',
        content: 'React Native, Swift, Kotlin, Mobile UI/UX, App Performance.',
      },
      {
        title: 'Fun Fact',
        content: 'Built a mobile app that reached #1 on App Store in Indonesia within 2 weeks of launch.',
      },
    ],
    photos: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600',
    ],
  },
];
