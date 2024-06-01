import Link from "next/link";
import styles from "./IconComponent.module.scss"
import React from "react";
import { IconInterface, LinkIconInterface } from "@/types";

export const IconComponent = ({
    iconData
}: {
    iconData: IconInterface
}) => {
    return (
        <div className={`${styles['icon-container']} card`}>
            <div className={`${styles['container-icon-svg']}`}>
                <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className={`${styles['icon-svg']} ${styles[`fill-${iconData.color}`]}`}
                        d={iconData.path}>
                    </path>
                </svg>
            </div>
            <small className={`${styles["text-icon"]} ${styles[`color-${iconData.color}`]}`}>{iconData.title}</small>
        </div>
    )
};

export const IconLinkComponent = ({
    iconData
}: {
    iconData: LinkIconInterface
}) => {
    return (
        <Link target="_blank" rel="noopener noreferrer" href={iconData.link}
            aria-label={`${iconData.link}`}
            className={`${styles['icon-container']} card ${styles["link-icon"]}`}>
            <div className={`${styles['container-icon-svg']} ${styles["link-icon"]}`}>
                <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className={styles[`icon-svg`]}
                        d={iconData.path}>
                    </path>
                </svg>
            </div>
        </Link>
    )
}