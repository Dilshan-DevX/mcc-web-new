// Central configuration for core school information.
// Replace placeholder values with verified school data.

export const school = {
  name: 'A/Maithreepala Senanayake Central College',
  shortName: 'MSC College',
  nameSinhala: 'ඒ/මෛත්‍රීපාල සේනානායක මධ්‍ය මහා විද්‍යාලය',
  location: 'Medawachchiya, Sri Lanka',
  locationSinhala: 'මැදවච්චිය, ශ්‍රී ලංකාව',
  tagline: 'Empowering Minds. Building Character. Shaping the Future.',
  established: 1950,
  address: {
    line1: 'A/Maithreepala Senanayake Central College',
    line2: 'Medawachchiya, Anuradhapura District',
    country: 'Sri Lanka',
  },
  // Placeholder contact details — replace with verified information.
  phone: '+94 XX XXX XXXX',
  email: 'info@school.edu.lk',
  mapQuery: 'Medawachchiya, Sri Lanka',
  socials: {
    facebook: '#',
    youtube: '#',
    instagram: '#',
  },
}

// Placeholder statistics — structured for easy replacement with real figures.
export const stats = [
  { value: 75, suffix: '+', label: 'Years of Excellence' },
  { value: 2000, suffix: '+', label: 'Students' },
  { value: 100, suffix: '+', label: 'Teachers' },
  { value: 50, suffix: '+', label: 'Achievements' },
]

export const vision =
  'To nurture knowledgeable, disciplined and compassionate citizens capable of contributing positively to Sri Lanka and the world.'

export const mission =
  'To provide an inclusive, values-driven education that develops academic excellence, character, creativity and leadership — preparing every student to serve their community with integrity and purpose.'

export const principalMessage = {
  name: 'Mr. Placeholder Name',
  title: 'Principal',
  school: 'A/Maithreepala Senanayake Central College',
  image: '/images/principal.png',
  body: [
    'Education is not only about achieving academic success. It is about developing character, responsibility, creativity and the confidence to contribute meaningfully to society.',
    'At our college, we are committed to nurturing every student — guiding them to become disciplined, thoughtful and compassionate individuals who will carry the values of this school throughout their lives.',
  ],
}

export const timeline = [
  { year: '1950s', title: 'Foundation and early development' },
  { year: '1970s', title: 'Expansion of academic activities' },
  {
    year: '1990s',
    title: 'Growth of student societies and extracurricular activities',
  },
  { year: '2010s', title: 'Modernization and development' },
  { year: '2020s', title: 'Building a digitally connected school community' },
]

export const aboutFeatures = [
  {
    title: 'Excellence',
    description: 'Committed to academic achievement.',
  },
  {
    title: 'Character',
    description: 'Developing responsible and disciplined citizens.',
  },
  {
    title: 'Community',
    description: 'Strengthening the connection between school and society.',
  },
]

export const navLinks = [
  { label: 'Home', href: '/' },
  { 
    label: 'About', 
    href: '/about',
    subItems: [
      { label: 'Overview', href: '/about' },
      { label: 'Vision & Mission', href: '/about#vision' },
      { label: 'Principal\'s Message', href: '/about#principal' },
      { label: 'Facilities', href: '/facilities' },
    ]
  },
  { 
    label: 'Academics', 
    href: '/academics',
    subItems: [
      { label: 'Overview', href: '/academics' },
      { label: 'Curriculum', href: '/academics#curriculum' },
      { label: 'Examinations', href: '/academics#examinations' },
    ]
  },
  { 
    label: 'Student Life', 
    href: '/student-life',
    subItems: [
      { label: 'Overview', href: '/student-life' },
      { label: 'Clubs & Societies', href: '/student-life#clubs' },
      { label: 'Sports', href: '/student-life#sports' },
    ]
  },
  { label: 'Achievements', href: '/achievements' },
  { 
    label: 'News & Events', 
    href: '/news',
    subItems: [
      { label: 'Latest News', href: '/news' },
      { label: 'Upcoming Events', href: '/events' },
      { label: 'Notices', href: '/notices' },
    ]
  },
  { label: 'Gallery', href: '/gallery' },
]

export const topNavLinks = [
  { label: 'Staff', href: '/staff' },
  { label: 'Student Hub', href: '/student-portal' },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Contact', href: '/contact' },
]
