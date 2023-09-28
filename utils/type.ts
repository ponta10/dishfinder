export interface Store {
  store_name: string
  score: number
  dinner: string
  lunch: string
  link: string
  google_rating: number
}

export interface ResponseType {
  [key: string]: Store[]
}

export interface StoreParams {
  prefecture: string
  area: string
  genre: string
  min_price: string
  max_price: string
  isAllDrinks?: string
  isAllEats?: string
  isLunch?: string
}

export interface FormParams {
  [key: string]: string | boolean
  area: string
  genre: string
  min: string
  max: string
  situation: string
  isAllDrinks: boolean
  isAllEats: boolean
  isLunch: boolean
}
