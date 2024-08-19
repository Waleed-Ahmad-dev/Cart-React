import { useState, useEffect } from 'react';
import BackButton from './BackButton';
import '../styles/cart.css';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("myItems")) || [];
        setCartItems(items);
    }, []);

    const deleteItem = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        localStorage.setItem("myItems", JSON.stringify(updatedItems));
    };

    function checkout () {
        if (cartItems.length === 0) {
            window.alert('Please Add Item to checkout')
        }
        else {
            window.alert("Your order has been placed");
            localStorage.removeItem("myItems");
            setCartItems([]);
        }
        
    }

    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <BackButton />
            <h1>Your Cart</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="cart-summary">
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h2 className="cart-item-title">{item.title}</h2>
                                <p className="cart-item-price">${item.price}</p>
                                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                                <button 
                                    onClick={() => deleteItem(item.id)} 
                                    className="delete-item-btn"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
                    </div>
                </div>
            )}
            
            <button onClick={() => checkout()} className="checkout-button">Proceed to Checkout</button>
        </div>
    );
}

export default Cart;