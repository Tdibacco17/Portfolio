export interface TechnologieCardInterface {
    technologieId: number,
    title: string,
    color: string,
    path: string
}
export interface ImgInterface {
    imgSrc: string,
    imgAlt: string,
    imgBlur: string,
    imgPosition: string
}
export interface IconInterface {
    iconId: number,
    title: string,
    color: string,
    path: string
    href: string
}
export interface ExperienceCardInterface {
    workId: number,
    image: ImgInterface,
    date: string,
    title: string,
    position: string,
    roll: string,
    technologies: string[],
    redirects: {
        linkedin?: RedirectDataInterface,
        github?: RedirectDataInterface,
        web?: RedirectDataInterface
    }
}
export interface RedirectDataInterface {
    linkId: number,
    title: string,
    link: string
}