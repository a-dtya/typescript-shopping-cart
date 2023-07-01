import {Container,Navbar as NavbarBs,Nav,Button } from 'react-bootstrap'
import {NavLink} from "react-router-dom"
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar(){
    const {cartQuantity,openCart}  = useShoppingCart()
    return(
        
            <NavbarBs sticky='top' className='bg-white shadow-sm mb-2'>
                <Container>
                    <Nav className='me-auto'>
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                    </Nav>{
                        cartQuantity>0 && (
                    <Button  onClick={openCart} style={{width:"3em",height:"3rem",position:"relative"}} variant='outline-primary' className="rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-garden-cart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path>
   <path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055"></path>
   <path d="M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323"></path>
</svg>
<div className='rounded-circle d-flex justify-content-center align-items-center bg-danger'
style={{width:"1.5rem", height:"1.5rem", position:"absolute",color:"white",right:"0",bottom:"0",transform:"translate(25%,25%)"}}
>{cartQuantity}</div>
                    </Button>
                    )
}
                </Container>
            </NavbarBs>
           
        
    )
}