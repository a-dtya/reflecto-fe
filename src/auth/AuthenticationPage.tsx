import { SignIn, SignUp, SignedIn, SignedOut } from '@clerk/clerk-react'
import { Box, Heading, Center } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom'

function AuthenticationPage() {
  return (
    <>
    <SignedOut>
      <Center minH="100vh" bg="gray.50" _dark={{ bg: 'gray.900' }} p={4}>
        <Box
          bg="white"
          _dark={{ bg: 'gray.800' }}
          p={8}
          rounded="md"
          shadow="md"
          maxW="md"
          w="100%"
        >
          <Heading mb={6} textAlign="center" size="lg">
            Sign In to Your Account. If you don't have an account, sign up.
          </Heading>
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
          <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
        </Box>
      </Center>
    </SignedOut>
    <SignedIn>
      <Navigate to="/" />
    </SignedIn>
    </>
  )
} 

export default AuthenticationPage
