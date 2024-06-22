import React from 'react'
import { useAddNewProductMutation } from '../app/service/dummyData'

const AddNewProduct = () => {

    const [addNewProduct, {data, error, isLoading}] = useAddNewProductMutation()

    if (error) {
        return <h1>ERRO</h1>
    }

    if (isLoading) {
        return <h1>Error</h1>
    }

    const handleAddProduct = async () => {
        try {
            const newProductData = {
                id: 1,
                title: "Amazing Tshirt",
                description: "Oh Wait!",
            }
            await addNewProduct(newProductData)
        } catch (err) {
            console.log(err)
        }
    }

  return (
      <div>
          <h1>{ data?.title }</h1>
          
          <button onClick={handleAddProduct} disabled={isLoading}>Add New Product</button>
    </div>
  )
}

export default AddNewProduct