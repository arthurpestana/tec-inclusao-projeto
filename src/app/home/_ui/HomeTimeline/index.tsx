import React from 'react';
import styles from './HomeTimeline.module.scss';
import { SectionTitle } from '@/components/comp/SectionTitle';
import eventsTimeline from '@/lib/data/home/eventsTimeline.json'
import { TimelineItem } from './TimelineItem';

export const HomeTimeline = () => {
    return (
        <div className={styles.homeTimeline__content}>
            <SectionTitle title="Lista de Atividades Planejadas" subtitle="Cronograma do Evento" align="center" />
            <div className={styles.homeTimeline__content__list}>
                {eventsTimeline.map((event, index) => (
                    <TimelineItem 
                        key={index}
                        title={event.title}
                        onClick={() => { }}
                        date={event.date}
                        location={event.location}
                        time={event.time}
                    />
                ))}
            </div>
        </div>
    )
}