import { useApiData } from './useApiData'
import { Set } from '@/types/api'

export function useSets(): {
  sets: Set[]
  isLoading: boolean
  error: Error | null
} {
  const { data, isLoading, error } = useApiData()
  return {
    sets: data?.sets ?? [],
    isLoading,
    error: error instanceof Error ? error : null
  }
}