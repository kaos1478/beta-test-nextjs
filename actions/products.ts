'use server'

import { ApiResponse, Product } from '@/types'

export const fetchProducts = async ({
  limit,
  skip,
  sortBy = '',
  search = '',
}: {
  limit: number
  skip: number
  sortBy?: string | string[] | undefined
  search?: string | string[] | undefined
}): Promise<ApiResponse> => {
  let tempUrl = ''

  if (search) {
    tempUrl = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}${sortBy}`
  } else {
    tempUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}${sortBy}`
  }

  const response = await fetch(tempUrl)

  const data = await response.json()

  return data
}

export const fetchProduct = async (id: Product['id']) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`)

  const data = await response.json()

  return data
}

export const updateProduct = async ({
  id,
  product,
}: {
  id: Product['id']
  product: Product
}) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })

  const data = await response.json()

  return data
}

export const deleteProduct = async (id: Product['id']) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    method: 'DELETE',
  })

  const data = await response.json()

  return data
}

export const createProduct = async ({ product }: { product: Product }) => {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })

  const data = await response.json()

  return data
}
