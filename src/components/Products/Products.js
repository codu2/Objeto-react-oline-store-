import React, { useEffect, useState } from 'react';

import ProductsIntro from './ProductsIntro';
import classes from './Products.module.css';
import ProductsItem from './ProductsItem';

const Products = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState();
    
    useEffect(() => {
        const fetchItems = async () => {
            setIsLoading(true);
            const response = await fetch('https://react-http-5552c-default-rtdb.firebaseio.com/items.json');
            const responseData = await response.json();

            if(!response.ok) {
                throw new Error('Something went wrong!');
            }

            const loadedItems = [];

            for (const key in responseData) {
                loadedItems.push({
                    id: key,
                    color: responseData[key].color,
                    imgSrc: responseData[key].imgSrc,
                    name: responseData[key].name,
                    price: responseData[key].price
                })
            }

            setItems(loadedItems);
            setIsLoading(false);
        }

        fetchItems().catch(error => {
            setIsLoading(false);
            setHasError(error.message);
        });
    }, [])

    if(isLoading) {
        return <p className={classes.loading}>Products Loading...</p>
    }

    if(hasError) {
        return <p className={classes.error}>{hasError}</p>
    }
    
    const products_List = product_items.map((item) => {
        return (
            <ProductsItem 
                key={item.id} 
                id={item.id} 
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
