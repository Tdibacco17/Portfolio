import Image from 'next/image'
import styles from './AboutMeComponent.module.scss'
import data from '@/models/es.json'
import { IconInterface } from '@/types'
import IconComponent from '../IconComponent/IconComponent'
import Link from 'next/link'

export default function AboutMeComponent() {
    return (
        <section className={`${styles["container-section-aboutme"]}`}>
            <div className={styles["wrapper-columns"]}>
                <div className={styles["header-info"]}>
                    <div>
                        <p>{data.aboutMe.name}</p>
                        <p className={styles["roll"]}>{data.aboutMe.roll}</p>
                    </div>
                    <div>
                        <Link href={data.aboutMe.cv.pdfSrc}
                            download={"tomasdibacco-cv.pdf"}
                            className={styles['cv']}
                            aria-label={`Descargar ${data.aboutMe.cv.title}`}
                            rel="noopener noreferrer" target="_blank">
                            {data.aboutMe.cv.title}
                        </Link>
                        <div className={styles['container-networks']}>
                            {
                                Object.values(data.aboutMe.networks).slice(0, 3).map((iconData: IconInterface) => {
                                    return <IconComponent
                                        key={iconData.iconId}
                                        iconData={iconData}
                                    />
                                })
                            }
                            <IconComponent iconData={data.aboutMe.networks.WhatsappDesktop} isDestktop={true} />
                            <IconComponent iconData={data.aboutMe.networks.WhatsappMobile} isMobile={true} />
                            </div>
                    </div>
                </div>
                <div className={styles['container-outer-image']}>
                    <Image
                        src={data.aboutMe.image.imgSrc}
                        alt={data.aboutMe.image.imgAlt}
                        fill
                        priority
                        className={styles['container-inner-image']}
                        quality={100}
                        sizes='100vw, (max-width: 992px) 90vw'
                        placeholder='blur'
                        blurDataURL={data.aboutMe.image.imgBlur}
                    />
                </div>
            </div>
        </section>
    )
}