export interface UserDetail {
  pizzas: Pizza[]
  id: number
  email: string
  nickname: string
  isAdmin: boolean
}

export interface Pizza {
  quantity?: number
  id: number
  name: string
  price: number
}

export interface User {
  id: number
  email: string
  nickname: string
  isAdmin: boolean
}
