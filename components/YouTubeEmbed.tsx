"use client";

const BASE = "https://www.youtube-nocookie.com/embed";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

export default function YouTubeEmbed({
  videoId,
  title,
  className = "",
}: YouTubeEmbedProps) {
  const src = `${BASE}/${videoId}?rel=0`;
  return (
    <div className={`aspect-video w-full overflow-hidden rounded bg-surface ${className}`}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
