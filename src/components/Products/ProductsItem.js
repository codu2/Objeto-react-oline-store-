import React, { useContext } from 'react';

import Card from '../UI/Card';
import ProductsCount from './ProductsCount';
import classes from './ProductsItem.module.css';
import CartContext from '../../store/cart-context';

const ProductsItem = props => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            color: props.color,
            price: props.price,
            imgSrc: props.imgSrc,
            amount: amount
        });
        //이 객체는 item 객체임. addItem에 해당하는 함수는 item을 인수로 받음
    }
    
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
                <ProductsCount onAddToCart={addToCartHandler} />
            </li>
        </Card>
    )
};

export default ProductsItem;
