import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import MotionReveal from "@/components/MotionReveal";
import Photo from "@/components/Photo";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Faith Discipline Systems",
  description:
    "Faith driven builder at the intersection of belief, behavior, and business.",
};

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-end pb-16 pt-20 sm:pb-20 sm:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/assets/photos/kitron-strong-hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"
            aria-hidden
          />
        </div>
        <Container className="relative z-10">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Faith. Discipline. Systems.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-text-secondary sm:text-xl">
            I build with conviction and structure at the intersection of belief,
            behavior, and business.
          </p>
          <p className="mt-4 max-w-2xl text-text-secondary">
            I walked away from a scholarship to follow Christ, studied
            psychology and religion at Baylor, led and built community, and now
            serve as CEO of ProtoLoop, designing systems that help people and
            businesses grow with clarity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/projects">View Work</Button>
            <Button href="/faith-media" variant="secondary">
              Faith and Media
            </Button>
          </div>
        </Container>
      </section>

      <Section className="bg-surface/50">
        <Container>
          <MotionReveal>
            <p className="max-w-3xl text-text-secondary">
              Structured transformation starts with clear convictions, then daily
              discipline, then systems that can be repeated with consistency.
            </p>
          </MotionReveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <MotionReveal>
            <h2 className="text-2xl font-semibold tracking-tight">Life moments</h2>
          </MotionReveal>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <MotionReveal>
              <Photo
                src="/assets/photos/kitron-jayline-engagement.jpg"
                alt="Family and covenant"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <p className="mt-3 text-text-secondary">Family and covenant</p>
            </MotionReveal>
            <MotionReveal>
              <Photo
                src="/assets/photos/kitron-keith-mission-cross-carrying.jpg"
                alt="Mission and service"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <p className="mt-3 text-text-secondary">Mission and service</p>
            </MotionReveal>
            <MotionReveal>
              <Photo
                src="/assets/photos/kitron-marathon.jpg"
                alt="Discipline and training"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <p className="mt-3 text-text-secondary">Discipline and training</p>
            </MotionReveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/50">
        <Container>
          <MotionReveal>
            <h2 className="text-2xl font-semibold tracking-tight">Core pillars</h2>
          </MotionReveal>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <MotionReveal>
              <h3 className="text-xl font-semibold tracking-tight">Family</h3>
              <p className="mt-3 text-text-secondary">
                Family is central to how I make decisions, lead, and build.
                Covenant, consistency, and responsibility shape my work.
              </p>
            </MotionReveal>
            <MotionReveal>
              <h3 className="text-xl font-semibold tracking-tight">Psychology</h3>
              <p className="mt-3 text-text-secondary">
                I study behavior deeply. Habits, conditioning, sleep,
                discipline, and belief shape everything.
              </p>
            </MotionReveal>
            <MotionReveal>
              <h3 className="text-xl font-semibold tracking-tight">Faith</h3>
              <p className="mt-3 text-text-secondary">
                Faith is not an accessory to my work. It governs it.
                Discipline, commitment, and service define leadership.
              </p>
            </MotionReveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <MotionReveal>
              <Photo
                src="/assets/photos/kitron-office-strong.jpg"
                alt="Ventures"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </MotionReveal>
            <MotionReveal>
              <h2 className="text-2xl font-semibold tracking-tight">Ventures</h2>
              <div className="mt-4 space-y-4 text-text-secondary">
                <p>
                  As Founder and CEO of ProtoLoop, I build scalable systems and
                  products designed for practical transformation.
                </p>
                <p>
                  SimplyCVR is a ProtoLoop venture focused on delivering a clear,
                  usable product experience.
                </p>
              </div>
              <div className="mt-6 space-y-2">
                <p>
                  <Link
                    href="https://protoloop.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    ProtoLoop
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://simplycvr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    SimplyCVR
                  </Link>
                </p>
              </div>
            </MotionReveal>
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-surface/80">
        <div className="absolute inset-0">
          <Image
            src="/assets/photos/kitron-guitar-bookshelf.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/80" aria-hidden />
        </div>
        <Container className="relative z-10">
          <MotionReveal>
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured conversations
            </h2>
            <p className="mb-8 mt-4 max-w-2xl text-text-secondary">
              I discuss world religions, interviews, and book reviews with
              clarity and respect.
            </p>
          </MotionReveal>
          <MotionReveal className="grid gap-6 sm:grid-cols-3">
            <div className="aspect-video w-full overflow-hidden rounded bg-black/40">
              <iframe
                src="https://www.youtube-nocookie.com/embed/7u9rx74ggOA?rel=0"
                title="Faith and Media video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="aspect-video w-full overflow-hidden rounded bg-black/40">
              <iframe
                src="https://www.youtube-nocookie.com/embed/kx53FUI5dP8?rel=0"
                title="Faith and Media video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="aspect-video w-full overflow-hidden rounded bg-black/40">
              <iframe
                src="https://www.youtube-nocookie.com/embed/sOswU3Wr_-A?rel=0"
                title="Faith and Media video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <MotionReveal>
              <h2 className="text-2xl font-semibold tracking-tight">Current focus</h2>
              <ul className="mt-4 space-y-2 text-text-secondary">
                <li>Building systems for change</li>
                <li>Leading ProtoLoop ventures</li>
                <li>Developing SimplyCVR under ProtoLoop</li>
                <li>Creating Faith and Media content</li>
                <li>Preparing for marriage and time in Colombia</li>
              </ul>
            </MotionReveal>
            <MotionReveal>
              <h2 className="text-2xl font-semibold tracking-tight">Connect</h2>
              <p className="mt-4 text-text-secondary">
                I welcome collaboration around building systems, launching
                ventures, and thoughtful conversations.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="secondary">
                  Contact
                </Button>
              </div>
            </MotionReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
