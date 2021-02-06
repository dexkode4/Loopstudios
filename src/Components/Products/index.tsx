import React from 'react';
import Product from './Product';
import styles from './Products.module.scss';
import {productImagesSchema} from '../../assets/img/mobile';
import Button from '../Button';

type ProductsProps = {
    id: string
}

function Products({ id }: ProductsProps) {
    return (
        <div className={styles.products} id={id}>
            <header className={styles.productsHeader}>OUR CREATIONS</header>
            {
                productImagesSchema.map(({image,title}) => (
                    <Product imgSrc={image} title={title}/>
                ))
            }
            <Button text="SEE ALL"/>
        </div>
    )
}

export default Products
