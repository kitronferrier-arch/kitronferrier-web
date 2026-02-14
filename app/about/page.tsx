import type { Metadata } from "next";
import Container from "@/components/Container";
import MotionReveal from "@/components/MotionReveal";
import Photo from "@/components/Photo";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Formation, work, faith, and the personal dimension behind the work.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20">
        <Container>
          <MotionReveal>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              About
            </h1>
            <p className="mt-4 max-w-2xl text-text-secondary">
              A brief look at formation, work, faith, and the personal dimension
              behind the work.
            </p>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-surface/50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <MotionReveal>
              <Photo
                src="/assets/photos/kitron-senior-baylor-graduating-cinematic.jpg"
                alt="Formation"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </MotionReveal>
            <MotionReveal>
              <h2 className="text-2xl font-semibold tracking-tight">
                Formation and education
              </h2>
              <p className="mt-4 text-text-secondary">
                BA in Psychology, minor in Religion, from Baylor. My studies
                centered on belief systems and human behavior, and that lens
                still shapes how I approach work and relationships.
              </p>
            </MotionReveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <MotionReveal>
            <h2 className="text-2xl font-semibold tracking-tight">
              Work and experience
            </h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Background in social work, sales, and programming. Today I focus on
              software and systems that serve people and organizations well.
            </p>
          </MotionReveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <MotionReveal>
              <Photo
                src="/assets/photos/mentoring-alliance-counselor.jpg"
                alt="Work and experience"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </MotionReveal>
            <MotionReveal>
              <Photo
                src="/assets/photos/kitron-keith-mission-cross-carrying.jpg"
                alt="Mission"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </MotionReveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/50">
        <Container>
          <MotionReveal>
            <h2 className="text-2xl font-semibold tracking-tight">
              Faith and leadership
            </h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Mission trips and leading a Christian lifegroup have been central
              to how I live out faith in community and service.
            </p>
          </MotionReveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <MotionReveal>
              <Photo
                src="/assets/photos/mission-trip-meeting-travel.jpg"
                alt="Mission trip"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </MotionReveal>
            <MotionReveal>
              <Photo
                src="/assets/photos/kitron-and-others-mission-trip.jpg"
                alt="Mission trip"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </MotionReveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <MotionReveal>
            <h2 className="text-2xl font-semibold tracking-tight">
              Personal dimension
            </h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Running, fitness, and sport are part of how I stay grounded and
              disciplined.
            </p>
          </MotionReveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <MotionReveal>
              <Photo
                src="/assets/photos/kitron-marathon.jpg"
                alt="Running"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </MotionReveal>
            <MotionReveal>
              <Photo
                src="/assets/photos/kitron-football-playing.jpg"
                alt="Football"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </MotionReveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <MotionReveal>
              <Photo
                src="/assets/photos/kitron-jayline-dressed-up.jpg"
                alt="Relationship"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </MotionReveal>
            <MotionReveal>
              <h2 className="text-2xl font-semibold tracking-tight">
                Relationship
              </h2>
              <p className="mt-4 text-text-secondary">
                Engaged to Jayline. Our story is tied to Colombia and to a
                shared sense of purpose and place.
              </p>
            </MotionReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
