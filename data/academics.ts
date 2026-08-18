// Academic programs. Only display streams that are actually available once verified.

export type AcademicProgram = {
  title: string
  grades: string
  description: string
  icon: 'sprout' | 'book' | 'graduation' | 'award'
}

export const academics: AcademicProgram[] = [
  {
    title: 'Primary Education',
    grades: 'Grades 1–5',
    description:
      'A caring foundation focused on literacy, numeracy, curiosity and values.',
    icon: 'sprout',
  },
  {
    title: 'Junior Secondary',
    grades: 'Grades 6–9',
    description:
      'A broad curriculum building strong academic and social foundations.',
    icon: 'book',
  },
  {
    title: 'Senior Secondary',
    grades: 'Grades 10–11',
    description:
      'Preparation for the G.C.E. Ordinary Level examination across core subjects.',
    icon: 'graduation',
  },
  {
    title: 'Advanced Level',
    grades: 'Grades 12–13',
    description:
      'Specialised streams in Arts, Commerce, Science and Technology.',
    icon: 'award',
  },
]

export const alStreams = [
  'Physical Science',
  'Biological Science',
  'Commerce',
  'Arts',
  'Technology',
]
