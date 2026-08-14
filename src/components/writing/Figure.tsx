import Image from 'next/image'

interface FigureProps {
  src: string
  alt: string
  caption?: string
}

export function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="my-10">
      <span className="block relative aspect-[16/9] border-2 border-ink overflow-hidden bg-cream-dark">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 760px) 100vw, 760px"
        />
      </span>
      {caption && (
        <figcaption className="font-mono-alt text-xs text-warm-gray mt-3 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
