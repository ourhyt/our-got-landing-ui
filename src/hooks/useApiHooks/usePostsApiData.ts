import { useApiData } from './useApiData'
import { Post } from '@/types/api'

export function usePosts(): {
  posts: Post[]
  isLoading: boolean
  error: Error | null
} {
  const { data, isLoading, error } = useApiData()
  return {
    posts: data?.posts ?? [],
    isLoading,
    error: error instanceof Error ? error : null
  }
}