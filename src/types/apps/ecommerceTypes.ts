export type Customer = {
  id: number
  customer: string
  customerId: string
  email: string
  country: string
  countryCode: string
  countryFlag?: string
  order: number
  totalSpent: number
  avatar: string
  status?: string
  contact?: string
}

export type ReferralsType = {
  id: number
  user: string
  email: string
  avatar: string
  referredId: number
  status: string
  value: string
  earning: string
}

export type ReviewType = {
  id: number
  product: string
  companyName: string
  productImage: string
  reviewer: string
  email: string
  avatar: string
  date: string
  status: string
  review: number
  head: string
  para: string
}

export type ProductType = {
  id: number
  productName: string
  category: string
  stock: boolean
  sku: number
  price: string
  qty: number
  status: string
  image: string
  productBrand: string
}

export type OrderType = {
  id: number
  order: string
  customer: string
  email: string
  avatar: string
  payment: number
  status: string
  spent: number
  method: string
  date: string
  time: string
  methodNumber: number
}

export type ECommerceType = {
  products: ProductType[]
  orderData: OrderType[]
  customerData: Customer[]
  reviews: ReviewType[]
  referrals: ReferralsType[]
}
