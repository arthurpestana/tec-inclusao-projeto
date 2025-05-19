'use client';

import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
    label?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    onClick: () => void;
    disabled?: boolean;
    variant?: 'text' | 'outlined' | 'contained';
}

export const Button = ({ label, icon, iconPosition = 'right', onClick, disabled, variant = 'contained' }: ButtonProps) => {
    const variantClass = styles[`button__content__${variant}`];
    const iconClass = !label && icon ? styles[`button__content__onlyIcon`] : '';

    return (
        <button
            className={`${styles.button__content} ${iconClass} ${variantClass}`}
            style={{ flexDirection: iconPosition == 'left' ? 'row-reverse' : 'row' }}
            onClick={onClick}
            disabled={disabled}
        >
            <span className={styles.button__content__label}>
                {label}
            </span>
            {icon && <span className={styles.button__content__icon}>
                {icon}
            </span>}
        </button>
    )
}