interface Product {
    name: string;
    price: number;
    quantity: number;
}

function calculateTotal(products: Product[], taxRate: number = 0.1): number {
    const subtotal = products.reduce((acc, product) => {
        return acc + product.price * product.quantity;
    }, 0);

    const total = subtotal * (1 + taxRate);
    return Math.floor(total);
}

// テスト
const cart: Product[] = [
    { name: "TypeScript入門書", price: 2980, quantity: 1 },
    { name: "プログラミングノート", price: 500, quantity: 3 },
    { name: "マウスパッド", price: 1200, quantity: 1 },
];

console.log(`合計金額（税込）: ${calculateTotal(cart)}円`);
console.log(`合計金額（税率8%）: ${calculateTotal(cart, 0.08)}円`);
