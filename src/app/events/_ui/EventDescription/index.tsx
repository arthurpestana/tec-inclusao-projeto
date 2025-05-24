import style from './page.module.scss'
import { useSearchParams } from 'next/navigation';
import eventsTimeLine from '../../../../lib/data/home/eventsTimeline.json';

export function EventDescription(){
    const searchParams = useSearchParams();
    
    const eventData = {
        id: searchParams.get('id') || '',
    }

    const event = eventsTimeLine.find( event => event.id == Number(eventData.id));

    if (!event) {
        return <p>Evento não encontrado.</p>;
    }

    return(
        <div className={style.event_description_content}>
            <div className={style.event_description_content_info}>
                <div className={style.event_description_content_info_header}>
                    <h1>{event.title}</h1>
                    <p>Palestrado por: {event.speaker}</p>
                </div>
                
                <div className={style.event_description_content_info_main}>
                    <h4>Descrição</h4>
                    <p>{event.description}</p>
                </div>      
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.670892195249!2d-48.3555156744371!3d-10.18733706245371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9324cb42b5bdc9e3%3A0xc8bc313ba13e5ae4!2sUNITINS%20-%20Campus%20Palmas!5e0!3m2!1spt-BR!2sbr!4v1747891676674!5m2!1spt-BR!2sbr" 
                width="600" 
                height="250" 
                style={{borderRadius: '24px'}} 
                loading="eager">
            </iframe>
        </div>
    );
}