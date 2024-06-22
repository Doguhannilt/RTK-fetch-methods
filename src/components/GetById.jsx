import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dummyData'


const GetById = () => {

    const { data } = useGetProductByIdQuery(2)
    console.log(data)
  return (
      <div>{data.title} | {data.category}</div>
  )
}

export default GetById