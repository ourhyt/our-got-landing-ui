import { useApiData } from './useApiData'
import { Contact } from '@/types/api'

export function useContact(): {
  contact: Contact
  isLoading: boolean
  error: Error | null
} {
  const { data, isLoading, error } = useApiData()
  return {
    contact: data?.contact ?? {
      id: '',
      email_demo: '',
      email_info: '',
      instagram: '',
      tiktok: '',
      youtube: '',
      soundcloud: ''
    },
    isLoading,
    error: error instanceof Error ? error : null
  }
}