import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import MotionReveal from "@/components/MotionReveal";
import Photo from "@/components/Photo";
import Section from "@/components/Section";

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
            Kitron Ferrier
          </h1>
          <p className="mt-4 max-w-xl text-lg text-text-secondary sm:text-xl">
            Building with conviction at the intersection of faith, psychology,
            and systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/projects">Projects</Button>
            <Button href="/faith-media" variant="secondary">
              Faith & Media
            </Button>
          </div>
        </Container>
      </section>

      <Section className="bg-surface/50">
        <Container>
          <MotionReveal>
            <p className="max-w-2xl text-text-secondary">
              I care about belief, discipline, structure, and building systems
              that last. My work and interests sit where faith, psychology, and
              intentional design meet.
            </p>
          </MotionReveal>
        </Container>
      </Section>

      <Section>
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
                Formation
              </h2>
              <p className="mt-4 text-text-secondary">
                BA in Psychology, minor in Religion, with a lasting interest in
                belief systems and human behavior.
              </p>
            </MotionReveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <MotionReveal className="order-2 lg:order-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Relationship
              </h2>
              <p className="mt-4 text-text-secondary">
                Engaged to Jayline. Our story is tied to Colombia and to a shared
                sense of purpose and place.
              </p>
            </MotionReveal>
            <MotionReveal className="order-1 lg:order-2">
              <Photo
                src="/assets/photos/kitron-jayline-engagement.jpg"
                alt="Engagement"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
                alt=""
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </MotionReveal>
            <MotionReveal>
              <h2 className="text-2xl font-semibold tracking-tight">
                Builder
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary">
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
            <p className="mb-8 max-w-2xl text-text-secondary">
              Faith & Media explores world religions, interviews, and book
              reviews.
            </p>
          </MotionReveal>
          <MotionReveal className="grid gap-6 sm:grid-cols-3">
            <div className="aspect-video w-full overflow-hidden rounded bg-black/40">
              <iframe
                src="https://www.youtube-nocookie.com/embed/7u9rx74ggOA?rel=0"
                title="Faith & Media"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="aspect-video w-full overflow-hidden rounded bg-black/40">
              <iframe
                src="https://www.youtube-nocookie.com/embed/kx53FUI5dP8?rel=0"
                title="Faith & Media"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="aspect-video w-full overflow-hidden rounded bg-black/40">
              <iframe
                src="https://www.youtube-nocookie.com/embed/sOswU3Wr_-A?rel=0"
                title="Faith & Media"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}
