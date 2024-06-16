import { ProductForm } from '@/components'
import actions from '@/actions'

const EditProduct = ({ params }: { params: { id: string } }) => {
  const parsedId = Number(params.id)

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Edit Product</h1>
      <ProductForm
        action={actions.deleteProduct}
        buttonText="Edit Product"
        redirectTo={`/product/${params.id}`}
        productId={parsedId}
      />
    </div>
  )
}

export default EditProduct
