import React from 'react'
// components
import {
  WrapperTable,
  TableRow,
  TableHeading,
  TableData,
  CategorySpan,
} from './Products.styles'

// Context
import { useAppContext } from '../context'
import { useEffect } from 'react'

export const Products = () => {
  const {
    searchValue,
    ShowOnlyInStock,
    products,
    data,
    setSearchValue,
    setShowOnlyInStock,
    setProducts,
  } = useAppContext()

  useEffect(() => {
    console.log('ShowOnlyInStock: ', ShowOnlyInStock)
    setProducts(() =>
      data.filter((item) =>
        !ShowOnlyInStock
          ? item.name.includes(searchValue)
          : item.stocked && item.name.includes(searchValue)
      )
    )
  }, [ShowOnlyInStock, searchValue])

  const NameAndPrice = ['Name', 'Price']
  const uniqueCategorysArray = [
    ...new Set(products.map((item) => item.category)),
  ]

  console.log('uniqueCategorysArray:', uniqueCategorysArray)
  console.log('data:', data)
  console.log('products:', products)
  return (
    <WrapperTable>
      <thead>
        <TableRow>
          {NameAndPrice.map((heading) => (
            <TableHeading key={heading}>{heading}</TableHeading>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {uniqueCategorysArray.map((item) => (
          <React.Fragment key={item}>
            <TableRow>
              <TableHeading style={{ color: 'purple' }} colSpan={2}>
                {item}
              </TableHeading>
            </TableRow>

            {products.map((product) =>
              product.category === item ? (
                <TableRow key={product.name}>
                  <TableData color={product.stocked ? 'black' : 'red'}>
                    {product.name}
                  </TableData>
                  <TableData color={product.stocked ? 'blue' : 'red'}>
                    {product.price}
                  </TableData>
                </TableRow>
              ) : null
            )}
          </React.Fragment>
        ))}
      </tbody>
    </WrapperTable>
  )
}
