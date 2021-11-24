import React from 'react';

import classes from './CartItem.module.css';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

const CartItem = props => {
    return <li className={classes['cart-item']}>
        <div className={classes['cart-item_img']}>
            <img src={props.imgSrc} alt="cart-product" />
        </div>
        <div className={classes['cart-item_desc']}>
            {props.name}
            <div className={classes['cart-item_sub']}>
                <span>{props.color}</span>
                <span>{props.price}</span>
            </div>
            <div className={classes['cart-item_action']}>
                <div className={classes.actions}>
                    <button onClick={props.onRemove}><AiOutlineMinus /></button>
                    <span>{props.amount}</span>
                    <button onClick={props.onAdd}><AiOutlinePlus /></button>
                </div>  
                {props.price * props.amount}
            </div>
        </div>
    </li>
};

export default CartItem;