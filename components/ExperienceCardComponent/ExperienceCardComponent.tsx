'use client'
import Image from 'next/image'
import styles from './ExperienceCardComponent.module.scss'
import { ExperienceCardInterface, RedirectDataInterface } from "@/types"
import { useState } from 'react'
import Link from 'next/link'

export default function ExperienceCardComponent({
    experienceData
}: {
    experienceData: ExperienceCardInterface
}) {
    const [isView, setIsView] = useState<boolean>(false)
    const handleViewDetails = () => {
        setIsView(!isView)
    }

    return (
        <div onClick={handleViewDetails} className={`${styles["container-card-experience"]} card`}>
            <div className={styles['container-outer-image']}>
                <Image
                    src={experienceData.image.imgSrc}
                    alt={experienceData.image.imgAlt}
                    fill
                    className={`${styles['container-inner-image']} ${styles[`${experienceData.image.imgPosition}`]}`}
                    quality={100}
                    sizes='100vw, (max-width: 992px) 90vw'
                    placeholder='blur'
                    blurDataURL={experienceData.image.imgBlur}
                />
            </div>
            <div className={`${styles["container-card-details"]} ${isView && styles["view-details"]}`}>
                <div className={`${styles["container-info"]} ${isView && styles["active-color"]}`}>
                    <p className={`${styles["subtitle"]}`}>{experienceData.title} {experienceData.position}</p>
                    <p >{experienceData.roll}</p>
                </div>
                <div className={styles["continar-details"]}>
                    <div>
                        <p className={styles["title-tech"]}>Tecnologías</p>
                        <div className={styles["technologies"]}>
                            {
                                experienceData.technologies.map((item: string, index: number) => {
                                    return <p key={index}>• {item}</p>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div className={styles["container-redirects"]}>
                            {
                                Object.values(experienceData.redirects).map((redirectData: RedirectDataInterface) => {
                                    return <Link key={redirectData.linkId} rel="noopener noreferrer" target="_blank"
                                        aria-label={`Ir a ${redirectData.title}`}
                                        href={redirectData.link} className={styles['web-link']}>
                                        {redirectData.title}
                                    </Link>
                                })
                            }
                        </div>
                        <p className={styles["date"]}>{experienceData.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}