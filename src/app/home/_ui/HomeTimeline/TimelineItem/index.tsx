import React from 'react';
import styles from './TimelineItem.module.scss'
import { Button } from '@/components/comp/Button';
import { useRouter } from 'next/navigation';
import { AccessTimeOutlined, LocationOnOutlined } from '@mui/icons-material';
import { TimelineItemData } from '@/lib/types/TimelineItemData';

type TimelineItemProps = TimelineItemData;


export const TimelineItem = ({ date, title, location, time, id }: TimelineItemProps) => {

    const router = useRouter();

    const handleClick = () => {
        const query = new URLSearchParams({id}).toString();

        router.push(`/events?${query}`);
    }


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
                    onClick={handleClick}
                />
            </div>
        </div>
    );
}