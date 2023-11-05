import { TechnologieCardInterface } from '@/types'
import TechnologieCardComponent from '../TechnologieCardComponent/TechnologieCardComponent'
import styles from './TechnologiesComponent.module.scss'
import data from '@/models/es.json'

export default function TechnologiesComponent() {
    return (
        <section className={styles["container-section-technologies"]}>
            <p>{data.technologies.titleSection}</p>
            <div className={styles["container-grid-technologies"]}>
                {
                    Object.values(data.technologies.icons).map((technologieData: TechnologieCardInterface) => {
                        return <TechnologieCardComponent
                            key={technologieData.technologieId}
                            technologieData={technologieData}
                        />
                    })
                }
            </div>
        </section>
    )
}