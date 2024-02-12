import { Outlet } from "react-router-dom"
import { useShoppingCartContext } from "../context/ShoppingCartContext"

export function About() {
    const dummy = useShoppingCartContext()
    return <h1> <Outlet/></h1>
}