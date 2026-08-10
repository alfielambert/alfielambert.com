interface SectionLabelProps {
  number: string
  label: string
  light?: boolean
}

export function SectionLabel({ number, label, light = false }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 font-mono-alt text-xs tracking-widest uppercase ${
        light ? 'text-cream/60' : 'text-warm-gray'
      }`}
    >
      <span
        className={`w-6 h-6 flex items-center justify-center border text-[10px] font-bold ${
          light ? 'border-cream/40 text-cream/60' : 'border-warm-gray text-warm-gray'
        }`}
      >
        {number}
      </span>
      {label}
    </div>
  )
}
