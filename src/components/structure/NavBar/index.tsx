// NavBar.tsx
'use client';

import React, { useState } from 'react';
import Image from "next/image";
import styles from "./NavBar.module.scss";
import { NavItem } from "./NavItem";
import { NavItemType } from "@/lib/types/NavItemType";
import navbarItems from "@/lib/data/navbarItems.json";
import { Button } from "@/components/comp/Button";
import { Menu, X } from 'lucide-react';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navBar__content}>
      <div className={styles.navBar__content__logo}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={80}
          height={80}
          priority
        />
      </div>

      <div
        className={`${styles.navBar__content__items} ${
          isOpen ? styles.open : ''
        }`}
      >
        {navbarItems.map((item: NavItemType) => {
          if (item.isButton) {
            return (
              <Button
                key={item.href}
                label={item.label}
                onClick={() => window.open(item.href, "_blank")}
                variant="outlined"
                darkMode={true}
              />
            );
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

      <div
        className={styles.navBar__content__burger}
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
    </nav>
  );
};
