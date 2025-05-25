'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import {Swiper, SwiperSlide} from 'swiper/react';
import style from './page.module.scss'
import events from '@/lib/data/eventsTimeline.json';
import { useSearchParams } from 'next/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

export const SlideComponent = () => {

    const searchParams = useSearchParams();

    const eventData = {
        id: searchParams.get('id') || ''
    }

    const event = events.find(event => event.id == Number(eventData.id));

    if (!event) return <p>Evento não encontrado</p>

    return(
        <Swiper 
        modules={[Autoplay, Pagination]}
        className={style.event_speaker_content_container} 
        spaceBetween={30} 
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }} 
        loop>
            {event.responsibles.map((res, index) => (
                <SwiperSlide className={style.event_speaker_content_container_info} key={index}>
                    <div className={style.event_speaker_content_container_info_user}>
                        <Image 
                            src='/images/image.png'
                            alt='Palestrante'
                            width={450}
                            height={350}
                            objectFit='cover'
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>

                    <div className={style.event_speaker_content_container_info_speaker}>
                        <h2>{res.nome}</h2>
                        <p>{res.description}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}