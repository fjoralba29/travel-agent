export default function ReportGallery({
    images,
    alt,
}: {
    images: string[];
    alt: string;
}) {
    if (images.length === 0) return null;

    // Duplicated so the strip can loop seamlessly with no visible jump.
    const track = [...images, ...images];

    return (
        <div className='group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]'>
            <div
                className='flex w-max animate-gallery-scroll gap-4 group-hover:[animation-play-state:paused]'
                style={
                    { "--gallery-items": images.length } as React.CSSProperties
                }
            >
                {track.map((src, index) => (
                    <div
                        key={`${src}-${index}`}
                        className='relative aspect-square w-56 shrink-0 overflow-hidden rounded-2xl sm:w-64'
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={src}
                            alt={`${alt} — photo ${(index % images.length) + 1}`}
                            className='h-full w-full object-cover'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
