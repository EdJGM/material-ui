import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import '../App.css'; // Import the global styles

function HomePage({ products }) {
    return (
        <div>
            <Header />
            <main className="p-4">
                <h1 className="text-3xl font-bold mb-5 text-center">NUESTROS PRODUCTOS</h1>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;