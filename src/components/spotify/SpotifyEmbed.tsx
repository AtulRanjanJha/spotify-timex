interface SpotifyEmbedProps {
  isExpanded: boolean;
}

export function SpotifyEmbed({ isExpanded }: SpotifyEmbedProps) {
  return (
    <div className={`transition-all duration-300 ${isExpanded ? 'w-[350px] h-[352px]' : 'w-[250px] h-[80px]'}`}>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/artist/2XqXXH9xPa1zucIOtZ3u3A?utm_source=generator&theme=0"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}