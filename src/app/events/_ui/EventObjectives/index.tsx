'use client'

import style from './page.module.scss'
import { CircleAlert } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import eventsTimeLine from '../../../../lib/data/home/eventsTimeline.json';

export const EventObjectives = () => {

    const searchParams = useSearchParams();

    const eventData = {
        id: searchParams.get('id') || '',
    }

    const event = eventsTimeLine.find( event => event.id == Number(eventData.id));

    if (!event) {
        return <p>Evento não encontrado.</p>;
    }

    return(
        <div className={style.event_objectives_content}>
            <div className={style.event_objectives_content_info}>
                
                <h2>Objetivos Específicos</h2>

                {event.objectives.map((obj, index) => (
                    <div className={style.event_objectives_content_info_main} key={index}>
                        <p>{obj}</p>
                    </div>
                ))}

            </div>

            <CircleAlert size={150}/>
        </div>
    );
}