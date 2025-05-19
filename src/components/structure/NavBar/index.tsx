'use client';

import Image from "next/image";
import styles from "./NavBar.module.scss";
import { NavItem } from "./NavItem";
import { NavItemType } from "@/lib/types/NavItemType";
import navbarItems from "@/lib/data/navbarItems.json";
import { Button } from "@/components/comp/Button";

export const NavBar = () => {
    return (
        <nav className={styles.navBar__content}>
            <div className={styles.navBar__content__logo}>
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    priority
                />
            </div>
            <div className={styles.navBar__content__items}>
                {navbarItems.map((item: NavItemType) => {
                    if (item.isButton) {
                        return (
                            <Button 
                                key={item.href}
                                label={item.label}
                                onClick={() => {
                                    window.open(item.href, "_blank");
                                }}
                                variant="outlined"
                            />
                        )
                    }
                    return (
                        <NavItem
                            key={item.label}
                            href={item.href}
                            label={item.label}
                        />
                    )
                })}
            </div>
        </nav>
    )
}