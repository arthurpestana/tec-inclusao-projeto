import { Button } from '@/components/comp/Button';
import style from './page.module.scss'
import { useSearchParams } from 'next/navigation';
import { TimelineItemData } from '@/lib/types/TimelineItemData';

export function EventSubDescription(){

    const searchParams = useSearchParams();

    const eventData: TimelineItemData = {
        date: {
            day: searchParams.get('day') || '',
            month: searchParams.get('month') || '',
            year: searchParams.get('year') || '',
        },
        title: searchParams.get('title') || '',
        location: searchParams.get('location') || '',
        time: searchParams.get('time') || '',
        type: searchParams.get('type') || ''
    }

    return(
        <div className={style.event_sub_description}>
            <div className={style.event_sub_description_info}>
                    <div className={style.event_sub_description_info_item}>
                        <h3>Data</h3>
                        <p>{`${eventData.date.day}/${eventData.date.month}/${eventData.date.year}`}</p>
                    </div>
                    <div className={style.event_sub_description_info_item}>
                        <h3>Horário</h3>
                        <p>{eventData.time}</p>
                    </div>
                    <div className={style.event_sub_description_info_item}>
                        <h3>Tipo do evento</h3>
                        <p>{eventData.type}</p>
                    </div>
                    <div className={style.event_sub_description_info_item}>
                        <h3>Localização</h3>
                        <p>{eventData.location}</p>
                    </div>
            </div>

            <Button
                label="Inscreva-se"
                onClick={() => window.open("https://youtube.com", "_blank")}
                variant="outlined"
                darkMode={false}
                />
        </div>
    );
}