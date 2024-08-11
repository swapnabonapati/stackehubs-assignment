
import React, { useState } from 'react';

function OrderForm({ onOrderSubmit }) {
    const [buyerQty, setBuyerQty] = useState('');
    const [buyerPrice, setBuyerPrice] = useState('');
    const [sellerPrice, setSellerPrice] = useState('');
    const [sellerQty, setSellerQty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer_qty: parseInt(buyerQty),
            buyer_price: parseFloat(buyerPrice),
            seller_price: parseFloat(sellerPrice),
            seller_qty: parseInt(sellerQty),
        };
        onOrderSubmit(order);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Buyer Qty:</label>
                <input type="number" value={buyerQty} onChange={(e) => setBuyerQty(e.target.value)} />
            </div>
            <div>
                <label>Buyer Price:</label>
                <input type="number" value={buyerPrice} onChange={(e) => setBuyerPrice(e.target.value)} />
            </div>
            <div>
                <label>Seller Price:</label>
                <input type="number" value={sellerPrice} onChange={(e) => setSellerPrice(e.target.value)} />
            </div>
            <div>
                <label>Seller Qty:</label>
                <input type="number" value={sellerQty} onChange={(e) => setSellerQty(e.target.value)} />
            </div>
            <button type="submit">Submit Order</button>
        </form>
    );
}

export default OrderForm;
