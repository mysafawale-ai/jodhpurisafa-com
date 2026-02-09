import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { DynamicContactForm } from "@/components/dynamic-contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicServicesSection } from "@/components/dynamic-services-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"

// Domain: jodhpurisafa.com
// Brand: Safawala Jodhpur
// Location: Jodhpur

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DynamicHeroSlider location="Jodhpur" />
      <DynamicAboutSection location="Jodhpur" />
      <DynamicContactForm location="Jodhpur" domain="jodhpurisafa.com" />
      <GallerySection />
      <DynamicServicesSection location="Jodhpur" domain="jodhpurisafa.com" />
      <DynamicFooter location="Jodhpur" domain="jodhpurisafa.com" />
      <WhatsAppFloat />
    </main>
  )
}
