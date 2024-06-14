import { TextareaHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const Textarea = ({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const classNames = cn('border-stroke rounded-md border px-2 py-1', className)

  return <textarea className={classNames} {...props} />
}

export default Textarea
