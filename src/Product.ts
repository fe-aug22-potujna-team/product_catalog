export interface Product {
  id: number
  category: string
  phoneId: string
  itemId: string
  name: string
  fullPrice: number
  price: number
  screen: string
  capacity: string
  color: string
  ram: string
  year: number
  image: string
}

interface description {
  title: string
  text: string
}

export interface Product2 {
  id: string
  namespaceId: string
  name: string
  capacityAvailable: string[]
  capacity: string
  priceRegular: number
  priceDiscount: number
  colorsAvailable: string[]
  color: string
  images: string[]
  description: description[]
  screen: string
  resolution: string
  processor: string
  ram: string
  camera: string
  zoom: string
  cell: string[]
}
