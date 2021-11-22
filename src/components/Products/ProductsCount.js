import React, {useState} from 'react';

import classes from './ProductsCount.module.css';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

const ProductsCount = () => {
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
        <form className={classes.count}>
            <button onClick={minusCounterHandler}><AiOutlineMinus /></button>
            <input type="number" min="1" max="5" value={count} step="1" onChange={itemCountHandler}/>
            <button onClick={plusCounterHandler}><AiOutlinePlus /></button>
        </form>
    )
};

export default ProductsCount;