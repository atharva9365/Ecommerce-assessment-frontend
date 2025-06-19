import axios from 'axios';
import React, { createContext, useEffect, useState } from "react";
import all_product from "../assets/frontendassest/all_product";
import { toast } from "react-toastify";

export const ShopContext = createContext(null);
const BASE_URL = 'http://localhost:5000/api/cart'; 

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    
    useEffect(() => {
        axios.get(`${BASE_URL}/items`)
            .then((res) => {
                console.log("Cart items from api",res.data)
                const fetchedCart = getDefaultCart();
                res.data.forEach(item => {
                    fetchedCart[item.productId] = item.quantity;
                });
                setCartItems(fetchedCart);
            })
            .catch((err) => console.error('Error loading cart items:', err));
    }, []);

    const addToCart = async (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    const product = all_product.find(p => p.id === itemId);
    try {
        const res = await axios.post(`${BASE_URL}/add`, {
            productId: product.id,
            name: product.name,
            image: product.image,
            price: product.new_price,
            quantity: 1
        });
        console.log('Add to Cart Response:', res.data); 
        toast.success('Added to Cart');
    } catch (err) {
        console.error('Error adding to cart:', err);
    }
};


   const removeFromCart = async (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
    try {
        const res = await axios.get(`${BASE_URL}/items`);
        const item = res.data.find(p => p.productId === itemId);
        if (item) {
            const deleteRes = await axios.delete(`${BASE_URL}/remove/${item._id}`);
            console.log('Remove from Cart Response:', deleteRes.data); 
        }
    } catch (err) {
        console.error('Error removing from cart:', err);
    }
};


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find(product => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const contextValue = { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
