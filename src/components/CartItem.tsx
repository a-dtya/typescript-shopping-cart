import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItem from "../data/items.json"
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
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.image} style={{width:'125px',height:"75px",objectFit:"cover"}}></img>
        </Stack>

    )
}