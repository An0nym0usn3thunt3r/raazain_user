'use client'
import { getProductDetails } from '@/lib/actions/actions'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import React from 'react'


const BreadCrumbs = ({ productInfo }: { productInfo: ProductType }) => {
  return (
    <Breadcrumbs>
        <BreadcrumbItem color='primary'>Home</BreadcrumbItem>        
        {
          productInfo.categories.length > 0 && 
          <BreadcrumbItem color='primary'>{productInfo.categories.map((category) => category.title)}</BreadcrumbItem>
        }
        {
          productInfo.collections.length > 0 && 
          <BreadcrumbItem color='primary'>{productInfo.collections.map((category) => category.title)}</BreadcrumbItem>
        }
        {
          productInfo.subcollections.length > 0 && 
          <BreadcrumbItem color='primary'>{productInfo.subcollections.map((category) => category.title)}</BreadcrumbItem>
        }
        <BreadcrumbItem className='line-clamp-1'>{productInfo.title}</BreadcrumbItem>
    </Breadcrumbs>
  )
}

export default BreadCrumbs