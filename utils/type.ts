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
