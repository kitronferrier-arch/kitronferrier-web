import type { Metadata } from "next";
import Container from "@/components/Container";
import MotionReveal from "@/components/MotionReveal";
import Photo from "@/components/Photo";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "A conviction led story of faith, discipline, psychology, leadership, and venture building.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20">
        <Container>
          <MotionReveal>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>
            <p className="mt-4 max-w-2xl text-text-secondary">
              A life shaped by conviction, disciplined growth, and systems that
              help change last.
            </p>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-surface/50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <MotionReveal>
              <Photo
                src="/assets/photos/kitron-football-playing.jpg"
                alt="Before"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </MotionReveal>
            <MotionReveal>
              <h2 className="text-2xl font-semibold tracking-tight">Before</h2>
              <p className="mt-4 text-text-secondary">
                I went to college to play football and study computer science.
                I became a true freshman starter at Butte College, where
                discipline and performance were everything.
              </p>
              <p className="mt-4 text-text-secondary">
                After encountering the gospel for the first time and reading
                deeply, I gave my life to Christ. I walked away from a full ride
                scholarship and transferred to Baylor University.
              </p>
              <p className="mt-4 text-text-secondary">
                That decision reshaped everything.
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
                src="/assets/photos/kitron-senior-baylor-graduating-cinematic.jpg"
                alt="Study and formation"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </MotionReveal>
            <MotionReveal>
              <h2 className="text-2xl font-semibold tracking-tight">Study and formation</h2>
              <p className="mt-4 text-text-secondary">
                At Baylor I studied Psychology and Religion.
              </p>
              <p className="mt-4 text-text-secondary">
                I immersed myself in sleep neuroscience, clinical neuroscience,
                counseling theory, psychopathology, conditioning, and behavioral
                statistics. I conducted research, worked in labs, and studied
                how habits, conditioning, and belief shape behavior.
              </p>
              <p className="mt-4 text-text-secondary">
                I became fascinated with how spiritual disciplines interact with
                neural plasticity and behavioral reinforcement.
              </p>
              <p className="mt-4 text-text-secondary">
                I studied world religions critically, including Catholicism,
                Mormonism, Islam, Jehovah&apos;s Witnesses, egalitarianism, and
                faith and works. I wanted to understand, not caricature.
              </p>
            </MotionReveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <MotionReveal className="order-2 lg:order-1">
              <h2 className="text-2xl font-semibold tracking-tight">Leadership</h2>
              <p className="mt-4 text-text-secondary">
                I founded and led a Lifegroup that grew from three leaders into
                a connected weekly community. I played guitar for worship and
                adoration. I went on mission trips to Bogota and the border of
                Mexico.
              </p>
              <p className="mt-4 text-text-secondary">
                I was baptized, and the following year baptized someone I
                discipled.
              </p>
              <p className="mt-4 text-text-secondary">
                Leadership for me has always been relational and conviction
                based.
              </p>
            </MotionReveal>
            <MotionReveal className="order-1 lg:order-2">
              <Photo
                src="/assets/photos/kitron-and-others-mission-trip.jpg"
                alt="Leadership"
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
                src="/assets/photos/kitron-marathon.jpg"
                alt="Discipline and health"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </MotionReveal>
            <MotionReveal>
              <h2 className="text-2xl font-semibold tracking-tight">Discipline and health</h2>
              <p className="mt-4 text-text-secondary">
                After leaving football, I lost 100 pounds.
              </p>
              <p className="mt-4 text-text-secondary">
                I rebuilt my health intentionally through training, sleep,
                nutrition, and structure.
              </p>
              <p className="mt-4 text-text-secondary">
                I care deeply about how physical discipline reinforces spiritual
                and mental clarity.
              </p>
              <p className="mt-4 text-text-secondary">
                Running, lifting, and consistent habits are not hobbies for me.
                They are anchors.
              </p>
            </MotionReveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <MotionReveal>
              <Photo
                src="/assets/photos/kitron-office-strong.jpg"
                alt="Work and vision"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </MotionReveal>
            <MotionReveal>
              <h2 className="text-2xl font-semibold tracking-tight">Work and vision</h2>
              <p className="mt-4 text-text-secondary">
                After graduating, I worked in medical social work before
                partnering with my brother to build ProtoLoop.
              </p>
              <p className="mt-4 text-text-secondary">
                Today I serve as CEO and President of ProtoLoop. SimplyCVR is one
                venture under that philosophy.
              </p>
              <p className="mt-4 text-text-secondary">
                ProtoLoop is built on structured feedback loops. We believe
                growth is not random. It is engineered.
              </p>
              <p className="mt-4 text-text-secondary">
                My role is coordination, clarity, and long term stability. I
                design systems that allow builders to execute with focus.
              </p>
            </MotionReveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <MotionReveal>
              <h2 className="text-2xl font-semibold tracking-tight">What I care about</h2>
              <ul className="mt-4 space-y-2 text-text-secondary">
                <li>Faith</li>
                <li>Family</li>
                <li>Discipline</li>
                <li>Growth</li>
                <li>Commitment</li>
              </ul>
              <p className="mt-4 text-text-secondary">
                Jayline and I are preparing for marriage, and I am deeply
                grateful for her.
              </p>
            </MotionReveal>
            <MotionReveal>
              <Photo
                src="/assets/photos/kitron-jayline-dressed-up.jpg"
                alt="What I care about"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </MotionReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
