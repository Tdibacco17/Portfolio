import Link from "next/link"
import styles from "./StudiesComponent.module.scss"

export default function StudiesComponent() {
    return (
        <div className={styles["studies-container"]}>
            <p className="title-section">Estudios</p>
            <div className={`${styles["job"]} text`}>
                <div>
                    <p className="title">Henry Bootcamp</p>
                    <p className="subtitle">Desarrollador Full Stack, mar. 2022 — ago. 2024</p>
                </div>
                <p>
                    Con más de 700 horas de práctica donde aprendí múltiples tecnologías, aplicación real en proyectos, desarrollo de un proyecto grupal con modalidad SCRUM para realizar un ecommerce y un proyecto individual consistente en un SPA. <Link href={"https://certificates.soyhenry.com/cert?id=ab1a5fb5-9b2e-454b-a8fb-5e4d3ae64eb1"}
                        aria-label="https://certificates.soyhenry.com/cert?id=ab1a5fb5-9b2e-454b-a8fb-5e4d3ae64eb1"
                        target="_blank" rel="noopener noreferrer"
                        className="link"
                    >
                        Certificado
                    </Link>
                </p>
                <ul className="list-items-container">
                    <li className="list-item">
                        <strong>Proyecto Individual:</strong> Desarrollé una aplicación de tipo SPA, basada en una API externa de perros para poder visualizarlos en un paginado dinámico y manipularlos mediante filtrados y ordenamientos.
                    </li>
                    <li className="list-item">
                        <strong>Proyecto Grupal:</strong> Es una aplicación web que ha sido pensada para la compra y venta de productos de computación. Cuenta con Carrito de compras, Custom PC Builder, Wish List, filtrados y paginado de productos. Tambien cuenta con la implementación de mercado pago, registro de usuarios y distintos roles para su navegación.
                    </li>
                </ul>
            </div>
        </div>
    )
}