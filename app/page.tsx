import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { About } from '@/components/about'
import { Timeline } from '@/components/timeline'
import { VisionMission } from '@/components/vision-mission'
import { PrincipalMessage } from '@/components/principal-message'
import { Academics } from '@/components/academics'
import { StudentLife } from '@/components/student-life'
import { Achievements } from '@/components/achievements'
import { News } from '@/components/news'
import { EventsCalendar } from '@/components/events-calendar'
import { Gallery } from '@/components/gallery'
import { Facilities } from '@/components/facilities'
import { Alumni } from '@/components/alumni'
import { Notices } from '@/components/notices'
import { Portal } from '@/components/portal'
import { Contact } from '@/components/contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Timeline />
      <VisionMission />
      <PrincipalMessage />
      <Academics />
      <StudentLife />
      <Achievements />
      <News />
      <EventsCalendar />
      <Gallery />
      <Facilities />
      <Alumni />
      <Notices />
      <Portal />
      <Contact />
    </>
  )
}
