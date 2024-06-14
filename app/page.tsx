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
        <SelectSortBy sortBy={sortBy} />
      </div>
      <section>
        {data?.products?.length ? (
          <>
            {data.products.map((item, index) => (
              <ProductCard
                key={`product-card-${item.id}-${index}`}
                product={item}
              />
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
