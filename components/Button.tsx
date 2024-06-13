import { ButtonHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const classNames = cn(
    'rounded-md bg-black px-4 font-medium text-white h-12',
    className,
  )

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}
