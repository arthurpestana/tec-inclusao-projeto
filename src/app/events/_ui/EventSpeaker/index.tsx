'use client'

import style from './page.module.scss';
import { useSearchParams } from 'next/navigation';
import events from '@/lib/data/eventsTimeline.json';
import { SlideComponent } from '@/components/comp/SlideComponent';

export const EventSpeaker = () => {
    const searchParams = useSearchParams();

    const eventData = {
        id: searchParams.get('id') || ''
    }

    const event = events.find(event => event.id == Number(eventData.id));

    if(!event) return <p>Evento não encontrado</p>

    return(
        <div className={style.event_speaker_content}>
            <h1>Organizadores</h1>
            <SlideComponent/>
        </div>
    );
}