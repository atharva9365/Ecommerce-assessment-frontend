import React, { useContext } from 'react';
import { ShopContext } from "../../context/ShopContext";
import { useParams } from 'react-router';
import ProductDisplay from '../../components/productdisplay/ProductDisplay';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();

    // Find product by ID
    const product = all_product?.find((e) => e.id === Number(productId));

    
    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div>
            <ProductDisplay product={product}/>
        </div>
    );
};

export default Product;
