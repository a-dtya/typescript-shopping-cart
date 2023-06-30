const CURRENCY = new Intl.NumberFormat(undefined,{
    currency:"INR",
    style:"currency"
})

export function formatCurrency(number:number){
    return CURRENCY.format(number)
}