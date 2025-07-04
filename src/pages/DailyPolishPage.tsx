import { Box, Text } from "@chakra-ui/react"
import usePolish from "../polish/hooks/usePolish"
import useQuota from "../polish/hooks/useQuota"
import DailyEntryForm from "../entry/DailyEntryForm"
import PolishedOutput from "../polish/PolishedOutput"

export default function DailyPolishPage() {
  const { result, isLoading, error, polishText } = usePolish()
  const {
    quota,
    resetTime,
    loading: quotaLoading,
    error: quotaError,
    refetchQuota
  } = useQuota()

  const handleSubmit = async (text: string) => {
    await polishText(text)
    await refetchQuota()
  }

  return (
    <Box maxW="600px" mx="auto" p={4}>
      {/* Entry Form */}
      <DailyEntryForm onSubmit={handleSubmit} isLoading={isLoading} disabled={quota === 0}/>

      {/* Quota Info */}
      <Box mt={4}>
        {quotaLoading ? (
          <Text>Checking quota...</Text>
        ) : quotaError ? (
          <Text color="red.500">{quotaError}</Text>
        ) : quota === 0 ? (
          <>
            <Text color="red.500">Quota exhausted for today.</Text>
            <Text fontSize="sm">
              Next reset: {resetTime?.toLocaleString() || "Unknown"}
            </Text>
          </>
        ) : (
          <Text>Quota remaining: {quota}</Text>
        )}
      </Box>

      {/* Error */}
      {error && <Text color="red.500" mt={4}>{error}</Text>}

      {/* Output */}
      <PolishedOutput result={result} />
    </Box>
  )
}
