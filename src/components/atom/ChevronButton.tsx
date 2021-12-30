import React from 'react'

export interface ChevronButtonProps {
  type: 'up' | 'down'
  onClick?: () => void
}

export const ChevronButton: React.FC<ChevronButtonProps> = ({
  type,
  onClick,
}) => (
  <button
    type="button"
    className={[
      ...StyleDefault,
      ...(type === 'up' ? StyleUp : type === 'down' ? StyleDown : []),
    ].join(' ')}
    onClick={() => onClick && onClick()}
  >
    {type === 'up' && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    )}
    {type === 'down' && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    )}
  </button>
)

const StyleDefault = [
  'w-20',
  'flex',
  'bg-slate-300',
  'text-slate-500',
  'justify-center',
  'shadow-sm',
]
const StyleUp = ['rounded-t-md']
const StyleDown = ['rounded-b-md']

export default ChevronButton
