import Link from 'next/link'
import { Suspense } from 'react'

import SelectSortBy from '@/components/SelectSortBy'
import actions from '@/actions'
import { ApiResponse } from '@/types'
import { LoadMore, ProductCard } from '@/components'

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { search, sortBy } = searchParams

  const data: ApiResponse = await actions.fetchProducts({
    limit: 10,
    skip: 0,
    sortBy,
    search,
  })

  return (
    <main className="">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Products</h2>
        <Suspense>
          <SelectSortBy sortBy={sortBy} />
        </Suspense>
      </div>
      <section>
        {data?.products?.length ? (
          <>
            {data.products.map((item, index) => (
              <Link
                key={`product-card-${item.id}-${index}`}
                href={`/product/${item.id}`}
              >
                <ProductCard product={item} />
              </Link>
            ))}
            <LoadMore sortBy={sortBy} search={search} />
          </>
        ) : (
          <h3>No Products found for search</h3>
        )}
      </section>
    </main>
  )
}
