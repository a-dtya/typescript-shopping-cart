import {createContext, useContext, ReactNode} from "react"

const ShoppingCartContext = createContext({})

type ShoppingCartProps = {
    children: ReactNode
}
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProps){
    return(
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}