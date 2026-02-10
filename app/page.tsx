"use client"

import { useState, useCallback } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PainPoints } from "@/components/pain-points"
import { BeforeAfter } from "@/components/before-after"
import { HowItWorks } from "@/components/how-it-works"
import { OnlineObjection } from "@/components/online-objection"
import { ClubsCatalog } from "@/components/clubs-catalog"
import { Values } from "@/components/values"
import { Instructors } from "@/components/instructors"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { SignupModal } from "@/components/signup-modal"

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  return (
    <main>
      <Navbar onCtaClick={openModal} />
      <Hero onCtaClick={openModal} />
      <PainPoints />
      <BeforeAfter onCtaClick={openModal} />
      <HowItWorks onCtaClick={openModal} />
      <OnlineObjection onCtaClick={openModal} />
      <ClubsCatalog onCtaClick={openModal} />
      <Values />
      <Instructors />
      <Testimonials onCtaClick={openModal} />
      <Pricing onCtaClick={openModal} />
      <FAQ onCtaClick={openModal} />
      <FinalCTA onCtaClick={openModal} />
      <Footer />
      <SignupModal isOpen={modalOpen} onClose={closeModal} />
    </main>
  )
}
