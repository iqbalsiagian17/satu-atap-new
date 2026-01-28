export interface Announcement {
  id: number;
  title: string;
  date: string;
  category: 'event' | 'news' | 'update';
  excerpt: string;
  content: string;
  image?: string;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: 'Annual Reunion 2026 - Save The Date!',
    date: '2026-01-15',
    category: 'event',
    excerpt: 'Mark your calendars! Our annual SATU ATAP reunion is scheduled for March 2026.',
    content: `We're excited to announce our annual reunion for 2026! This year, we'll be gathering in Bali for a weekend of fun, reminiscing, and making new memories together.

Date: March 15-17, 2026
Location: Bali, Indonesia
Activities: Beach activities, group dinners, team building games, and more!

More details will be shared soon. Can't wait to see everyone!`,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
  },
  {
    id: 2,
    title: 'Community Achievement: 10 Years of Friendship',
    date: '2026-01-10',
    category: 'news',
    excerpt: 'Celebrating a decade of SATU ATAP - from college friends to lifelong companions.',
    content: `Today marks 10 years since we first formed SATU ATAP during our college days. What started as a group of friends studying together has grown into a lifelong bond.

Over the years, we've:
- Supported each other through career transitions
- Celebrated weddings and new additions to our families
- Traveled together to 15+ destinations
- Maintained our annual reunion tradition for 8 consecutive years

Here's to many more years of friendship and memories!`,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800',
  },
  {
    id: 3,
    title: 'New Website Launch',
    date: '2026-01-05',
    category: 'update',
    excerpt: 'Welcome to our new community website! Explore member profiles, gallery, and more.',
    content: `We're thrilled to launch our brand new SATU ATAP community website!

Features:
- Member profiles with unique personal pages
- Photo and video gallery
- Community announcements
- Interactive wrapped experience
- Contact information

The website was built collaboratively and represents our commitment to staying connected. Browse around and enjoy!`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  },
  {
    id: 4,
    title: 'Virtual Game Night - Every Friday',
    date: '2025-12-28',
    category: 'event',
    excerpt: 'Join us for weekly virtual game nights. Fun, laughter, and friendly competition!',
    content: `Starting this Friday, we're launching weekly virtual game nights!

Schedule: Every Friday at 8 PM WIB
Platform: Discord
Games: Among Us, Skribbl.io, Codenames, and more

Whether you're a competitive gamer or just want to hang out, everyone is welcome. Let's make Friday nights fun again!`,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
  },
  {
    id: 5,
    title: 'Community Charity Initiative 2026',
    date: '2025-12-20',
    category: 'news',
    excerpt: 'SATU ATAP launches annual charity program to give back to the community.',
    content: `This year, we're starting a community charity initiative to give back to society.

Our Focus Areas:
- Education for underprivileged children
- Environmental conservation
- Supporting local communities

Each member will contribute ideas and resources. Together, we can make a real difference!

More details on how to participate coming soon.`,
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800',
  },
  {
    id: 6,
    title: 'Member Spotlight: Ahmad Rizki',
    date: '2025-12-15',
    category: 'news',
    excerpt: 'Congratulations to Ahmad on his promotion to Senior Software Engineer at Google!',
    content: `Big congratulations to Ahmad Rizki on his recent promotion to Senior Software Engineer at Google!

Ahmad has been an inspiration to all of us with his dedication to continuous learning and his passion for mentoring others. His achievement is well-deserved and we couldn't be prouder.

Keep shining, Ahmad! 🎉`,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  },
];
