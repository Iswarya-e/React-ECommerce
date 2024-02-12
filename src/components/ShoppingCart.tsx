import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { toggleIsOpen } from "../redux/cartSlice";

export function ShoppingCart() {
    const dispatch = useAppDispatch();
    const currentState = useAppSelector(store=> store.cart)
    if(currentState.isOpen) {
        return (
            <>
            <Offcanvas show={currentState.isOpen} onHide={()=> dispatch(toggleIsOpen(!currentState.isOpen))} placement="end">
                <Offcanvas.Header closeButton> 
                    <Offcanvas.Title>
                    Cart
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack gap={3}>
    
                    </Stack>
                </Offcanvas.Body>
                
            </Offcanvas></>
        )
    } else {
        return <></>
    }
   
}