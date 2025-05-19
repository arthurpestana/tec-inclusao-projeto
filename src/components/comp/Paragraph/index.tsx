import React from 'react';
import styles from './Paragraph.module.scss';
import variables from '@/styles/variables.module.scss';

type ParagraphProps = {
    text: string;
    textColor?: 'dark' | 'light';
    textAlign?: 'left' | 'center' | 'right' | 'justify';
}

export const Paragraph = ({ text, textColor = 'dark', textAlign = 'justify' }: ParagraphProps) => {
    return (
        <div className={styles.paragraph__content} style={{ color: textColor == 'dark' ? variables.darkText : variables.lightText, textAlign: textAlign }}>
            <p>{text}</p>
        </div>
    )
}