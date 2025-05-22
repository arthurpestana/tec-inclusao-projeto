import React from 'react';
import styles from './FooterContent.module.scss'
import Image from 'next/image';
import navbarItems from "@/lib/data/navbarItems.json";
import { NavItemType } from '@/lib/types/NavItemType';
import { NavItem } from '../NavBar/NavItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Button } from '@/components/comp/Button';
import InstagramIcon from '@mui/icons-material/Instagram';

export const FooterContent = () => {
    return (
        <footer className={styles.footer__content}>
            <div className={styles.footer__content__logo}>
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className={styles.footer__content__logo__img}
                />
            </div>
            <div className={styles.footer__content__nav}>
                {navbarItems.map((item: NavItemType) => {
                    if (item.isButton) {
                        return null
                    }
                    return (
                        <NavItem
                            key={item.label}
                            href={item.href}
                            label={item.label}
                        />
                    );
                })}
            </div>
            <div className={styles.footer__content__socials}>
                <Button
                    icon={<FacebookIcon />}
                    onClick={() => window.open("", "_blank")}
                    variant='text'
                    darkMode={true}
                />
                <Button
                    icon={<InstagramIcon />}
                    onClick={() => window.open("", "_blank")}
                    variant='text'
                    darkMode={true}
                />
            </div>
        </footer>
    )
}