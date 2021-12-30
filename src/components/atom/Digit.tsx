import React from 'react'

export interface DigitProps {
  num: number | string
}

export const Digit: React.FC<DigitProps> = ({ num }) => (
  <div className="h-44 w-20 flex items-center justify-center bg-white">
    <span className="block text-9xl text-rose-600">{num}</span>
  </div>
)

export default Digit
