export type Property = {
  address: string | number
  price: number
  sqm: number | string
  num_rooms: number | string
  floor: number
  num_floors: number
  elevator: number | string
  parking: string
  id: string
  image?: string
}

export type Transactions = {
  properties: Array<Property>
  total: number
}