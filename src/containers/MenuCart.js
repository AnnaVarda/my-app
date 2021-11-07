import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Cart from "./Cart";

function MenuCart() {
    const [menuData, setMenuData] = useState({
      "2342153": {
        productName: "Private Class",
        price: 30
      },
      "12364324": {
        productName: "Intermediate Group Class",
        price: 60
      },
      "7893424": {
        productName: "Advanced Group Class",
        price: 70
      }
    });


    const [cartData, setCartData] = useState({});
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        Object.keys(cartData).map((sku, _) => {
            let qty = cartData[sku];
            let price = menuData[sku].price;
            total += qty * price;
        })

        setCartTotal(total);
    }, [cartData])

    const addToCart = sku => {
        let newCart = { ...cartData };

        if (sku in cartData) {
            newCart[sku] += 1;
        } else {
            newCart[sku] = 1;
        }

        setCartData(newCart);
    };

    const reduceFromCart = sku => {
        let newCart = { ...cartData };

        if (sku in cartData) {
            newCart[sku] -= 1;

            if (newCart[sku] < 1) delete newCart[sku];
        }
        setCartData(newCart);
    };

    return (
    <div id="menu-cart">
        <Menu menu={menuData} addToCart={addToCart}/>
        <Cart 
        total={cartTotal} 
        menu={menuData} 
        cart={cartData} 
        reduceCart={reduceFromCart}/>
    </div>
  );
}

export default MenuCart;