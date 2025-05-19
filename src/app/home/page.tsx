'use client';

import React from 'react';
import styles from './page.module.scss';
import { HomeAbout } from './_ui/HomeAbout';
import { HomeBanner } from './_ui/HomeBanner';
import { HomeObjectives } from './_ui/HomeObjectives';

export default function HomePage() {
    return (
        <div className={styles.home__page}>
            <HomeBanner />
            <HomeAbout />
            <HomeObjectives />
        </div>
    )
}