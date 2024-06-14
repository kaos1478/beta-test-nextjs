'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { FormEvent } from 'react'

import actions from '@/actions'
import { Button, Input, Textarea } from '@/components'
import { Product } from '@/types'

const CreateProduct = () => {
  const router = useRouter()

  const handleAction = async (formData: FormData) => {
    const newProduct = {
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

    await toast.promise(actions.createProduct(newProduct), {
      pending: 'Creating the product...',
      success: 'Product created successfully!',
      error: 'Error creating the product!',
    })

    router.push('/')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Create Product</h1>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <Textarea
            name="description"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <Input
            name="category"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <Input
            name="tags"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Brand
          </label>
          <Input
            name="brand"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">SKU</label>
          <Input
            name="sku"
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            <Input
              name="height"
              type="number"
              step="0.01"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            <Input
              name="depth"
              type="number"
              step="0.01"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Shipping Information
          </label>
          <Input
            name="shippingInformation"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Availability Status
          </label>
          <Input
            name="availabilityStatus"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Return Policy
          </label>
          <Input
            name="returnPolicy"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <Button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Create Product
        </Button>
      </form>
    </div>
  )
}

export default CreateProduct
