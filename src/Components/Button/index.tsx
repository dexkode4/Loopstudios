import React from 'react'
import styles from './Button.module.scss';

type ButtonProps = {
    text: string
}

function Button({ text }: ButtonProps) {
    return (
        <div className={styles.button}>
            {text}
        </div>
    )
}

export default Button
