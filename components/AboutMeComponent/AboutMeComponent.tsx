import styles from "./AboutMeComponent.module.scss"
import Image from "next/image";
import data from "@/models/es.json"
import { IconLinkComponent } from "../IconComponent/IconComponent";
import { LinkIconInterface } from "@/types";

export default function AboutMeComponent() {
    return (
        <section className={styles["about-me-container"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["info-container"]}>
                    <div>
                        <h1 className="name">Tomás Di Bacco</h1>
                        <h2 className="name color">Desarrollador <span className="noWrap">Full Stack</span></h2>
                    </div>
                    <div>
                        <a href={data.about.cv.pdfSrc ?? ""}
                            download={"TomasDiBacco_CV.pdf"}
                            className="link"
                            aria-label={`Download ${data.about.cv.title}`}
                            rel="noopener noreferrer" target="_blank">
                            {data.about.cv.title}
                        </a>
                        <div className={styles["grid-icons"]}>
                            {Object.values(data.about.networks).map((iconData: LinkIconInterface) => {
                                return <IconLinkComponent
                                    key={iconData.iconId}
                                    iconData={iconData}
                                />
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles["container-outer-image"]}>
                    <Image
                        src={data.about.image.src}
                        alt="Img profile"
                        width={1200}
                        height={1600}
                        priority
                        className={styles['container-inner-image']}
                        quality={100}
                        placeholder="blur"
                        blurDataURL={data.about.image.blurData}
                    />
                </div>
            </div>
        </section>
    )
}