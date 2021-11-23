import React, { useContext } from 'react';

import classes from './Header.module.css';
import Button from '../UI/Button';
import CartContext from '../../store/cart-context';

const Header = props => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)
    
    return (
        <div className={classes.header}>
            <h1 className={classes.logo}>objeto</h1>
            <ul className={classes.menu}>
                <li>Outer</li>
                <li>Top</li>
                <li>Bottom</li>
                <li>Shoes</li>
                <li>Acc</li>
            </ul>
            <Button onClick={props.onShowCart}>
                <span>Your Cart</span>    
                <span className={classes.badge}>
                    {numberOfCartItems}
                </span>
            </Button>
        </div>
    )
};

export default Header;
