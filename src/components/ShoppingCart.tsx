import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
type ShoppingCartProps = {
    cartIsOpen: boolean
}
export function ShoppingCart({cartIsOpen}:ShoppingCartProps){
    const {closeCart} = useShoppingCart()
    return(
        <Offcanvas show={cartIsOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                
            </Offcanvas.Body>
        </Offcanvas>
    )
}