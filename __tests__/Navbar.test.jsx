import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  useRouter: jest.fn(() => ({
    replace: jest.fn(),
  })),
}))

describe('Navbar', () => {
  it('renders the navbar with links and input', () => {
    render(<Navbar />)

    const heading = screen.getByText('Beta')
    const input = screen.getByPlaceholderText('Phone')
    const newButton = screen.getByText('New')

    expect(heading).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(newButton).toBeInTheDocument()
  })
})
