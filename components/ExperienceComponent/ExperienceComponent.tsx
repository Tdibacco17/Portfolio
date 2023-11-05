import styles from './ExperienceComponent.module.scss'
import { ExperienceCardInterface } from '@/types'
import ExperienceCardComponent from '../ExperienceCardComponent/ExperienceCardComponent'

export default function ExperienceComponent({
    data,
    tableTitle
}: {
    data: ExperienceCardInterface[],
    tableTitle: string
}) {
    return (
        <section className={styles["container-section-experience"]}>
            <div className={styles["container-table-experiences"]}>
                <p>{tableTitle}</p>
                <div className={styles["container-grid-experiences"]}>
                    {
                        data.map((experienceData: ExperienceCardInterface) => {
                            return <ExperienceCardComponent
                                key={experienceData.workId}
                                experienceData={experienceData}
                            />
                        })
                    }
                </div>
            </div>
        </section>
    )
}