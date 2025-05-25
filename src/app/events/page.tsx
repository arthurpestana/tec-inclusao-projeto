'use client'

import { HeaderContent } from '@/components/structure/HeaderContent';
import styles from './page.module.scss';
import { NavBar } from '@/components/structure/NavBar';
import { EventContent } from './_ui/EventContent';
import { FooterContent } from '@/components/structure/FooterContent';
import { MainContent } from '@/components/structure/MainContent';
import { MoreEvents } from './_ui/MoreEvents';

export default function EventsPage() {
    return (
        <div className={styles.events__page}>
            <HeaderContent height='50vh' style={{ backgroundImage: 'url(/images/banner2.png)', backgroundPosition: 'top center' }}>
                <NavBar />
            </HeaderContent>
            <MainContent>
                <EventContent />
                <MoreEvents />
            </MainContent>
            <FooterContent />
        </div>
    );
}