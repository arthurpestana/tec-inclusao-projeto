import React from 'react';
import styles from './SectionTitle.module.scss'

type SectionTitleProps = {
    title: string;
    subtitle?: string;
    align?: 'flex-start' | 'center' | 'flex-end';
}

export const SectionTitle = ({ title, subtitle, align = 'center' }: SectionTitleProps) => {
    return (
        <div className={styles.sectionTitle__content} style={{ alignItems: align }}>
            <h3>{subtitle}</h3>
            <h2>{title}</h2>
        </div>
    )
}