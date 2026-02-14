import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  external = false,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded px-5 py-2.5 text-sm font-medium transition-colors";
  const primary =
    "bg-accent text-background hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const secondary =
    "border border-white/20 text-text-primary hover:border-accent/50 hover:text-accent";

  const styles = `${base} ${variant === "primary" ? primary : secondary} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
