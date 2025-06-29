import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ClerkProvider } from '@clerk/clerk-react'
import {
  ChakraProvider,
  createSystem,
  defaultConfig
} from "@chakra-ui/react"

const system = createSystem(defaultConfig)


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </ClerkProvider>
  </StrictMode>
)
