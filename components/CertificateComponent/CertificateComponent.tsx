import { CertificateDataInterface } from '@/types'
import styles from './CertificateComponent.module.scss'
import data from '@/models/es.json'
import CertificateCardComponent from '../CertificateCardComponent/CertificateCardComponent'

export default function CertificateComponent() {
    return (
        <section className={styles["container-section-certificate"]}>
            <p>{data.certificates.titleSection}</p>
            <div className={styles["container-grid-certificates"]}>
                {
                    Object.values(data.certificates.items).map((certificateData: CertificateDataInterface) => {
                        return <CertificateCardComponent
                            key={certificateData.certificateId}
                            certificateData={certificateData}
                        />
                    })
                }
            </div>
        </section>
    )
}