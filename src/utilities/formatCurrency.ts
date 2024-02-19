const CURRENCY_FOMATTER =  new Intl.NumberFormat(undefined, {
    currency:'INR', style:'currency'
});
export function formatCurrency(number: number) {
    return  CURRENCY_FOMATTER.format(number)
}