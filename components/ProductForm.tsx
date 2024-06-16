'use client'

import { Product } from '@/types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { z } from 'zod'

import actions from '@/actions'
import { Button, Input } from '@/components'

const FormSchema = z.object({
  title: z.string().min(5).max(50),
  description: z.string().min(5).max(500),
  category: z.string().min(5).max(300),
  price: z.number().min(0),
  discountPercentage: z.number().min(0).max(100),
  rating: z.number().min(0).max(5),
  stock: z.number().int().min(0),
  tags: z.array(z.string().min(1)),
  brand: z.string().min(1).max(100),
  sku: z.string().min(1).max(50),
  weight: z.number().min(0),
  warrantyInformation: z.string().min(1).max(500),
  shippingInformation: z.string().min(1).max(500),
  availabilityStatus: z.string().min(1).max(50),
  returnPolicy: z.string().min(1).max(500),
  minimumOrderQuantity: z.number().int().min(1),
})

interface ProductFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: (product: any) => Promise<any>
  buttonText: string
  redirectTo: string
  productId?: Product['id']
}

type IErrors = {
  [key in keyof z.infer<typeof FormSchema>]: string[] | undefined
}

const ProductForm = ({
  action,
  buttonText,
  redirectTo = '/',
  productId,
}: ProductFormProps) => {
  const router = useRouter()
  const [initialValues, setInitialValues] = useState<Product | null>(null)
  const [errors, setErrors] = useState<IErrors | null>(null)

  useEffect(() => {
    if (productId) {
      const fetchProductDetails = async () => {
        const data: Product = await actions.fetchProduct(productId)
        setInitialValues(data)
      }

      fetchProductDetails()
    }
  }, [productId])

  const handleDelete = async () => {
    if (productId) {
      await toast.promise(actions.deleteProduct(productId), {
        pending: 'Deleting the product...',
        success: 'Product deleted successfully!',
        error: 'Error deleting the product!',
      })

      router.push('/')
    }
  }

  const handleFormAction = async (formData: FormData) => {
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

    const result = FormSchema.safeParse(newProduct)

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors as IErrors)
    } else {
      await toast.promise(action({ id: productId, product: newProduct }), {
        pending: 'Creating the product...',
        success: 'Product created successfully!',
        error: 'Error creating the product!',
      })

      router.push(redirectTo)
    }
  }

  if (productId && !initialValues) {
    return <div>Loading...</div>
  }

  return (
    <>
      <form action={handleFormAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <Input
            name="title"
            defaultValue={initialValues?.title || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={errors?.title?.length ? errors.title[0] : ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <Input
            name="description"
            defaultValue={initialValues?.description || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={
              errors?.description?.length ? errors.description[0] : ''
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <Input
            name="category"
            defaultValue={initialValues?.category || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={errors?.category?.length ? errors.category[0] : ''}
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
            defaultValue={initialValues?.price?.toString() || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={errors?.price?.length ? errors.price[0] : ''}
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
            defaultValue={initialValues?.discountPercentage?.toString() || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={
              errors?.discountPercentage?.length
                ? errors.discountPercentage[0]
                : ''
            }
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
            defaultValue={initialValues?.rating?.toString() || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={errors?.rating?.length ? errors.rating[0] : ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Stock
          </label>
          <Input
            name="stock"
            type="number"
            defaultValue={initialValues?.stock?.toString() || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={errors?.stock?.length ? errors.stock[0] : ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <Input
            name="tags"
            defaultValue={initialValues?.tags?.join(', ') || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={errors?.tags?.length ? errors.tags[0] : ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Brand
          </label>
          <Input
            name="brand"
            defaultValue={initialValues?.brand || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={errors?.brand?.length ? errors.brand[0] : ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">SKU</label>
          <Input
            name="sku"
            defaultValue={initialValues?.sku || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={errors?.sku?.length ? errors.sku[0] : ''}
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
            defaultValue={initialValues?.weight?.toString() || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={errors?.weight?.length ? errors.weight[0] : ''}
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
              defaultValue={initialValues?.dimensions?.width?.toString() || ''}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            <Input
              name="height"
              type="number"
              step="0.01"
              defaultValue={initialValues?.dimensions?.height?.toString() || ''}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            <Input
              name="depth"
              type="number"
              step="0.01"
              defaultValue={initialValues?.dimensions?.depth?.toString() || ''}
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
            defaultValue={initialValues?.warrantyInformation || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={
              errors?.warrantyInformation?.length
                ? errors.warrantyInformation[0]
                : ''
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Shipping Information
          </label>
          <Input
            name="shippingInformation"
            defaultValue={initialValues?.shippingInformation || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={
              errors?.shippingInformation?.length
                ? errors.shippingInformation[0]
                : ''
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Availability Status
          </label>
          <Input
            name="availabilityStatus"
            defaultValue={initialValues?.availabilityStatus || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={
              errors?.availabilityStatus?.length
                ? errors.availabilityStatus[0]
                : ''
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Return Policy
          </label>
          <Input
            name="returnPolicy"
            defaultValue={initialValues?.returnPolicy || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={
              errors?.returnPolicy?.length ? errors.returnPolicy[0] : ''
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Minimum Order Quantity
          </label>
          <Input
            name="minimumOrderQuantity"
            type="number"
            defaultValue={initialValues?.minimumOrderQuantity?.toString() || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            errorMessage={
              errors?.minimumOrderQuantity?.length
                ? errors.minimumOrderQuantity[0]
                : ''
            }
          />
        </div>
        <Button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          {buttonText}
        </Button>
      </form>
      {productId ? (
        <Button
          onClick={handleDelete}
          className="mt-4 w-full rounded-md bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-700"
        >
          Delete Product
        </Button>
      ) : (
        <></>
      )}
    </>
  )
}

export default ProductForm
