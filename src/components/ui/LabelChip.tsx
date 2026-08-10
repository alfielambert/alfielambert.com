interface LabelChipProps {
  children: React.ReactNode
  variant?: 'default' | 'filled' | 'yellow'
  className?: string
}

export function LabelChip({ children, variant = 'default', className = '' }: LabelChipProps) {
  const variantStyles = {
    default: 'border border-ink text-ink-mid bg-transparent',
    filled: 'border border-ink text-cream bg-ink',
    yellow: 'border border-ink text-ink bg-yellow',
  }

  return (
    <span
      className={`
        inline-block px-2.5 py-1 text-xs font-mono-alt tracking-wide uppercase
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}
