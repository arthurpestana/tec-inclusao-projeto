'use client';

import React from 'react';
import styles from './HomeBanner.module.scss';
import { Button } from '@/components/comp/Button';

export const HomeBanner = () => {
    return (
        <div className={styles.banner__content}>
            <div className={styles.banner__content__main}>
                <div className={styles.banner__content__main__information}>
                    <h3>Em breve - evento unitins</h3>
                    <h1>3º Tec Inclusão</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
                </div>
                <div className={styles.banner__content__main__button}>
                    <Button 
                        variant='contained'
                        label='Inscreva-se'
                        onClick={() => {}}
                    />
                </div>
            </div>
        </div>
    )
}