import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Background } from "@/components/background";
import { Features } from "@/components/features";
import { Companies } from "@/components/companies";
import { GridFeatures } from "@/components/grid-features";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Pricing } from "@/components/pricing";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden ">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col items-center justify-between ">
        <Hero />
        {/* <Companies /> */}
        <Features />
        <GridFeatures />
        {/* <Testimonials /> */}
        <div className="relative z-20 py-10 lg:py-40 overflow-hidden lg:overflow-visible">
          <Heading as="h2">Tarifs simples et transparents</Heading>
          <Subheading className="text-center">
            Choisissez le plan adapté à votre pratique médicale. Sans engagement, sans surprise.
          </Subheading>
        <Pricing />
      </div>
      </Container>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Background />
        </div>
        <CTA />
      </div>
    </div>
  );
}
