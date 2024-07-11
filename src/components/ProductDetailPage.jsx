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
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow flex justify-center items-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center w-2/3">
                    <div className="flex justify-center mb-6">
                        <img
                            src={product.image}
                            alt="product"
                            className="max-w-xs max-h-80 mb-4 mx-auto rounded-lg object-contain" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-xl text-gray-700 mb-6">{product.price}</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        Buy
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetailPage;