import React from 'react';

import classes from './Cart.module.css';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const Cart = props => {
    const cartItems = [
        {
            category: 'Bottom',
            name: 'Skate Pants',
            color: 'Deep blue',
            price: 30.09,
            imgSrc: '../../assets/product3.PNG',
            amount: 2
        }
    ].map(item => <li>{item.name}</li>);


    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total</span>
                <span>60.18</span>
            </div>
            <div className={classes.action}>
                <Button>Order</Button>
            </div>
        </Modal>
    )
};

export default Cart;