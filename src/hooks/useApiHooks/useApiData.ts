import { useQuery } from '@tanstack/react-query'
import { ApiResponse } from '@/types/api'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.ourhyt.com'

async function fetchApiData(): Promise<ApiResponse> {
  const response = await fetch(`http://127.0.0.1:3000/public/home`)
  if (!response.ok) {
    throw new Error('Error al obtener los datos')
  }
  return response.json()
}

export function useApiData() {
  return useQuery<ApiResponse>({
    queryKey: ['apiData'],
    queryFn: fetchApiData,
    staleTime: 1000 * 60 * 5, // 5 minutos
    refetchOnWindowFocus: false
  })
} 