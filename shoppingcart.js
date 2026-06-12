function calculateDiscount(totalAmount, couponCode){
    if (totalAmount < 0) return 0;

    if (couponCode === "SAVE10"){
        return totalAmount * 0.10;
    }
    return 0;
}

function cartSummary(items){
    if (items.length=== 0) return "Your cart is empty";
    if (items.length===1) return "You have 1 item in your cart";
    return `You have ${items.length} items in your cart`
}

module.exports = { calculateDiscount, cartSummary };
