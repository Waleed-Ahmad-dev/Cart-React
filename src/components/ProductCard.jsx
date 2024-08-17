/* eslint-disable react/prop-types */

import '../styles/productCard.css'

function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={props.image} alt={props.title} className="product-image" />
            <h2 className="product-title">{props.title}</h2>
            <p className="product-price">${props.price}</p>
            <button onClick={() => {}} className="add-to-cart-btn">Add to Cart</button>
    </div>
    )
}

export default ProductCard
