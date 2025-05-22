'use client'

import { HeaderContent } from '@/components/structure/HeaderContent';
import styles from './page.module.scss';
import { NavBar } from '@/components/structure/NavBar';
import { EventContent } from './_ui/EventContent';

export default function EventsPage(){
    return (
        <div className={styles.events__page}>
            <HeaderContent height='100vh' style={{ backgroundImage: 'url(/images/banner.png)'}}>
                <NavBar/>
            </HeaderContent>
            <EventContent/>
        </div>
    );
}