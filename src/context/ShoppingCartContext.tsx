import {createContext, useContext, ReactNode, useState} from "react"

type ShoppingCartContext = {
    getItemQuantity: (id:number)=>number
    increaseQuantity: (id:number)=>void
    decreaseQuantity: (id:number)=>void
    removeItem: (id:number)=>void 
}
type CartItem = {
    id: number
    quantity: number
}
type ShoppingCartProps = {
    children: ReactNode
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProps){
    const [cartItem,setCartItem] = useState<CartItem[]>([])
    function getItemQuantity(id: number){
        return cartItem.find(item => item.id === id)?.quantity || 0
    }
    function increaseQuantity(id: number){
        setCartItem(currItem => {
            if(currItem.find(item => item.id === id)==null){
            return [...currItem,{id,quantity:1}]
        }else{
            return currItem.map(item =>{
                if(item.id === id){
                    return {...item, quantity:item.quantity+1}
                }else{
                    return item
                }
            })
        }})
    }
    function decreaseQuantity(id: number){
        setCartItem(currItem => {
            if(currItem.find(item => item.id === id)?.quantity === 1){
            return currItem.filter(item => item.id !== id)
        }else{
            return currItem.map(item =>{
                if(item.id === id){
                    return {...item, quantity:item.quantity-1}
                }else{
                    return item
                }
            })
        }})
    }
    function removeItem(id: number){
        setCartItem( currItem => {
            return currItem.filter(item => item.id !== id)
        })
    }
    return(
        <ShoppingCartContext.Provider value={{getItemQuantity,increaseQuantity,decreaseQuantity,removeItem}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}