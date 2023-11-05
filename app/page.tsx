import Image from 'next/image'
import styles from './page.module.scss'
import TechnologiesComponent from '@/components/TechnologiesComponent/TechnologiesComponent'
import ExperienceComponent from '@/components/ExperienceComponent/ExperienceComponent'
import AboutMeComponent from '@/components/AboutMeComponent/AboutMeComponent'
import data from '@/models/es.json'
import CertificateComponent from '@/components/CertificateComponent/CertificateComponent'

export default function Home() {
  return (
    <div className={styles["container-all"]}>
      <AboutMeComponent />
      <ExperienceComponent
        data={Object.values(data.experience.works.cards)}
        tableTitle={data.experience.works.titleSection} />
      <TechnologiesComponent />
      <CertificateComponent />
      <ExperienceComponent
        data={Object.values(data.experience.projects.cards)}
        tableTitle={data.experience.projects.titleSection} />
    </div>
  )
}
