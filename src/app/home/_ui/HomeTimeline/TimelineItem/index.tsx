import React from 'react';
import styles from './TimelineItem.module.scss'
import { Button } from '@/components/comp/Button';
import { AccessTimeOutlined, LocationOnOutlined } from '@mui/icons-material';

type TimelineItemProps = {
    date: {
        day: string;
        month: string;
        year: string;
    }
    title: string;
    location: string;
    time: string;
    onClick: () => void;
}

export const TimelineItem = ({ date, title, location, time, onClick }: TimelineItemProps) => {
    return (
        <div className={styles.timelineItem__content}>
            <div className={styles.timelineItem__content__date}>
                <h3>{date.day}</h3>
                <div className={styles.timelineItem__content__date__days}>
                    <span>{date.month}</span>
                    <span>{date.year}</span>
                </div>
            </div>
            <div className={styles.timelineItem__content__info}>
                <h4>{title}</h4>
                <div className={styles.timelineItem__content__info__text}>
                    <span><LocationOnOutlined/>{location}</span>
                    <span><AccessTimeOutlined/>{time}</span>
                </div>
            </div>
            <div className={styles.timelineItem__content__button}>
                <Button 
                    variant='contained'
                    label='Ver mais'
                    onClick={onClick}
                />
            </div>
        </div>
    )
}