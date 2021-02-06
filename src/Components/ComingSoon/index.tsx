import React from 'react'
import gif from '../../assets/gif/inprogress.gif';
import styles from './ComingSoon.module.scss';

function ComingSoon() {
    return (
        <div className={styles.comingsoon}>
            <img src={gif} alt="in progress animation" />
            <p>Desktop view still in development , please switch to a mobile device</p>
        </div>
    )
}

export default ComingSoon
