import { useState } from 'react'

export default function usePolish() {
  const [result, setResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const polishText = async (text: string) => {
    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch('/api/polish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      })

      if (!res.ok) throw new Error('Failed to polish entry')

      const data = await res.json()
      setResult(data.result || '')
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
