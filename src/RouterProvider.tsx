import { BrowserRouter, Route, Routes } from "react-router-dom"

interface RouterProviderProps {
    children: React.ReactNode
}

export const RouterProvider = ({children}:RouterProviderProps) => (
    <BrowserRouter>
        {children}
    </BrowserRouter>
)