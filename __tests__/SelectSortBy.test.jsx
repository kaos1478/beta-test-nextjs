import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SelectSortBy from '@/components/SelectSortBy'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  useRouter: jest.fn(() => ({
    replace: jest.fn(),
  })),
}))

describe('SelectSortBy', () => {
  it('renders a select element with options', () => {
    render(<SelectSortBy query={{}} />)

    const select = screen.getByRole('combobox')
    const options = screen.getAllByRole('option')

    expect(select).toBeInTheDocument()
    expect(options.length).toBeGreaterThan(0)
  })
})
