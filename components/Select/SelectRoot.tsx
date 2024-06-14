import { SelectHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export default function SelectRoot({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  const classNames = cn(
    'h-12 rounded-md border border-stroke pl-1 pr-10 select_box',
    className,
  )

  return (
    <select className={classNames} {...props}>
      {children}
    </select>
  )
}
