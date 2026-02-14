import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-text-secondary">
      <Container>
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Kitron Ferrier. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
