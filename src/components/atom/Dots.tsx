import React from 'react'

export interface DotsProps {
  value: ':' | '.'
}

export const Dots: React.FC<DotsProps> = ({ value }) => (
  <div className="h-44 w-12 flex items-center justify-center bg-white">
    <span className="block text-9xl text-rose-600">{value}</span>
  </div>
)

export default Dots
