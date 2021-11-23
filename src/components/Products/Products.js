import React from 'react';

import ProductsIntro from './ProductsIntro';
import classes from './Products.module.css';
import ProductsItem from './ProductsItem';

const product_items = [
    {
        category: 'Outer',
        name: 'Leather Jacket',
        color: 'black',
        price: 60.19,
        imgSrc: '../../assets/product1.PNG'
    },
    {
        category: 'Top',
        name: 'Leather Sleeveless',
        color: 'black',
        price: 25.99,
        imgSrc: '../../assets/product2.PNG'
    },
    {
        category: 'Bottom',
        name: 'Skate Pants',
        color: 'Deep blue',
        price: 30.09,
        imgSrc: '../../assets/product3.PNG'
    },
    {
        category: 'Shoes',
        name: 'Leather Boots',
        color: 'Brown',
        price: 38.99,
        imgSrc: '../../assets/product4.PNG'
    },
    {
        category: 'Acc',
        name: 'Beanie',
        color: 'black',
        price: 16.5,
        imgSrc: '../../assets/product5.PNG'
    },
    {
        category: 'Acc',
        name: 'Sunglasses',
        color: 'Yellow',
        price: 18.99,
        imgSrc: '../../assets/product6.PNG'
    },
    {
        category: 'Acc',
        name: 'Sunglasses',
        color: 'Brown',
        price: 20.99,
        imgSrc: '../../assets/product7.PNG'
    },
];

const Products = props => {
    const products_List = product_items.map((item) => {
        return (
            <ProductsItem 
                key={Math.floor(Math.random() * 1000)} 
                id={Math.floor(Math.random() * 1000)} 
                category={item.category}
                name={item.name} 
                color={item.color} 
                price={item.price} 
                imgSrc={item.imgSrc} 
            />
        );
    })

    return (
        <section>
            <div className={classes['page-intro']}>
                <ProductsIntro />
                <div className={classes['intro-img']}>
                    <img src="../../assets/product6.PNG" alt="intro" />
                </div>
            </div>
            <ul className={classes['products-list']}>
                {products_List}
            </ul>
        </section>
    )
};

export default Products;