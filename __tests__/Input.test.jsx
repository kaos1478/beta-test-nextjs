import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Input from '@/components/Input'

describe('Input', () => {
  it('renders an input', () => {
    render(<Input />)

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(<Input className="custom-class" />)

    const input = screen.getByRole('textbox')

    expect(input).toHaveClass('custom-class')
  })
})
