import React from 'react'

interface TabProps {
  title: string
  selected?: boolean
}

export const Tab: React.FC<TabProps> = ({ title, selected = false }) => (
  <button
    className={[...TabStyleDefault, ...(selected ? TabStyleSelected : [])].join(
      ' ',
    )}
  >
    {title}
  </button>
)

const TabStyleDefault = [
  'text-gray-600',
  'grow',
  'py-4',
  'px-6',
  'block',
  'hover:text-blue-500',
  'focus:outline-none',
]

const TabStyleSelected = [
  'text-blue-500',
  'border-b-2',
  'border-blue-500',
  'font-medium',
]

export const Tabs: React.FC = ({ children }) => (
  <nav className="flex bg-white">{children}</nav>
)
