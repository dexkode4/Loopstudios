import React from 'react'
import styles from './Products.module.scss';


type ProductProps = {
    imgSrc: string,
    title: string[]
}


function Product({ imgSrc, title }: ProductProps) {
    return (
        <div className={styles.product}>
            <div className={styles.productBgImg}
                style={{
                    backgroundImage: `url(${imgSrc})`
                }} />
            <div className={styles.productTitle}>
                <h1>{title[0]}</h1>
                <h1>{title[1]}</h1>
            </div>
        </div>
    )
}

export default Product
