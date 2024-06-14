import Image from 'next/image'

import { Product } from '@/types'

const ProductCard = ({ product }: { product: Product }) => (
  <div className="border-stroke relative mt-3 box-border flex flex-col rounded-md border duration-500 hover:scale-105 md:flex-row">
    <div className="relative flex-shrink-0">
      <Image
        className="rounded-t-md object-cover md:rounded-l-md md:rounded-t-none"
        alt={product.title}
        width={300}
        height={300}
        src={product.thumbnail}
      />
      <p className="absolute left-2 top-2 rounded-sm bg-white bg-opacity-75 px-2 py-1 text-xs md:text-sm">
        {product.brand}
      </p>
    </div>
    <div className="relative w-full p-4">
      <h3 className="text-lg font-medium md:text-xl">{product.title}</h3>
      <p className="text-placeholder mb-8 mt-2 text-sm md:text-base">
        {product.description}
      </p>
      <p className="absolute bottom-4 left-4 text-sm md:text-base">
        Score: {product.rating}/5
      </p>
      <p className="absolute bottom-4 right-4 text-sm font-semibold">
        $ {product.price}
      </p>
    </div>
  </div>
)

export default ProductCard
