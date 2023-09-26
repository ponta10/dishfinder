import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const params = {
    prefecture: 'tokyo',
    area: searchParams.get('area'),
    genre: searchParams.get('genre'),
    min_price: searchParams.get('min'),
    max_price: searchParams.get('max'),
  }

  try {
    const response = await axios.get(`${process.env.API_URL}`, { params })
    return NextResponse.json(response.data)
  } catch (error) {
    return NextResponse.error()
  }
}
