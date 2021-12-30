import React from 'react'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[
        ...StyleDefault,
        ...(primary ? StylePrimary : StyleSecondary),
        ...(size === 'small'
          ? StyleSmall
          : size === 'medium'
          ? StyleMedium
          : size === 'large'
          ? StyleLarge
          : []),
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}

const StyleDefault = [
  'font-bold',
  'rounded-full',
  'cursor-pointer',
  'inline-block',
  'leading-none',
]
const StylePrimary = ['text-white', 'bg-blue-400']
const StyleSecondary = ['text-white', 'bg-gray-500']
const StyleSmall = ['text-sm', 'px-2', 'py-2']
const StyleMedium = ['text-base', 'px-3', 'py-2.5']
const StyleLarge = ['text-lg', 'px-4', 'py-3']
