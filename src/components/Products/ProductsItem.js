import React from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ProductsCount from './ProductsCount';
import classes from './ProductsItem.module.css';

const ProductsItem = props => {
    return (
        <Card>
            <li className={classes['products-item']}>
                <div className={classes.category}>{props.category}</div>
                <img src={props.imgSrc} alt="product"/>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.description}> 
                    <div className={classes.color}>{props.color}</div>
                    <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
                </div>
                <ProductsCount />
                <Button>Add Cart</Button>
            </li>
        </Card>
    )
};

export default ProductsItem;