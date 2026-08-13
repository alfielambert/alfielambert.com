import { SiteHeader } from '@/components/SiteHeader'
import { Hero } from '@/components/Hero'
import { SelectedWork } from '@/components/SelectedWork'
import { Building } from '@/components/Building'
import { WhatIDo } from '@/components/WhatIDo'
import { About } from '@/components/About'
import { Speaking } from '@/components/Speaking'
import { Experience } from '@/components/Experience'
import { Contact } from '@/components/Contact'
import { SiteFooter } from '@/components/SiteFooter'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <Building />
        <WhatIDo />
        <About />
        <Speaking />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
