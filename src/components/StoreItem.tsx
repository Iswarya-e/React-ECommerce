import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency"
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { decreaseItemQuantity, increaseItemQuantity } from "../redux/cartSlice";

type StoreItemProps = {
    id: number,
    image: string,
    name: string,
    price: number,
    details: string
}
export function StoreItem({id,image,price,details,name}: StoreItemProps) {
//using context
// const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart } = useShoppingCartContext();
   const dispatch = useAppDispatch();
   const state =  useAppSelector(store => store.cart)
  
  
   return (
        <>
            <Card className="h-100">

                <Card.Img 
                    variant="top"
                    src={image}
                    height="200px"
                    style={{objectFit: "cover"}}>

                </Card.Img>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>
                        <span>{name}</span>
                        <span className="ms-2"> {formatCurrency(price)}</span>
                    </Card.Title>
                
                    <Card.Text>
                        <span>{details}</span>
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer>
                    <div className="ms-auto">
                    {!state.items.find(item =>item.id === id)? <Button onClick={() =>dispatch(increaseItemQuantity(id))}> Add to Cart</Button> : 
                    <div>
                        <Button onClick={()=>dispatch(decreaseItemQuantity(id))}>-</Button> 
                        {state.items.find(item=> item.id === id)?.quantity} 
                        <Button onClick={() =>dispatch(increaseItemQuantity(id))}>+</Button>
                    </div>
                    }
                    </div>
                </Card.Footer>
            </Card>
        </>
    )
}