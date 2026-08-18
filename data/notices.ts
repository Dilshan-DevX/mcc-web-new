export type Notice = {
  date: string
  category: 'Announcement' | 'Examination' | 'Admission' | 'Meeting' | 'Academic'
  title: string
  fileType: 'pdf' | 'doc'
}

export const notices: Notice[] = [
  {
    date: '2026-03-01',
    category: 'Announcement',
    title: 'School Term Commencement Announcement',
    fileType: 'pdf',
  },
  {
    date: '2026-02-24',
    category: 'Examination',
    title: 'First Term Examination Information',
    fileType: 'pdf',
  },
  {
    date: '2026-02-15',
    category: 'Admission',
    title: 'Grade 1 Admission Notice 2026',
    fileType: 'doc',
  },
  {
    date: '2026-02-08',
    category: 'Meeting',
    title: 'Parent–Teacher Meeting Notice',
    fileType: 'pdf',
  },
  {
    date: '2026-02-01',
    category: 'Academic',
    title: 'Revised Academic Schedule',
    fileType: 'pdf',
  },
]

export const portalFeatures = [
  { title: 'Results', description: 'View term and exam results.' },
  { title: 'Attendance', description: 'Track daily attendance records.' },
  { title: 'Timetable', description: 'Access your class schedule.' },
  { title: 'Assignments', description: 'Submit and review coursework.' },
  { title: 'Announcements', description: 'Stay updated with notices.' },
  { title: 'Events', description: 'See upcoming school events.' },
]
