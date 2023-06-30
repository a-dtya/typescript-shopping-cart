import {Card, Button} from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
type StoreItemProps = {
    id:number,
    title:string,
    price:number,
    category:string,
    image:string
}


export function StoreItem({id,title,price,category,image}:StoreItemProps){
    const quantity = 0
    return(
        <>
        <Card className="h-100" key={id}>
        <Card.Img src={image} variant="top" style={{height:"200px",objectFit:"cover"}}/>
        <Card.Body className="d-flex flex-column ">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{title}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {
                    quantity === 0 ? (
                        <Button className="w-100">Add To Cart</Button>
                    ): (
                        <div className="d-flex flex-column align-items-center" style={{gap:"0.5rem"}}>
                            <div className="d-flex align-items-center justify-content-center" style={{gap:"0.5rem"}}>
                                <Button>-</Button>
                                <div>
                                    <span className="fs-3 me-1">{quantity}</span>in cart
                                </div>
                                <Button>+</Button>
                            </div>
                            <Button className="bg-danger" style={{height:"3rem",width:"4.5rem"}}>Remove</Button>
                        </div>
                    )
                }
            </div>
        </Card.Body>
    </Card>
        </>
    )
}