const VAT_RATE= 0.16;

function calculateTAX(basePrice, VAT_RATE) {
    if (basePrice < 0) {
        throw new Error("Base price cannot be negative");
    }
    return basePrice * VAT_RATE;
}