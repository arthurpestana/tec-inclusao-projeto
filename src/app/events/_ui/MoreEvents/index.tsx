'use client'

import { CardEvent } from '@/app/events/_ui/MoreEvents/CardEvent';
import style from './page.module.scss'

export const MoreEvents = () => {
    return(
        <div className={style.more_events_content}>
            <h1>Veja Também</h1>

            <div className={style.more_events_content_cards}>
                <CardEvent
                    title="Mesa Redonda: O Futuro das Cidades"
                    description="Uma discussão sobre inovação urbana e sustentabilidade."
                    imageUrl="images/Background.png"
                />

                <CardEvent
                    title="Mesa Redonda: O Futuro das Cidades"
                    description="Uma discussão sobre inovação urbana e sustentabilidade."
                    imageUrl="images/Background.png"
                />

                <CardEvent
                    title="Mesa Redonda: O Futuro das Cidades"
                    description="Uma discussão sobre inovação urbana e sustentabilidade."
                    imageUrl="images/Background.png"
                />

                <CardEvent
                    title="Mesa Redonda: O Futuro das Cidades"
                    description="Uma discussão sobre inovação urbana e sustentabilidade."
                    imageUrl="images/Background.png"
                />

                <CardEvent
                    title="Mesa Redonda: O Futuro das Cidades"
                    description="Uma discussão sobre inovação urbana e sustentabilidade."
                    imageUrl="images/Background.png"
                />

                <CardEvent
                    title="Mesa Redonda: O Futuro das Cidades"
                    description="Uma discussão sobre inovação urbana e sustentabilidade."
                    imageUrl="images/Background.png"
                />
            </div>
        </div>
    );
}