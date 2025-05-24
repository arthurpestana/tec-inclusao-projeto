import style from './page.module.scss';
import { useSearchParams } from 'next/navigation';
import eventTimeline from '../../../../lib/data/home/eventsTimeline.json';
import { SlideComponent } from '@/components/comp/SlideComponent';

export const EventSpeaker = () => {
    const searchParams = useSearchParams();

    const eventData = {
        id: searchParams.get('id') || ''
    }

    const event = eventTimeline.find(event => event.id == Number(eventData.id));

    if(!event) return <p>Evento não encontrado</p>

    return(
        <div className={style.event_speaker_content}>
            <SlideComponent/>
        </div>
    );
}