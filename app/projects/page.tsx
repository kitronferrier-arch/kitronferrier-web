import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import MotionReveal from "@/components/MotionReveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "ProtoLoop is the umbrella venture for scalable systems and products, including SimplyCVR.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative flex min-h-[40vh] items-end pb-12 pt-20 sm:min-h-[50vh] sm:pb-16 sm:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/assets/photos/kitron-albert-best-friend-graduation-black-and-white-wide-cinematic.jpg"
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
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
            <p className="mt-2 max-w-2xl text-text-secondary">
              ProtoLoop is the umbrella for ventures focused on structured,
              repeatable, real world change.
            </p>
          </MotionReveal>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="space-y-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <MotionReveal>
                <div className="overflow-hidden rounded-lg bg-surface p-3">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/assets/photos/protoloop.jpg"
                      alt="ProtoLoop"
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </MotionReveal>
              <MotionReveal>
                <h2 className="text-2xl font-semibold tracking-tight">ProtoLoop</h2>
                <p className="mt-4 text-text-secondary">
                  ProtoLoop builds scalable systems and products that turn clear
                  goals into disciplined execution.
                </p>
                <p className="mt-4 text-text-secondary">
                  It solves the gap between strategy and consistent follow
                  through by designing feedback loops teams can apply in daily
                  work.
                </p>
                <p className="mt-4 text-text-secondary">
                  I serve as CEO and President.
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
                <div className="overflow-hidden rounded-lg bg-surface p-3">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/assets/photos/simplycvr.jpg"
                      alt="SimplyCVR"
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </MotionReveal>
              <MotionReveal className="order-1 lg:order-2">
                <h2 className="text-2xl font-semibold tracking-tight">SimplyCVR</h2>
                <p className="mt-4 text-text-secondary">
                  SimplyCVR is a ProtoLoop venture.
                </p>
                <p className="mt-4 text-text-secondary">
                  It is a product developed under ProtoLoop with a focus on
                  clear workflows and practical use.
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
