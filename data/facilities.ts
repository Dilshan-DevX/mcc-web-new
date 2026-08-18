export type Facility = {
  title: string
  description: string
  image: string
}

export const facilities: Facility[] = [
  {
    title: 'Library',
    description: 'A quiet, resource-rich space for reading and research.',
    image: '/images/library.png',
  },
  {
    title: 'Science Laboratories',
    description: 'Well-equipped labs for physics, chemistry and biology.',
    image: '/images/science-lab.png',
  },
  {
    title: 'Computer Laboratory',
    description: 'Modern workstations supporting ICT education.',
    image: '/images/ict-lab.png',
  },
  {
    title: 'Auditorium',
    description: 'A venue for assemblies, performances and ceremonies.',
    image: '/images/assembly.png',
  },
  {
    title: 'Sports Grounds',
    description: 'Spacious grounds for athletics, cricket and team sports.',
    image: '/images/sports.png',
  },
  {
    title: 'Classrooms',
    description: 'Bright, comfortable learning environments.',
    image: '/images/about-students.png',
  },
]
