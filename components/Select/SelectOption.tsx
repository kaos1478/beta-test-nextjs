import { OptionHTMLAttributes } from 'react'

export default function SelectOption({
  children,
  ...props
}: OptionHTMLAttributes<HTMLOptionElement>) {
  return <option {...props}>{children}</option>
}
