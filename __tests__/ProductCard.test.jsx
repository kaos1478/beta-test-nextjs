import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ProductCard from '@/components/ProductCard'

const product = {
  id: '1',
  title: 'Test Product',
  description: 'This is a test product.',
  price: 100,
  discountPercentage: 10,
  rating: 4.5,
  stock: 20,
  tags: ['test', 'product'],
  brand: 'Test Brand',
  sku: 'TEST123',
  weight: 1.5,
  dimensions: { width: 10, height: 5, depth: 2 },
  warrantyInformation: '1 year',
  shippingInformation: 'Ships in 3 days',
  availabilityStatus: 'In Stock',
  returnPolicy: '30 days',
  minimumOrderQuantity: 1,
  thumbnail: '/test-thumbnail.jpg',
  images: ['/test-thumbnail.jpg'],
  reviews: [],
  meta: {},
}

describe('ProductCard', () => {
  it('renders product information', () => {
    render(<ProductCard product={product} />)

    const title = screen.getByText('Test Product')
    const description = screen.getByText('This is a test product.')
    const price = screen.getByText('$ 100')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(price).toBeInTheDocument()
  })
})
