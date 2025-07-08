import { useState } from 'react'
import { useApi } from '../../utils/api'
export default function usePolish() {
  const [result, setResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { makeRequest } = useApi()

  const polishText = async (text: string) => {
    setIsLoading(true)
    setError(null)
    setResult(null)
   

    try {
      const res = await makeRequest('/polish/generate', {
        method: 'POST',
        body: JSON.stringify({ entry: text })
      })

      if (!res) throw new Error('Failed to polish entry')

      setResult(res.polished_output || '')
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    result,
    isLoading,
    error,
    polishText
  }
}
