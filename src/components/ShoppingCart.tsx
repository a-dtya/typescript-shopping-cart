import { Offcanvas,Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItem from "..//data/items.json"
type ShoppingCartProps = {
    cartIsOpen: boolean
}
export function ShoppingCart({cartIsOpen}:ShoppingCartProps){
    const {closeCart,cartItem} = useShoppingCart()
    return(
        <Offcanvas show={cartIsOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {
                        cartItem.map(item => (
                            <CartItem key={item.id} {...item} />
                        ))
                    }
                    <div className="ms-auto fw-bold fs-4xl" >
                        Total{": "}{formatCurrency(cartItem.reduce((total,
                            item)=>{
                                const i = storeItem.find(k => k.id === item.id)
                                return total + (i?.price || 0)*item.quantity
                            },0))
                            }
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}