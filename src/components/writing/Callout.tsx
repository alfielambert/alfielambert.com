interface CalloutProps {
  label?: string
  children: React.ReactNode
}

export function Callout({ label = 'The point', children }: CalloutProps) {
  return (
    <div className="my-10 border-l-4 border-yellow pl-5 md:pl-6">
      <p className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-2">
        {label}
      </p>
      <div className="text-ink leading-[1.7] text-[17px] md:text-[18px] [&>p]:mb-3 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}
