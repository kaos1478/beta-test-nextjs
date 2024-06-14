'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import actions from '@/actions'
import { ApiResponse } from '@/types'
import { ProductCard } from '@/components'

let skip = 10

const LoadMore = ({
  sortBy,
  search,
}: {
  [key: string]: string | string[] | undefined
}) => {
  const { ref, inView } = useInView()
  const [data, setData] = useState<ApiResponse>({
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  } as ApiResponse)

  useEffect(() => {
    if (inView) {
      actions.fetchProducts({ limit: 10, skip, sortBy, search }).then((res) => {
        const tempProducts = [...data.products, ...res.products]
        setData({ ...res, products: tempProducts })
      })
      skip = skip + 10
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, sortBy, search])

  return (
    <>
      {data?.products?.length ? (
        data.products.map((item, index) => (
          <ProductCard
            key={`product-card-${item.id}-${index}`}
            product={item}
          />
        ))
      ) : (
        <></>
      )}
      <div ref={ref}></div>
    </>
  )
}

export default LoadMore
