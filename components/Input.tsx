import { InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  const classNames = cn('border-stroke h-12 rounded-md border px-2', className)

  return <input className={classNames} {...props} />
}

export default Input
