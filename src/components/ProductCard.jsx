/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import '../styles/productCard.css';
import { v4 as uuidv4 } from 'uuid';

function ProductCard(props) {
    const [id, setId] = useState('');

    useEffect(() => {
        setId(uuidv4());
    }, []);

    function AddToCart() {
        window.alert(`Product is Added to cart`);
        const items = JSON.parse(localStorage.getItem("myItems")) || [];
        const existingItem = items.find(item => item.id === id);

        if (existingItem) {
            // If the item is already in the cart, increase its quantity
            existingItem.quantity += 1;
        } else {
            // If the item is new, add it to the cart with a quantity of 1
            const newItem = {
                id: id,
                image: props.image,
                title: props.title,
                price: props.price,
                quantity: 1, // Add quantity property
            };
            items.push(newItem);
        }

        localStorage.setItem("myItems", JSON.stringify(items));
    }

    return (
        <div className="product-card">
            <img src={props.image} alt={props.title} className="product-image" />
            <h2 className="product-title">{props.title}</h2>
            <p className="product-price">${props.price}</p>
            <button onClick={() => AddToCart()} className="add-to-cart-btn">Add to Cart</button>
        </div>
    );
}

export default ProductCard;