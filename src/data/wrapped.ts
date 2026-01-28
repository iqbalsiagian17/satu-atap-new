export interface WrappedSlide {
  id: number;
  title: string;
  subtitle?: string;
  narrative: string;
  image?: string;
  stats?: {
    label: string;
    value: string | number;
  }[];
  backgroundColor?: string;
  textColor?: string;
}

export const wrappedSlides: WrappedSlide[] = [
  {
    id: 1,
    title: 'SATU ATAP',
    subtitle: '2025 Wrapped',
    narrative: 'A year of friendship, growth, and unforgettable memories',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200',
    backgroundColor: '#1e3a8a',
    textColor: '#ffffff',
  },
  {
    id: 2,
    title: '11 Members',
    narrative: 'Our community remained strong with all 11 members actively participating throughout the year',
    stats: [
      { label: 'Active Members', value: 11 },
      { label: 'Years of Friendship', value: 10 },
      { label: 'Different Cities', value: 5 },
    ],
    backgroundColor: '#7c3aed',
    textColor: '#ffffff',
  },
  {
    id: 3,
    title: '4 Reunions',
    narrative: 'We gathered 4 times this year - from beach trips to mountain adventures',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200',
    stats: [
      { label: 'In-Person Meetups', value: 4 },
      { label: 'Virtual Hangouts', value: 24 },
      { label: 'Total Hours Together', value: '200+' },
    ],
    backgroundColor: '#059669',
    textColor: '#ffffff',
  },
  {
    id: 4,
    title: 'Adventures',
    narrative: 'Explored 6 new destinations together, creating memories that will last a lifetime',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200',
    stats: [
      { label: 'Destinations Visited', value: 6 },
      { label: 'Photos Taken', value: '1,200+' },
      { label: 'Kilometers Traveled', value: '5,000+' },
    ],
    backgroundColor: '#dc2626',
    textColor: '#ffffff',
  },
  {
    id: 5,
    title: 'Career Milestones',
    narrative: '3 promotions, 2 job changes, and countless achievements across the team',
    stats: [
      { label: 'Promotions', value: 3 },
      { label: 'New Jobs', value: 2 },
      { label: 'Projects Launched', value: 15 },
    ],
    backgroundColor: '#ea580c',
    textColor: '#ffffff',
  },
  {
    id: 6,
    title: 'Community Impact',
    narrative: 'Gave back to society through charity work and volunteer programs',
    stats: [
      { label: 'Charity Events', value: 3 },
      { label: 'Volunteer Hours', value: 120 },
      { label: 'Lives Impacted', value: '500+' },
    ],
    backgroundColor: '#0891b2',
    textColor: '#ffffff',
  },
  {
    id: 7,
    title: 'Digital Connection',
    narrative: 'Stayed connected through our group chat with thousands of messages exchanged',
    stats: [
      { label: 'Messages Sent', value: '15,000+' },
      { label: 'Memes Shared', value: '2,500+' },
      { label: 'Video Calls', value: 48 },
    ],
    backgroundColor: '#4f46e5',
    textColor: '#ffffff',
  },
  {
    id: 8,
    title: 'Looking Forward',
    subtitle: '2026 and Beyond',
    narrative: 'Here\'s to another year of friendship, growth, and making memories together. Thank you for being part of SATU ATAP!',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200',
    backgroundColor: '#be123c',
    textColor: '#ffffff',
  },
];
