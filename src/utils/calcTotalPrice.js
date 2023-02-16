export const calcTotalPrice = (cartItems) => {
    return +cartItems.reduce((sum, obj) => (obj.discount > 0 ? (obj.price - (obj.price * +obj.discount) / 100) * obj.count + sum : obj.price * obj.count + sum), 0)
}