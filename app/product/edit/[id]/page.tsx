'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

import actions from '@/actions'
import { Product } from '@/types'
import { Button, Input, Textarea } from '@/components'

const EditProduct = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data: Product = await actions.fetchProduct(params.id)
      setProduct(data)
    }

    fetchProductDetails()
  }, [params.id])

  const handleAction = async (formData: FormData) => {
    const updatedProduct = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      category: formData.get('category') as string,
      price: parseFloat(formData.get('price') as string),
      discountPercentage: parseFloat(
        formData.get('discountPercentage') as string,
      ),
      rating: parseFloat(formData.get('rating') as string),
      stock: parseInt(formData.get('stock') as string, 10),
      tags: (formData.get('tags') as string)
        .split(',')
        .map((tag) => tag.trim()),
      brand: formData.get('brand') as string,
      sku: formData.get('sku') as string,
      weight: parseFloat(formData.get('weight') as string),
      dimensions: {
        width: parseFloat(formData.get('width') as string),
        height: parseFloat(formData.get('height') as string),
        depth: parseFloat(formData.get('depth') as string),
      },
      warrantyInformation: formData.get('warrantyInformation') as string,
      shippingInformation: formData.get('shippingInformation') as string,
      availabilityStatus: formData.get('availabilityStatus') as string,
      returnPolicy: formData.get('returnPolicy') as string,
      minimumOrderQuantity: parseInt(
        formData.get('minimumOrderQuantity') as string,
        10,
      ),
    } as Product

    await toast.promise(
      actions.updateProduct({ id: params.id, product: updatedProduct }),
      {
        pending: 'Editing the product...',
        success: 'Product edited successfully!',
        error: 'Error editing the product!',
      },
    )

    router.push(`/product/${params.id}`)
  }

  const handleDelete = async () => {
    await toast.promise(actions.deleteProduct(params.id), {
      pending: 'Deleting the product...',
      success: 'Product deleted successfully!',
      error: 'Error deleting the product!',
    })

    router.push('/')
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Edit Product</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target as HTMLFormElement)
          handleAction(formData)
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <Input
            name="title"
            defaultValue={product.title}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <Textarea
            name="description"
            defaultValue={product.description}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <Input
            name="category"
            defaultValue={product.category}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <Input
            name="price"
            type="number"
            step="0.01"
            defaultValue={product.price}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Discount Percentage
          </label>
          <Input
            name="discountPercentage"
            type="number"
            step="0.01"
            defaultValue={product.discountPercentage}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <Input
            name="rating"
            type="number"
            step="0.1"
            defaultValue={product.rating}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Stock
          </label>
          <Input
            name="stock"
            type="number"
            defaultValue={product.stock}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <Input
            name="tags"
            defaultValue={product.tags.join(', ')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Brand
          </label>
          <Input
            name="brand"
            defaultValue={product.brand}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">SKU</label>
          <Input
            name="sku"
            defaultValue={product.sku}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Weight
          </label>
          <Input
            name="weight"
            type="number"
            step="0.1"
            defaultValue={product.weight}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Dimensions (Width, Height, Depth)
          </label>
          <div className="grid grid-cols-3 gap-4">
            <Input
              name="width"
              type="number"
              step="0.01"
              defaultValue={product.dimensions.width}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            <Input
              name="height"
              type="number"
              step="0.01"
              defaultValue={product.dimensions.height}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            <Input
              name="depth"
              type="number"
              step="0.01"
              defaultValue={product.dimensions.depth}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Warranty Information
          </label>
          <Input
            name="warrantyInformation"
            defaultValue={product.warrantyInformation}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Shipping Information
          </label>
          <Input
            name="shippingInformation"
            defaultValue={product.shippingInformation}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Availability Status
          </label>
          <Input
            name="availabilityStatus"
            defaultValue={product.availabilityStatus}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Return Policy
          </label>
          <Input
            name="returnPolicy"
            defaultValue={product.returnPolicy}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Minimum Order Quantity
          </label>
          <Input
            name="minimumOrderQuantity"
            type="number"
            defaultValue={product.minimumOrderQuantity}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <Button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Save Changes
        </Button>
      </form>
      <Button
        onClick={handleDelete}
        className="mt-4 w-full rounded-md bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-700"
      >
        Delete Product
      </Button>
    </div>
  )
}

export default EditProduct
