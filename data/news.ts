export type NewsArticle = {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  image: string
  featured?: boolean
  body: string[]
}

export const news: NewsArticle[] = [
  {
    slug: 'annual-sports-meet-2026',
    title: 'Annual Sports Meet 2026',
    category: 'Sports',
    date: '2026-03-14',
    excerpt:
      'School students participate in the annual inter-house athletics and sports competition.',
    image: '/images/sports.png',
    featured: true,
    body: [
      'The Annual Sports Meet brought together every house in a celebration of athleticism, teamwork and school spirit.',
      'Students competed across track and field events, with families and staff gathering to cheer on their teams throughout the day.',
      'The event reflects our commitment to holistic education — developing physical fitness, discipline and camaraderie alongside academic learning.',
    ],
  },
  {
    slug: 'academic-excellence-awards',
    title: 'Academic Excellence Awards',
    category: 'Academics',
    date: '2026-02-20',
    excerpt: 'Celebrating outstanding student performance across all grades.',
    image: '/images/about-students.png',
    body: [
      'The Academic Excellence Awards recognised students who demonstrated remarkable dedication and results across the academic year.',
      'Awards were presented across subjects and grade levels, honouring both achievement and consistent effort.',
    ],
  },
  {
    slug: 'school-anniversary-celebration',
    title: 'School Anniversary Celebration',
    category: 'Events',
    date: '2026-01-30',
    excerpt: "A celebration of the school's heritage and community.",
    image: '/images/assembly.png',
    body: [
      'The school community gathered to mark another proud year in our long history of service to education.',
      'Alumni, parents, students and staff joined together for a day of reflection, gratitude and celebration.',
    ],
  },
  {
    slug: 'science-exhibition-highlights',
    title: 'Science Exhibition Highlights',
    category: 'Academics',
    date: '2025-11-18',
    excerpt: 'Students showcase innovative projects at the annual exhibition.',
    image: '/images/science-lab.png',
    body: [
      'The annual Science Exhibition transformed the college into a showcase of curiosity and innovation.',
      'Visitors explored dozens of student projects spanning experiments, models and technology demonstrations.',
    ],
  },
  {
    slug: 'cultural-festival-2025',
    title: 'Cultural Festival 2025',
    category: 'Culture',
    date: '2025-10-05',
    excerpt: 'A vibrant showcase of music, dance and drama.',
    image: '/images/culture.png',
    body: [
      'Our Cultural Festival celebrated the richness of Sri Lankan heritage through performances by student societies.',
      'The evening highlighted months of dedicated preparation by our arts and culture groups.',
    ],
  },
]

export function getArticle(slug: string) {
  return news.find((n) => n.slug === slug)
}
