import React, { useContext } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {
    const cartCtx = useContext(CartContext);

    const hasItems = cartCtx.items.length > 0;
    
    const cartItemRemoveHanlder = id => {
        cartCtx.removeItem(id)
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
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


    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total</span>
                <span>{`$${cartCtx.total.toFixed(2)}`}</span>
            </div>
            <div className={classes.action}>
                {hasItems && <button className={classes['order-button']}>Order</button>}
            </div>
        </Modal>
    )
};

export default Cart;
