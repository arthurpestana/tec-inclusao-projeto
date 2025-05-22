import { Button } from '@/components/comp/Button';
import style from './page.module.scss'
import EventDetails from '../../../../lib/data/events/eventDetails.json'

export function EventSubDescription(){
    return(
        <div className={style.event_sub_description}>
            <div className={style.event_sub_description_info}>
                {EventDetails.map((dt, index) => (
                    <div className={style.event_sub_description_info_item} key={index}>
                        <h3>{dt.Title}</h3>
                        <p>{dt.Description}</p>
                    </div>
                ))}
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