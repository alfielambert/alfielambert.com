interface InBriefProps {
  children: React.ReactNode
}

/** children should be a <ul> of <li> points, written directly in the MDX body. */
export function InBrief({ children }: InBriefProps) {
  return (
    <div className="my-10 border-2 border-ink p-6 md:p-7 bg-cream-dark">
      <p className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-4">
        In brief
      </p>
      <div className="text-ink leading-[1.65] text-[16px] md:text-[17px] [&_ul]:space-y-2.5 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-yellow [&_ul]:m-0">
        {children}
      </div>
    </div>
  )
}
