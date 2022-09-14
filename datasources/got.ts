import axios from 'axios'

export const got = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type, Accept'
  },
  params: {
    pageSize: 50
  },
  baseURL: process.env.NEXT_PUBLIC_GOT_URL,
})
