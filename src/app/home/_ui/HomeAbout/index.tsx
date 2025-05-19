import React from 'react';
import styles from './HomeAbout.module.scss';
import { HeaderTitle } from '@/components/comp/HeaderTitle';
import Image from 'next/image';
import aboutUs from "../../../../lib/data/aboutUs.json"

export const HomeAbout = () => {
    return (
        <div className={styles.aboutUs__content} id='aboutUs'>
            <div className={styles.aboutUs__content__image}>
                <Image 
                    src='/images/picture.png'
                    alt='Sobre nós'
                    width={500}
                    height={300}
                    objectFit='cover'
                    priority
                />
            </div>
            <div className={styles.aboutUs__content__main}>
                <HeaderTitle
                    title='Tec inclusão'
                    subtitle='Sobre nós'
                    align='flex-start'
                />
                <div className={styles.aboutUs__content__main__text}>
                    <p>{aboutUs.Description}</p>
                </div>
                <div className={styles.aboutUs__content__main__eventsQuant}>
                    <div>
                        <span>5+</span>
                    </div>
                    <span>Atividades</span>
                </div>
            </div>
        </div>
    )
}