import React, { useState, useRef } from 'react';

import classes from './ProductsCount.module.css';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

const ProductsCount = props => {
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        //카트에 추가하려는 아이템의 amount 값이 되는 것
        const enteredAmountNumber = +enteredAmount;
        //enteredAmount 값은 문자열이므로 숫자로 바꿔서 넘겨줌
        
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }
    
    const [count, setCount] = useState(1);

    const minusCounterHandler = (event) => {
        event.preventDefault();

        if(count > 1) {
            setCount(count - 1);
        } 
    }

    const plusCounterHandler = (event) => {
        event.preventDefault();

        if(count < 5) {
            setCount(count + 1);
        }
    }

    const itemCountHandler = event => {
        event.target.value = count;
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.count}>
                <button onClick={minusCounterHandler}><AiOutlineMinus /></button>
                <input type="number" id={props.id} min="1" max="5" value={count} ref={amountInputRef} step="1" onChange={itemCountHandler}/>
                <button onClick={plusCounterHandler}><AiOutlinePlus /></button>
            </div>
            <button className={classes['add-button']}>Add Cart</button>
        </form>
    )
};

export default ProductsCount;
