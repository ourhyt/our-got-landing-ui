import { useApiData } from './useApiData'
import { Event } from '@/types/api'

export function useEvents(): {
  events: Event[]
  isLoading: boolean
  error: Error | null
} {
  const { data, isLoading, error } = useApiData()
  return {
    events: data?.events ?? [],
    isLoading,
    error: error instanceof Error ? error : null
  }
}