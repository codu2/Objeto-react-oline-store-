import React, { useContext, useState } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);

    const hasItems = cartCtx.items.length > 0;
    
    const cartItemRemoveHanlder = id => {
        cartCtx.removeItem(id)
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    };
    
    const orderHandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler = (userData) => {
        fetch('https://react-http-5552c-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });

        setDidSubmit(true);
        cartCtx.clearCart();
    };
    
    const cartItems = cartCtx.items.map(item => 
        <CartItem 
            key={item.id} 
            id={item.id} 
            category={item.category}
            name={item.name} 
            color={item.color} 
            price={item.price} 
            imgSrc={item.imgSrc} 
            amount={item.amount}
            onRemove={cartItemRemoveHanlder.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />
    );

    const modalContent = (
        <React.Fragment>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total</span>
                <span>{`$${cartCtx.total.toFixed(2)}`}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
            {!isCheckout && <div className={classes.action}>
                {hasItems && <button className={classes['order-button']} onClick={orderHandler}>Order</button>}
            </div>}
        </React.Fragment>
    );

    const submitContent = (
        <React.Fragment>
            <p className={classes['submit-message']}>Successfully sent the order!</p>
            <button className={classes['close-button']} onClick={props.onClose}>Close</button>
        </React.Fragment>
    );


    return (
        <Modal onClose={props.onClose}>
            {!didSubmit && modalContent}
            {didSubmit && submitContent}
        </Modal>
    )
};

export default Cart;
