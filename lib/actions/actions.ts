export const getCollections = async () => {
  const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
  return await collections.json()
}
export const getCategories = async () => {
  const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
  return await collections.json()
}
export const getSubCollections = async () => {
  const subcollections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sub_collection`)
  return await subcollections.json()
}

export const getCollectionDetails = async (collectionId: string) => {
  console.log("\n\n\ncollectionId : ")
  console.log(collectionId)
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
  return await collection.json()
}
export const getCategoriesDetails = async (categoriesId: string) => {
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${categoriesId}`)
  return await collection.json()
}
export const getSubCollectionsDetails = async (sub_collectionId: string) => {
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sub_collection/${sub_collectionId}`)
  return await collection.json()
}

export const getProducts = async () => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  return await products.json()
}

export const getProductDetails = async (productId: string) => {
  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
  return await product.json()
}

export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return await searchedProducts.json()
}

export const getOrders = async (customerId: string) => {
  const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
  return await orders.json()
}

export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
  return await relatedProducts.json()
}