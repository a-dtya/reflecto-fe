// generate a sample layout tsx
import { Outlet, Link, Navigate } from "react-router-dom";
import {SignedIn, SignedOut, UserButton} from "@clerk/clerk-react"
import { Box, Heading } from "@chakra-ui/react";

// create a navbar component in layout
function Layout() {
    return (
        <>
        <SignedIn>
            {/* add a title of the application, along with links to history and create a new entry */}
            <Box display="flex" justifyContent="space-between" alignItems="center" p={4}>
                <Heading size="lg">Reflecto</Heading>
                <Box display="flex" gap={4} alignItems="center">
                    <Link to="/">Create Entry</Link>
                    <Link to="/history">History</Link>
                    <UserButton />
                </Box>
            </Box>
        </SignedIn>
        <SignedOut>
            {/* redirect without tab switch */}
            <Navigate to="/sign-in" replace/>
        </SignedOut>
        <SignedIn>
            <Outlet />
        </SignedIn>
        </>
    )
}

export default Layout
