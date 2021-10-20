import React from "react";

function Menu({ menu, addToCart }) {
    return (
      <div id="menu">
				<h2>Menu</h2>
				<div id="menu-area">

					{Object.keys(menu).map((k, index) => (
						<div className="menu-item" key={index}>
						<span className="menu-text">{`${menu[k].productName} - ${menu[k].price}`}</span>
						<span className="menu-action">
							<button onClick={() => addToCart(k)}>+</button>
						</span>
					</div>
					))}					
				</div>
			</div>
    );
}

export default Menu;