import React from 'react';

import classes from './ProductsIntro.module.css';

const ProductsIntro = () => {
    return (
        <section className={classes.intro}>
            <h1>If you like it, wear it.</h1>
            <p>Style is not a display of wealth but an expression of imagination.</p>
            <p>Life is too short to wear boring clothes.</p>
            <p className={classes.link}>Shop Now</p>
        </section>
    )
}

export default ProductsIntro;