import { Offcanvas,Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
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
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}