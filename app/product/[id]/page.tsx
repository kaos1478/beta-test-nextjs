import actions from '@/actions'
import { Product as TProduct } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const Product = async ({ params }: { params: { id: string } }) => {
  const data: TProduct = await actions.fetchProduct(params.id)

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-shrink-0">
          <Image
            src={data.thumbnail}
            alt={data.title}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="mb-4 text-2xl font-bold">{data.title}</h1>
          <p className="mb-2 text-gray-700">{data.description}</p>
          <p className="mb-2 text-gray-600">
            <strong>Category:</strong> {data.category}
          </p>
          <p className="mb-2 text-gray-600">
            <strong>Price:</strong> ${data.price}
          </p>
          <p className="mb-2 text-gray-600">
            <strong>Discount:</strong> {data.discountPercentage}%
          </p>
          <p className="mb-2 text-gray-600">
            <strong>Rating:</strong> {data.rating}/5
          </p>
          <p className="mb-2 text-gray-600">
            <strong>Stock:</strong> {data.stock}
          </p>
          <p className="mb-2 text-gray-600">
            <strong>Brand:</strong> {data.brand}
          </p>
          <p className="mb-2 text-gray-600">
            <strong>SKU:</strong> {data.sku}
          </p>
          <p className="mb-2 text-gray-600">
            <strong>Weight:</strong> {data.weight} kg
          </p>
          <p className="mb-2 text-gray-600">
            <strong>Dimensions:</strong> {data.dimensions.width} x{' '}
            {data.dimensions.height} x {data.dimensions.depth} cm
          </p>
          <p className="mb-2 text-gray-600">
            <strong>Warranty:</strong> {data.warrantyInformation}
          </p>
          <p className="mb-2 text-gray-600">
            <strong>Shipping:</strong> {data.shippingInformation}
          </p>
          <p className="mb-2 text-gray-600">
            <strong>Availability:</strong> {data.availabilityStatus}
          </p>
          <p className="mb-2 text-gray-600">
            <strong>Return Policy:</strong> {data.returnPolicy}
          </p>
          <p className="mb-2 text-gray-600">
            <strong>Minimum Order Quantity:</strong> {data.minimumOrderQuantity}
          </p>
          <p className="mb-2 text-gray-600">
            <strong>Barcode:</strong> {data.meta.barcode}
          </p>
          <Link legacyBehavior href={`/edit-product/${data.id}`}>
            <a className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
              Edit Product
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Reviews</h2>
        {data.reviews.map((review, index) => (
          <div key={index} className="mb-4 rounded-lg border p-4">
            <p>
              <strong>{review.reviewerName}</strong>{' '}
              <span className="text-sm text-gray-600">
                ({new Date(review.date).toLocaleDateString()})
              </span>
            </p>
            <p className="text-yellow-500">Rating: {review.rating}/5</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
