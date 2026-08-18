export type GalleryCategory =
  | 'Campus'
  | 'Events'
  | 'Sports'
  | 'Academics'
  | 'Culture'
  | 'Achievements'

export type GalleryImage = {
  src: string
  caption: string
  category: GalleryCategory
  span?: 'tall' | 'wide'
}

export const galleryFilters: ('All' | GalleryCategory)[] = [
  'All',
  'Campus',
  'Events',
  'Sports',
  'Academics',
  'Culture',
  'Achievements',
]

export const gallery: GalleryImage[] = [
  {
    src: '/images/campus-hero.png',
    caption: 'Our campus in the golden afternoon light',
    category: 'Campus',
    span: 'wide',
  },
  {
    src: '/images/sports.png',
    caption: 'Athletics at the Annual Sports Meet',
    category: 'Sports',
    span: 'tall',
  },
  {
    src: '/images/culture.png',
    caption: 'Traditional dance performance',
    category: 'Culture',
  },
  {
    src: '/images/science-lab.png',
    caption: 'Hands-on learning in the science laboratory',
    category: 'Academics',
  },
  {
    src: '/images/assembly.png',
    caption: 'Morning assembly',
    category: 'Events',
    span: 'tall',
  },
  {
    src: '/images/library.png',
    caption: 'Quiet study in the school library',
    category: 'Campus',
  },
  {
    src: '/images/ict-lab.png',
    caption: 'Students in the computer laboratory',
    category: 'Academics',
  },
  {
    src: '/images/about-students.png',
    caption: 'Collaborative learning in the classroom',
    category: 'Academics',
    span: 'wide',
  },
]
