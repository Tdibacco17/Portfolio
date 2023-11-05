import { TechnologieCardInterface } from '@/types'
import styles from './TechnologieCardComponent.module.scss'

export default function TechnologieCardComponent({
    technologieData
}: {
    technologieData: TechnologieCardInterface
}) {
    return (
        <div className={`${styles['container-card-technologie']} card`}>
            <div className={`${styles['container-icon-svg']}`}>
                <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path className={`${styles['icon-svg-isTechnologie']} ${styles[`${technologieData.color}`]}`}
                        d={technologieData.path}>
                    </path>
                </svg>
            </div>
            {technologieData &&
                <small className={`${styles["title-icon"]} ${styles[`${technologieData.color}`]}`}>
                    {technologieData.title}
                </small>}
        </div>
    )
}