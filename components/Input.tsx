import { InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
}

const Input = ({ className, errorMessage = '', ...props }: IInput) => {
  const classNames = cn(
    'border-stroke h-12 rounded-md border px-2 bg-slate-100',
    className,
    { 'border-red-700': errorMessage },
  )

  return (
    <div className="relative">
      <input className={classNames} {...props} />
      {errorMessage ? (
        <div className="absolute right-2 rounded-b-md bg-red-700">
          <p className="px-2 text-xs text-white">{errorMessage}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Input
