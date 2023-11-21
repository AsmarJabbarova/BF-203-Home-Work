import React, { useEffect, useState } from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import axios from 'axios'

import { StarIcon,  } from '@chakra-ui/icons'
<StarIcon />



function Tablee( tablee, setTablee) {
  let[fav, setFav] = useState([])
  let [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get("https://6556185084b36e3a431f047a.mockapi.io/api/products").then((res)=>{
      setProducts(res.data)
    })
    let favArr =[]
    setFav(favArr)
  },[])
  return (
    <>``
<TableContainer>
  <Table variant='simple'>
  
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>price</Th>
        <Th>stockCount</Th>
        <Th>sale</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {products.map((elem)=>(
  <Tr key={elem.id}>
  <Td>{elem.id}</Td>
  <Td>{elem.name}</Td>
  <Td>{elem.stockCount}</Td>
  <Td>{elem.sale ? 'yes' : 'no'}</Td>
  <Td><button data-id={elem.id } onClick={(e)=>{
    let selectedProduct =""
    selectedProduct = products.find((elem)=> elem.id == e.target.getAttribute("data-id"))
    setFav(...fav,selectedProduct)
  }} ><StarIcon/> wish</button></Td>
  <Td><button>Add Button</button></Td>
</Tr>
      ))}
    
      
    </Tbody>
   
  </Table>
</TableContainer>
    </>
  )
}

export default Tablee