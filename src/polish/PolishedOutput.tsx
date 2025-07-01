import {Box, Heading, Text } from "@chakra-ui/react"

type PolishedOutputProps = {
    result: string | null
}

export default function PolishedOutput({result}: PolishedOutputProps) {
    if (!result) {
        return null
    }
    return (
        <Box mt={8} p={6} bg="gray.50" _dark={{ bg: 'gray.700' }} borderRadius="md" shadow="md" maxW="md" w="100%">
            <Heading as="h3" size="md" mb={2}>
                Polished Output
            </Heading>
            <Text whiteSpace="pre-line">
                {result}
            </Text>
        </Box>
    )
}