import { NextResponse } from 'next/server'
 
export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  const data = "users"
 
  return NextResponse.json({ data })
}