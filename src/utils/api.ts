// src/utils/api.ts

import { useAuth } from "@clerk/clerk-react"

export const useApi = () => {
  const { getToken } = useAuth()

  const makeRequest = async (
    endpoint: string,
    options: RequestInit = {} //allowing for custom options including body, methods, headers etc
  ): Promise<any> => {
    const token = await getToken()

    const defaultHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }

    const response = await fetch(`http://localhost:8000/api/${endpoint}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
    })

    const isJson = response.headers
      .get("content-type")
      ?.includes("application/json")

    if (!response.ok) {
      const errorData = isJson ? await response.json().catch(() => null) : null

      if (response.status === 429) {
        throw new Error("Daily quota exceeded")
      }

      throw new Error(errorData?.detail || "An error occurred")
    }

    return isJson ? response.json() : null
  }

  return { makeRequest }
}
