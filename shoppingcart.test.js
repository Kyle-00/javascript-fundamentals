const { calculateDiscount, cartSummary} =  require('./shoppingcart');

describe("Shopping Cart Tests", () => {
    describe("calculateDiscount", () => {
        test("Should return 10% when a valid coupon is applied", () => {
            const discount= calculateDiscount(100, "SAVE10");
            expect(discount).toBe(10);
        })
    })
})

describe("cartSummary", () => {
    test("Should return correct message for empty cart", () => {
        expect(cartSummary([])).toBe("Your cart is empty");
    })
}) 