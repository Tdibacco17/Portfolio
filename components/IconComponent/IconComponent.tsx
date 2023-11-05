import Link from 'next/link'
import styles from './IconComponent.module.scss'
import { IconInterface } from '@/types'

export default function IconComponent({
    iconData,
    isDestktop,
    isMobile
}: {
    iconData: IconInterface,
    isDestktop?: boolean,
    isMobile?: boolean
}) {
    return (
        <Link href={iconData.href ?? ""} rel="noopener noreferrer" target="_blank"
            aria-label={`Icono de ${iconData.title}`}
            className={`${styles['container-card-technologie']} card ${isDestktop && styles["isDestktop"]} ${isMobile && styles["isMobile"]}`}>
            <div className={`${styles['container-icon-svg']} `}>
                <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path className={`${styles['icon-svg']} ${styles[`${iconData.color}`]}`}
                        d={iconData.path}>
                    </path>
                </svg>
            </div>
        </Link>
    )
}