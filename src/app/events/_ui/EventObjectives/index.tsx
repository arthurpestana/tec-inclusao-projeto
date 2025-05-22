import style from './page.module.scss'
import { CircleAlert } from 'lucide-react';

export function EventObjectives(){
    return(
        <div className={style.event_objectives_content}>
            <div className={style.event_objectives_content_info}>
                
                <h2>Objetivos Específicos</h2>

                <div className={style.event_objectives_content_info_main}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, molestias ipsa? Error explicabo facilis dolor facere nemo sapiente expedita?</p>
                </div>

                <div className={style.event_objectives_content_info_main}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, molestias ipsa? Error explicabo facilis dolor facere nemo sapiente expedita?</p>
                </div>

                <div className={style.event_objectives_content_info_main}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, molestias ipsa? Error explicabo facilis dolor facere nemo sapiente expedita?</p>
                </div>

            </div>

            <CircleAlert size={150}/>
        </div>
    );
}