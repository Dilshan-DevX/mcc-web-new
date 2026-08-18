// Sample achievements — clearly structured so actual achievements can replace them.

export type Achievement = {
  year: string
  category:
    | 'Academic'
    | 'Sports'
    | 'Arts & Culture'
    | 'Technology'
    | 'Community'
    | 'National'
  title: string
  description: string
}

export const achievements: Achievement[] = [
  {
    year: '2025',
    category: 'Sports',
    title: 'Outstanding Achievement in Athletics',
    description:
      'Students represented the school at district-level athletics competitions.',
  },
  {
    year: '2025',
    category: 'Academic',
    title: 'Excellence at the G.C.E. Examinations',
    description:
      'A strong cohort of students achieved distinctions across core subjects.',
  },
  {
    year: '2024',
    category: 'Technology',
    title: 'Regional ICT Innovation Award',
    description:
      'The ICT Society developed a project recognised at the regional level.',
  },
  {
    year: '2024',
    category: 'Arts & Culture',
    title: 'Provincial Cultural Festival Winners',
    description:
      'Our dance and drama teams earned top honours at the provincial festival.',
  },
  {
    year: '2023',
    category: 'Community',
    title: 'Community Service Recognition',
    description:
      'Students led environmental and social-service initiatives across Medawachchiya.',
  },
  {
    year: '2023',
    category: 'National',
    title: 'National Competition Finalists',
    description:
      'Representatives reached the national finals of an inter-school competition.',
  },
]
