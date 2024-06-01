import { IconInterface } from "@/types"
import { IconComponent } from "../IconComponent/IconComponent"
import styles from "./TechnologiesComponent.module.scss"
import data from "@/models/es.json"

export default function TechnologiesComponent() {
    return (
        <div className={styles["technologies-container"]}>
            <p className="title-section">{data.technologies.title}</p>
            <div className={styles["grid-icons"]}>
                {Object.values(data.technologies.icons).map((iconData: IconInterface) => {
                    return <IconComponent
                        key={iconData.iconId}
                        iconData={iconData}
                    />
                })}
            </div>
        </div>
    )
}