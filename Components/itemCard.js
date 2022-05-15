import React from 'react'
import { useSelector } from 'react-redux';

function itemCard({data}) {

    const { items } = useSelector((store) => store?.items);
    console.log(data);
  return (
    <div className='m-2 rounded-md border-2 border-blue-400 p-2 '>
        <div>Image</div>
        <div>Name {data?.name}</div>
        <div>{data?.description}</div>
        <div>{data?.price}</div>
        <div>{data?.stock}</div>
        <div></div>
    </div>
  )
}

export default itemCard