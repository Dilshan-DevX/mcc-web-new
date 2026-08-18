export type StudentLifeCategory = {
  title: string
  description: string
  items: string[]
  image: string
}

export const studentLife: StudentLifeCategory[] = [
  {
    title: 'Sports',
    description: 'Building teamwork, fitness and a spirit of fair play.',
    items: ['Cricket', 'Athletics', 'Volleyball', 'Football', 'Basketball'],
    image: '/images/sports.png',
  },
  {
    title: 'Clubs & Societies',
    description: 'Student-led communities that spark curiosity and skill.',
    items: [
      'Science Society',
      'ICT Society',
      'Literary Society',
      'Commerce Society',
      'Environmental Society',
    ],
    image: '/images/science-lab.png',
  },
  {
    title: 'Arts & Culture',
    description: 'Celebrating creativity and Sri Lankan heritage.',
    items: ['Music', 'Dance', 'Drama', 'Art', 'Cultural Events'],
    image: '/images/culture.png',
  },
  {
    title: 'Leadership',
    description: 'Empowering students to lead with responsibility.',
    items: ['Student Parliament', 'Prefects', 'School Leadership'],
    image: '/images/assembly.png',
  },
  {
    title: 'Cadet & Scouts',
    description: 'Discipline, service and personal growth.',
    items: ['Leadership', 'Discipline', 'Community Service'],
    image: '/images/library.png',
  },
]
