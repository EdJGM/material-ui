import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import '../App.css'; // Import the global styles

function ProductDetailPage({ products }) {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <Header />
            <div className="flex justify-center items-center">
                <div className="text-center">
                    <div className="flex justify-center">
                        <img src={product.image} alt="product" className="w-1/3 h-auto mb-2 mx-auto" />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    <p className="text-lg mb-4">{product.price}</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetailPage;