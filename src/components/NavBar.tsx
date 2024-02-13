import { Navbar as NavBarbs, Container, Nav, Button} from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { useShoppingCartContext } from "../context/ShoppingCartContext"
import { ShoppingCart } from "./ShoppingCart";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { toggleIsOpen } from "../redux/cartSlice";
import { current } from "@reduxjs/toolkit";

export function NavBar() {
    const navigate = useNavigate();
    const {openCart,cartQuantity} = useShoppingCartContext();
    const store = useAppSelector(store=> store.cart);
    const quantity = store.items.reduce((quantity,item) => item.quantity+ quantity , 0);
    const dispatch = useAppDispatch();
    const temp = () =>{
        navigate("/store");
    }
    const showCart = () =>{
        openCart()
    }
    
    
    return (
        <NavBarbs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink} > Home </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}> Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}> About</Nav.Link>
                    <Nav.Link to="/form" as={NavLink}> Form</Nav.Link>
                </Nav> 
                <Button onClick={()=>dispatch(toggleIsOpen(!store.isOpen))}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
                    <div className="rounded-circle" 
                        style={{
                            color:"black", 
                            position:"absolute"
                        }}>
                            {quantity}
                        </div>
                </Button>
            </Container>
        </NavBarbs>
    )
}