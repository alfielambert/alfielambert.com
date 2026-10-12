import { SiteHeader } from '@/components/SiteHeader'
import { Hero } from '@/components/Hero'
import { Oiya } from '@/components/Oiya'
import { Companies } from '@/components/Companies'
import { Systems } from '@/components/Systems'
import { HowIBuild } from '@/components/HowIBuild'
import { LatestWriting } from '@/components/LatestWriting'
import { Speaking } from '@/components/Speaking'
import { Experience } from '@/components/Experience'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { SiteFooter } from '@/components/SiteFooter'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Oiya />
        <Companies />
        <Systems />
        <HowIBuild />
        <LatestWriting />
        <Speaking />
        <Experience />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
