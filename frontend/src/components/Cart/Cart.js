import React from "react";
import "./Cart.css";

function Cart() {
	return (
		<a
			href="/cart"
			className="btn btn--clear btn--square btn--hover-scale site-header__cart ajax-cart__toggle"
			aria-expanded="false"
			tabIndex=""
		>
			<svg
				aria-hidden="true"
				focusable="false"
				role="presentation"
				className="icon icon-header-bag"
				viewBox="0 0 27.2 27"
			>
				<path d="M19.6 9c-.2-5.1-2.7-9-6-9s-5.8 3.9-6 9h-4v18h20V9h-4zm-6-7c2.1 0 3.8 3.2 4 7h-8c.2-3.8 1.9-7 4-7zm-8 23V11h11v14h-11zm16 0h-3V11h3v14z"></path>
			</svg>
			<span className="icon__fallback-text">View cart</span>
			<span className="site-header__cart-bubble"></span>
		</a>
	);
}

export default Cart;
