import './App.css'
import ClerkProviderWithRoutes from './auth/ClerkProviderWithRoutes'
import { Routes, Route } from 'react-router-dom'
import AuthenticationPage from './auth/AuthenticationPage'
import Layout from './layout/Layout'

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes>
        <Route path="/sign-in/*" element={<AuthenticationPage />} />
        <Route path="/sign-up/*" element={<AuthenticationPage />} />
        <Route element={<Layout/>}>
          {/* <Route path="/" element={<Entry />} /> */}
          {/* <Route path="/history" element={<History />} /> */}
        </Route>
      </Routes>
    </ClerkProviderWithRoutes>
  )
}

export default App
