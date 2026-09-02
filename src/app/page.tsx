import { SiteHeader } from '@/components/SiteHeader'
import { Hero } from '@/components/Hero'
import { SignatureThesis } from '@/components/SignatureThesis'
import { SelectedWork } from '@/components/SelectedWork'
import { Systems } from '@/components/Systems'
import { LatestWriting } from '@/components/LatestWriting'
import { WhatIDo } from '@/components/WhatIDo'
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
        <SignatureThesis />
        <SelectedWork />
        <Systems />
        <LatestWriting />
        <WhatIDo />
        <Speaking />
        <Experience />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
