import React, { useEffect, useState } from 'react';

function OrderTable({ title, fetchUrl }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(fetchUrl)
            .then((response) => response.json())
            .then((data) => setOrders(data));
    }, [fetchUrl]);

    return (
        <div>
            <h2>{title}</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Buyer Qty</th>
                        <th>Buyer Price</th>
                        <th>Seller Price</th>
                        <th>Seller Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.buyer_qty}</td>
                            <td>{order.buyer_price}</td>
                            <td>{order.seller_price}</td>
                            <td>{order.seller_qty}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderTable;
