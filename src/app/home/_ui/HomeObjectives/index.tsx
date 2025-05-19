import React from 'react'
import styles from './HomeObjectives.module.scss'
import { Button } from '@/components/comp/Button'
import { HeaderTitle } from '@/components/comp/HeaderTitle'

export const HomeObjectives = () => {
    return (
        <div className={styles.objectives__content}>
            <HeaderTitle
                title='Propósito do evento'
                subtitle='Objetivos'
                align='center'
            />
            <div className={styles.objectives__content__main}>
                <div className={styles.objectives__content__main__item}>
                    <div className={styles.objectives__content__main__item__image}>

                    </div>
                    <div className={styles.objectives__content__main__item__text}>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={styles.objectives__content__button}>
                <Button
                    label='Ver mais'
                    onClick={() => { }}
                />
            </div>
        </div>
    )
}