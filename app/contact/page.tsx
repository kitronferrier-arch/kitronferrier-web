import type { Metadata } from "next";
import Container from "@/components/Container";
import MotionReveal from "@/components/MotionReveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch. Email and links.",
};

const LINKS = [
  { href: "https://www.youtube.com/@kitronferrier", label: "YouTube" },
  { href: "https://www.instagram.com/kitronferrier/", label: "Instagram" },
  { href: "https://protoloop.net", label: "ProtoLoop" },
  { href: "https://simplycvr.com", label: "SimplyCVR" },
];

export default function ContactPage() {
  return (
    <Section className="pt-20">
      <Container>
        <MotionReveal>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Contact
          </h1>
          <p className="mt-4 text-text-secondary">
            The best way to reach me is by email or through the links below.
          </p>
          <div className="mt-8">
            <a
              href="mailto:KitronFerrier@gmail.com"
              className="text-accent hover:underline"
            >
              KitronFerrier@gmail.com
            </a>
          </div>
          <nav className="mt-6 flex flex-wrap gap-4">
            {LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </nav>
        </MotionReveal>
      </Container>
    </Section>
  );
}
