import Link from "next/link"
import styles from "./ExperienceComponent.module.scss"

export default function ExperienceComponent() {
    return (
        <section className={styles["experience-container"]}>
            <p className="title-section">Experiencia</p>
            <p className="description">
                Con la misión de crear productos que optimicen procesos y mejoren la experiencia del usuario.
                Un breve resumen de mi trabajo hasta ahora.
            </p>
            <hr className="divider" />
            <div className={styles["job-container"]}>
                <div className={`${styles["job"]} text`}>
                    <div>
                        <p className="title">House of CB</p>
                        <p className="subtitle">Desarrollador Front End, may. 2024</p>
                    </div>
                    <p>
                        <Link target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/houseofcb/"} aria-label={"Instagram"} className="link">House of CB</Link> es una marca británica líder en ropa de mujer, aclamada internacionalmente por sus piezas de diseñador. Con más de 40 tiendas alrededor del mundo y una fuerte presencia en redes sociales.   Actualmente trabajo como desarrollador Front End en su <Link target="_blank" rel="noopener noreferrer" href={"https://www.houseofcb.com/"} aria-label={"https://www.houseofcb.com/"} className="link">ecommerce</Link>.
                    </p>
                </div>
            </div>
            <hr className="divider" />
            <div className={styles["job-container"]}>
                <div className={`${styles["job"]} text`}>
                    <div>
                        <p className="title">Strongwood</p>
                        <p className="subtitle">Desarrollador Front End, 2023 — 2024</p>
                    </div>
                    <p>
                        <Link target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/strongwood_ar/"} aria-label={"https://www.instagram.com/strongwood_ar/"} className="link">Strongwood</Link> es una empresa dedicada a la fabricación y venta de muebles. Querían construir un portfolio de sus proyectos realizados para dar más credibilidad a la marca.
                    </p>
                    <p>
                        En 2023, desarrollé el <Link target="_blank" rel="noopener noreferrer" href={"https://www.strongwood.com.ar/"} aria-label={"https://www.strongwood.com.ar/"} className="link">sitio web</Link> utilizando Next.js, React.js, TypeScript y Sass. Me encargué de cada aspecto de la página, desde el diseño hasta la experiencia de usuario. Realicé reuniones con el cliente para llevar a cabo el desarrollo y mostrar avances, asegurando cumplir con sus expectativas y funcionalidades.
                    </p>
                    <p>
                        En 2024, desarrollé un software especializado para la cotización de muebles y el despiece de materiales, mejorando la gestión y reduciendo los tiempos de trabajo. El sistema emplea Excel como base de datos para el manejo dinámico de los datos y precios.
                    </p>
                </div>
            </div>
            <hr className="divider" />
            <div className={styles["job-container"]}>
                <div className={`${styles["job"]} text`}>
                    <div>
                        <p className="title">25Watts</p>
                        <p className="subtitle">Desarrollador Front End, oct. 2022 — abr. 2024</p>
                    </div>
                    <p>
                        Me uní al equipo de <Link target="_blank" rel="noopener noreferrer" href={"https://25watts.com.ar/"} aria-label={"https://25watts.com.ar/"} className="link">25Watts</Link> donde trabaje en la creación de páginas web, portfolios, ecommerce, blogs y landing pages.
                    </p>
                    <ul className="list-items-container">
                        <li className="list-item">
                            Desarrollos en WordPress con Elementor y WooCommerce.
                        </li>
                        <li className="list-item">
                            Desarrollos en Next.js con React.js, TypeScript, Node.js y Sass. Experiencia consumiendo datos de una API REST para procesar información dinámica en el sitio.
                        </li>
                        <li className="list-item">
                            Implementación de envío de emails con Nodemailer. Validaciones de formularios con reCaptcha v2 y v3. Integraciones de mapas con la API de Google Maps.
                        </li>
                        <li className="list-item">
                            Desarrollo de componentes bajo patrones de diseño, enfocado en la calidad y el rendimiento. Experiencia en la implementación de buenas prácticas.
                        </li>
                    </ul>
                    <p>
                        Aprendí la aplicación de metodologías ágiles - SRUM. Manejo de herramientas como Jira, Figma, Docker y el flujo de trabajo con Git.
                    </p>
                </div>
            </div>
        </section>
    )
}