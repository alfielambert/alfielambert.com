'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

interface BrutalistButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'outline' | 'filled' | 'yellow'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
}

const variantStyles = {
  outline: 'bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-cream',
  filled: 'bg-ink text-cream border-2 border-ink',
  yellow: 'bg-yellow text-ink border-2 border-ink',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-[15px]',
  lg: 'px-8 py-4 text-base',
}

export function BrutalistButton({
  children,
  href,
  onClick,
  variant = 'outline',
  size = 'md',
  external,
  className = '',
  disabled,
  type = 'button',
}: BrutalistButtonProps) {
  const shouldReduce = useReducedMotion()

  const baseClass = `
    inline-flex items-center gap-2 font-display font-bold tracking-tight
    shadow-brutal transition-colors duration-150
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `

  const motionProps = shouldReduce
    ? {}
    : {
        whileHover: { x: -2, y: -2, boxShadow: '6px 6px 0 #1A1A1A' },
        whileTap: { x: 0, y: 0, boxShadow: '2px 2px 0 #1A1A1A' },
        transition: { duration: 0.1, ease: 'easeOut' as const },
      }

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClass}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} disabled:opacity-50 disabled:cursor-not-allowed`}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
