import React from 'react';
import styles from './HeaderTitle.module.scss'

type HeaderTitleProps = {
    title: string;
    subtitle?: string;
    align?: 'flex-start' | 'center' | 'flex-end';
}

export const HeaderTitle = ({ title, subtitle, align = 'center' }: HeaderTitleProps) => {
    return (
        <div className={styles.headerTitle__content} style={{ justifyContent: align }}>
            <h3>{subtitle}</h3>
            <h2>{title}</h2>
        </div>
    )
}