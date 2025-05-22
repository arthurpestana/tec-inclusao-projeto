import style from './page.module.scss'
import { EventSubDescription } from "../EventSubDescription";
import { EventDescription } from '../EventDescription';
import { EventObjectives } from '../EventObjectives';
import { EventSpeaker } from '../EventSpeaker';
import { MoreEvents } from '../MoreEvents';

export function EventContent(){
    return(
        <div className={style.event_content}>
            <EventSubDescription/>
            <EventDescription/>
            <EventObjectives/>
            <EventSpeaker/>
            <MoreEvents/>
        </div>
    );
}