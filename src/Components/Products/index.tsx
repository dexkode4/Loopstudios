import React, { useState, useEffect } from 'react';
import Product from './Product';
import styles from './Products.module.scss';
import { productImagesSchema } from '../../assets/img/mobile';
import { productImagesSchemaDesktop } from '../../assets/img/desktop';
import Button from '../Button';

type ProductsProps = {
    id: string
}

function Products({ id }: ProductsProps) {
    const [imageSchema, setImageSchema] = useState(productImagesSchema);
    const [displayWidth, setDisplaywidth] = useState(window.innerWidth);

    const handleResize = () => {
        setDisplaywidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        if (displayWidth > 700) {
            setImageSchema(productImagesSchemaDesktop)
        }
        else {
            setImageSchema(productImagesSchema)
        }
    }, [displayWidth])

    return (
        <div className={styles.products} id={id}>
            <header className={styles.productsHeader}>OUR CREATIONS</header>
            <div className={styles.productsHeaderDesktop}>
                <header className={styles.productsHeader}>OUR CREATIONS</header>
                <Button text="SEE ALL" />
            </div>
            <div className={styles.productsContainer}>
                {
                    imageSchema.map(({ image, title }, index) => (
                        <Product imgSrc={image} title={title} key={index} />
                    ))
                }
            </div>
            <Button text="SEE ALL" />
        </div>
    )
}

export default Products
