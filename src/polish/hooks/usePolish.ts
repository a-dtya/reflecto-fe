import {useEffect, useState} from "react"

type QuotaResponse = {
    quota_remaining: number
    last_reset_at: string
}

export default function usePolish() {
    const [lastReset, setLastReset] = useState<Date | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [quota, setQuota] = useState<number | null>(null)

    async function fetchQuota() {
        try {
            const response = await fetch('/api/quota')
            if (!response.ok) {
                throw new Error('Failed to fetch quota')
            }
            const data: QuotaResponse = await response.json()
            setQuota(data.quota_remaining)
            setLastReset(new Date(data.last_reset_at))
        } catch (error) {
            setError(error as string)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fetchQuota()
    }, [])
    
    const resetTime = lastReset ? new Date(lastReset.getTime() + 24 * 60 * 60 * 1000) : null

    return {
        lastReset,
        resetTime,
        loading,
        error,
        quota,
        refetchQuota: fetchQuota    
    }
}