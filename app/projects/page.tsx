import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import MotionReveal from "@/components/MotionReveal";
import Photo from "@/components/Photo";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Projects",
  description: "ProtoLoop and SimplyCVR. Software and systems built with intention.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative flex min-h-[40vh] items-end pb-12 pt-20 sm:min-h-[50vh] sm:pb-16 sm:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/assets/photos/kitron-office-strong.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"
            aria-hidden
          />
        </div>
        <Container className="relative z-10">
          <MotionReveal>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects
            </h1>
            <p className="mt-2 text-text-secondary">
              Software and systems built with intention.
            </p>
          </MotionReveal>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="space-y-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <MotionReveal>
                <Photo
                  src="/assets/photos/kitron-suit-professiona-portrait.jpg"
                  alt="ProtoLoop"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </MotionReveal>
              <MotionReveal>
                <h2 className="text-2xl font-semibold tracking-tight">
                  ProtoLoop
                </h2>
                <p className="mt-4 text-text-secondary">
                  A platform built to support teams and workflows with clarity
                  and structure.
                </p>
                <div className="mt-6">
                  <Button href="https://protoloop.net" external>
                    Visit ProtoLoop
                  </Button>
                </div>
              </MotionReveal>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <MotionReveal className="order-2 lg:order-1">
                <Photo
                  src="/assets/photos/kitron-traveling-colombia-casual.jpg"
                  alt="SimplyCVR"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </MotionReveal>
              <MotionReveal className="order-1 lg:order-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                  SimplyCVR
                </h2>
                <p className="mt-4 text-text-secondary">
                  CVR solutions with an international focus, designed for
                  reliability and ease of use.
                </p>
                <div className="mt-6">
                  <Button href="https://simplycvr.com" external>
                    Visit SimplyCVR
                  </Button>
                </div>
              </MotionReveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
