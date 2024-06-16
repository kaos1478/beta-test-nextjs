import actions from '@/actions'
import { ProductForm } from '@/components'

const CreateProduct = () => {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Create Product</h1>
      <ProductForm
        action={actions.createProduct}
        buttonText="Create Product"
        redirectTo="/"
      />
    </div>
  )
}

export default CreateProduct
