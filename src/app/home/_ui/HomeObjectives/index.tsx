import React from 'react'
import styles from './HomeObjectives.module.scss'
import { Button } from '@/components/comp/Button'
import { HeaderTitle } from '@/components/comp/HeaderTitle'
import ObjectivesInfo from "../../../../lib/data/homeObjectives.json"

export const HomeObjectives = () => {
    return (
        <div className={styles.objectives__content}>
            <HeaderTitle
                title='Propósito do evento'
                subtitle='Objetivos'
                align='center'
            />
            <div className={styles.objectives__content__main}>
                {ObjectivesInfo.map(((obj, index) => (
                    <div className={styles.objectives__content__main__item} key={index}>
                        <div className={styles.objectives__content__main__item__image}>
                            <h1>23</h1>
                        </div>
                        <div className={styles.objectives__content__main__item__text}>
                            <span>{obj.Description}</span>
                        </div>
                    </div>
                )))}
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