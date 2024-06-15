import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Textarea from '@/components/Textarea'

describe('Textarea', () => {
  it('renders a textarea', () => {
    render(<Textarea />)

    const textarea = screen.getByRole('textbox')

    expect(textarea).toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(<Textarea className="custom-class" />)

    const textarea = screen.getByRole('textbox')

    expect(textarea).toHaveClass('custom-class')
  })
})
