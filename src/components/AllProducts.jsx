import React from 'react'
import { useGetAllProductsQuery } from '../app/service/dummyData'

const AllProducts = () => {
    const {data, isError, isLoading} = useGetAllProductsQuery()
     if (isError) {
            return <h1>Oh no deadge</h1>
    }
    
    if (isLoading) {
            return <h1>I'm just loading</h1>
    }

  return (
    <div>
    {data?.products.map((p) => (
        <h1 key={p.id}>{p.title}</h1>
    ))}
</div>
  )
}

export default AllProducts