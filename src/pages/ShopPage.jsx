import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import '../styles/shoppage.css'
import BackButton from "../components/BackButton";

function ShopPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <>
        <div className="backBtn">
            <BackButton />
        </div>
        <div className="shop-container">
            <h1>Shop</h1>
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        rating={product.rating}
                        discount={product.discount} // Assuming you add a discount field manually
                    />
                ))}
            </div>
        </div>
        </>
        
    )
}

export default ShopPage
