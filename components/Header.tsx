import Link from "next/link";

const nav = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/faith-media", label: "Faith & Media" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-text-primary font-medium tracking-tight transition-colors hover:text-accent"
        >
          Kitron Ferrier
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
