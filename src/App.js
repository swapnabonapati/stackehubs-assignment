
import React from 'react';
import OrderForm from './components/OrderForm';
import OrderTable from './components/OrderTable';
import "./App.css"

function App() {
    const handleOrderSubmit = (order) => {
        fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });
    };

    return (
        <div className="App">
            <h1>Order Matching System</h1>
            <OrderForm onOrderSubmit={handleOrderSubmit} />
            <OrderTable title="Pending Orders" fetchUrl="/api/orders/pending" />
            <OrderTable title="Completed Orders" fetchUrl="/api/orders/completed" />
        </div>
    );
}

export default App;
