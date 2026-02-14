import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import MotionReveal from "@/components/MotionReveal";
import Section from "@/components/Section";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "Faith and Media",
  description:
    "Conversations across belief systems and reviews of religious texts with honesty, respect, and disciplined thinking.",
};

const VIDEOS = [
  { id: "7u9rx74ggOA", title: "Faith and Media video 1" },
  { id: "kx53FUI5dP8", title: "Faith and Media video 2" },
  { id: "sOswU3Wr_-A", title: "Faith and Media video 3" },
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
              Faith and Media
            </h1>
            <p className="mt-2 max-w-xl text-text-secondary">
              I explore world religions, conduct interviews, and do book reviews
              with clarity and respect.
            </p>
          </MotionReveal>
        </Container>
      </section>

      <Section>
        <Container>
          <MotionReveal>
            <p className="max-w-2xl text-text-secondary">
              I host conversations across belief systems and review religious
              texts with honesty and respect. My aim is clarity, not
              controversy. I care about truth and disciplined thinking.
            </p>
          </MotionReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((video) => (
              <MotionReveal key={video.id}>
                <YouTubeEmbed videoId={video.id} title={video.title} />
              </MotionReveal>
            ))}
          </div>
          <MotionReveal className="mt-10 flex flex-wrap gap-4">
            <Button href="https://www.youtube.com/@kitronferrier" external>
              Visit YouTube channel
            </Button>
            <Button href="https://www.instagram.com/kitronferrier/" external variant="secondary">
              Follow on Instagram
            </Button>
          </MotionReveal>
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
              More conversations, interviews, and reviews are published across
              the channel and social platforms.
            </p>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}
