import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import MotionReveal from "@/components/MotionReveal";
import Section from "@/components/Section";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "Faith & Media",
  description:
    "World religions, interviews, and book reviews. Faith & Media channel.",
};

const VIDEOS = [
  { id: "7u9rx74ggOA", title: "Faith & Media video 1" },
  { id: "kx53FUI5dP8", title: "Faith & Media video 2" },
  { id: "sOswU3Wr_-A", title: "Faith & Media video 3" },
];

export default function FaithMediaPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end pb-12 pt-20 sm:min-h-[60vh] sm:pb-16 sm:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/assets/photos/mission-trip-meeting-travel.jpg"
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
          <MotionReveal>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Faith & Media
            </h1>
            <p className="mt-2 max-w-xl text-text-secondary">
              World religions, interviews, and book reviews.
            </p>
          </MotionReveal>
        </Container>
      </section>

      <Section>
        <Container>
          <MotionReveal>
            <p className="max-w-2xl text-text-secondary">
              This channel explores belief, tradition, and meaning through
              conversations and reviews. World religions, interviews, and book
              discussions in one place.
            </p>
          </MotionReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((video) => (
              <MotionReveal key={video.id}>
                <YouTubeEmbed
                  videoId={video.id}
                  title={video.title}
                />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-surface/80">
        <div className="absolute inset-0">
          <Image
            src="/assets/photos/kitron-guitar-bookshelf.jpg"
            alt=""
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/85" aria-hidden />
        </div>
        <Container className="relative z-10">
          <MotionReveal>
            <p className="max-w-2xl text-text-secondary">
              More content on the channel. Subscribe for new conversations and
              reviews.
            </p>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}
