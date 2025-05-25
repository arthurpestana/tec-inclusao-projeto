import React from 'react';
import styles from './HomeLocation.module.scss'    
import { SectionTitle } from '@/components/comp/SectionTitle';
import { useScreenSize } from '@/context/ScreenSizeContext';

export const HomeLocation = () => {
    const { isMobile } = useScreenSize();

    return (
        <div className={styles.homeLocation__content} id='location'>
            <div className={styles.homeLocation__content__information}>
                <SectionTitle
                    title="Localização"
                    subtitle="Encontre-nos aqui"
                    align={isMobile ? "center" : "flex-start"}
                />
                <p>O evento será realizado no Campus Palmas da UNITINS — Universidade Estadual do Tocantins, um espaço preparado para receber todos os participantes com conforto e acessibilidade. Esperamos por você!</p>
            </div>
            <div className={styles.homeLocation__content__map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.670892195249!2d-48.3555156744371!3d-10.18733706245371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9324cb42b5bdc9e3%3A0xc8bc313ba13e5ae4!2sUNITINS%20-%20Campus%20Palmas!5e0!3m2!1spt-BR!2sbr!4v1747891676674!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
            </div>
        </div>
    )
}