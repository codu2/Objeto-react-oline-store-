import React from 'react';

import classes from './Header.module.css';
import Button from '../UI/Button';

const Header = props => {
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
            <Button>
                <span>Your Cart</span>    
                <span className={classes.badge}>
                    3
                </span>
            </Button>
        </div>
    )
};

export default Header;