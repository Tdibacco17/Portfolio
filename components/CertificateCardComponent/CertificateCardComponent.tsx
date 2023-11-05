import { CertificateDataInterface } from '@/types'
import styles from './CertificateCardComponent.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function CertificateCardComponent({
    certificateData
}: {
    certificateData: CertificateDataInterface
}) {
    return (
        <Link className={`${styles["container-outer-image-certificate"]} card`}
            href={certificateData.href}
            aria-label={`Ir al certificado`}
            rel="noopener noreferrer" target="_blank">
            <Image
                src={certificateData.image.imgSrc}
                alt={certificateData.image.imgAlt}
                fill
                className={`${styles['container-inner-image']}`}
                quality={100}
                sizes='100vw, (max-width: 992px) 90vw'
                placeholder='blur'
                blurDataURL={certificateData.image.imgBlur}
            />
        </Link>
    )
}