'use server'

import { ApiResponse } from '@/types'

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
