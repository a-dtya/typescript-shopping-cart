import { Stack,Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItem from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id,quantity}:CartItemProps){
    const {removeItem} = useShoppingCart()
    const item = storeItem.find(i => i.id === id)
    if(item == null){
        return null
    }
    return(
        <>
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.image} style={{width:'125px',height:"75px",objectFit:"cover"}}></img>
            <div className="me-auto">
                <div>
                    {item.title} {" "}{
                        <span className="text-muted" style={{fontSize:"0.65rem"}}>
                            X{quantity}
                        </span>
                    }
                </div>
                <div>
                    <span className="text-muted" style={{fontSize:"0.75rem"}}>
                        {formatCurrency(item.price)}
                    </span>
                </div>
            </div>
            <div>
                {formatCurrency(item.price*quantity)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={()=>removeItem(item.id)}>
                &times;
            </Button>
        </Stack>
        
        </>

    )
}