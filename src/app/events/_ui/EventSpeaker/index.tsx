import style from './page.module.scss'
import { ChevronLeft, ChevronRight, User} from 'lucide-react'

export function EventSpeaker(){
    return(
        <div className={style.event_speaker_content}>
            <div className={style.event_speaker_content_container}>
                <ChevronLeft color='white' size={50}/>
                <div className={style.event_speaker_content_container_info}>
                    <div className={style.event_speaker_content_container_info_user}>
                        <User color='white' size={50}/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quia. Itaque ratione quibusdam accusantium neque eius quas nesciunt, architecto iste cum, rem ut delectus aliquam laborum cupiditate, quam eligendi laudantium. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci qui et nostrum ut vero sequi minima dolores quos, natus reiciendis neque eveniet ad temporibus ex! Laudantium officiis ut sequi ullam.</p>
                </div>
                <ChevronRight color='white' size={50}/>
            </div>
        </div>
    );
}