import Image from "next/image";
import dimensions from "@/lib/image-dimensions.json";

const DIMENSIONS = dimensions as Record<string, { width: number; height: number }>;

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

function getDimensions(src: string): { width: number; height: number } | null {
  const filename = src.split("/").pop() ?? "";
  return DIMENSIONS[filename] ?? null;
}

export default function Photo({
  src,
  alt,
  className = "",
  priority,
  sizes = "100vw",
}: PhotoProps) {
  const dims = getDimensions(src);
  if (!dims) {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-surface ${className}`}>
        {/* Fallback if dimensions missing: use a 4/3 box with fill */}
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes={sizes}
            priority={priority}
          />
        </div>
      </div>
    );
  }
  return (
    <div className={`overflow-hidden rounded-lg bg-surface ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={dims.width}
        height={dims.height}
        className="h-auto w-full"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
