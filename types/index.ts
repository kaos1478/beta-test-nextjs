interface Dimensions {
  length: number
  width: number
  height: number
}

interface Review {
  user: string
  comment: string
  rating: number
}

interface Meta {
  [key: string]: unknown
}

export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  images: string[]
  thumbnail: string
}

export interface ApiResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}
