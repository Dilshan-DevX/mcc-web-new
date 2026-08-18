export type SchoolEvent = {
  date: string // ISO date
  title: string
  category:
    | 'Sports'
    | 'Meeting'
    | 'Examination'
    | 'Ceremony'
    | 'Anniversary'
    | 'Culture'
    | 'Club'
  time?: string
  description: string
}

export const events: SchoolEvent[] = [
  {
    date: '2026-03-14',
    title: 'Annual Sports Meet',
    category: 'Sports',
    time: '8:00 AM',
    description: 'Inter-house athletics and sports competition at the grounds.',
  },
  {
    date: '2026-03-05',
    title: 'Parents Meeting',
    category: 'Meeting',
    time: '2:00 PM',
    description: 'Term progress discussion with class teachers.',
  },
  {
    date: '2026-03-23',
    title: 'Term Test — Grade 10 & 11',
    category: 'Examination',
    time: '8:30 AM',
    description: 'First term evaluation examinations begin.',
  },
  {
    date: '2026-03-28',
    title: 'Prize Giving',
    category: 'Ceremony',
    time: '9:00 AM',
    description: 'Annual awards ceremony recognising student achievement.',
  },
  {
    date: '2026-03-18',
    title: 'Science Society Meeting',
    category: 'Club',
    time: '3:00 PM',
    description: 'Monthly gathering and project planning.',
  },
  {
    date: '2026-04-10',
    title: 'Cultural Evening',
    category: 'Culture',
    time: '5:00 PM',
    description: 'Music, dance and drama performances by students.',
  },
  {
    date: '2026-04-24',
    title: 'School Anniversary',
    category: 'Anniversary',
    time: '9:00 AM',
    description: 'Celebrating the heritage of our college.',
  },
]

export const eventCategoryColors: Record<string, string> = {
  Sports: 'var(--gold)',
  Meeting: 'var(--navy)',
  Examination: 'var(--burgundy)',
  Ceremony: 'var(--gold)',
  Anniversary: 'var(--burgundy)',
  Culture: 'var(--navy)',
  Club: 'var(--muted-foreground)',
}
