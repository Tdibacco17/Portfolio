import Image from "next/image";
import data from "@/models/data.json"
import Section from "../Section/Section";
import { LocaleType, getDictionary } from "@/utils/dictionaries";
import Link from "next/link";

export default async function Experience({ flag, isMobile }: { flag: LocaleType, isMobile: boolean }) {
    const dict = await getDictionary(flag);

    return (
        <section className="relative">
            <Section text={dict.experience.section} />
            <div className="flex flex-col gap-40">
                <div className="flex flex-col gap-5">
                    <div className="max-h-64 overflow-hidden rounded-otherCustom flex justify-center items-center select-none pointer-events-none">
                        <Image
                            src={data.experience.houseofcb.img.src}
                            alt={data.experience.houseofcb.img.alt}
                            width={2560}
                            height={1127}
                            priority
                            quality={100}
                            placeholder="blur"
                            blurDataURL={data.experience.houseofcb.img.blurData}
                        />
                    </div>
                    <div>
                        <p className="text-2xl">{dict.experience.houseofcb.title}</p>
                        <p className="text-base text-lightPrimary">{dict.experience.houseofcb.subTitle}</p>
                    </div>
                    <p className="text-base">
                        <Link target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/houseofcb/"} aria-label={"Instagram"}
                            className={`underline-offset-2 underline decoration-[#A0A0A0] font-semibold ${isMobile ? "" : "hover:text-link-hover"}`}>
                            {dict.experience.houseofcb.firstParagraph.link}
                        </Link>
                        {dict.experience.houseofcb.firstParagraph.text}
                    </p>
                    <p>
                        {dict.experience.houseofcb.secondParagraph.text}
                    </p>
                    <ul className="text-base">
                        <li>
                            {dict.experience.houseofcb.secondParagraph.text_1}
                            <Link target="_blank" rel="noopener noreferrer" href={"https://www.houseofcb.com/"} aria-label={"https://www.houseofcb.com/"}
                                className={`underline-offset-2 underline decoration-[#A0A0A0] font-semibold ${isMobile ? "" : "hover:text-link-hover"}`}>
                                {dict.experience.houseofcb.secondParagraph.link}
                            </Link>
                            {dict.experience.houseofcb.secondParagraph.otherText}
                        </li>
                        <li>
                            {dict.experience.houseofcb.secondParagraph.newText}
                        </li>
                    <li className="text-base">{dict.experience.houseofcb.secondParagraph.otherOtherText}</li>
                    </ul>
                    <p>
                        {dict.experience.houseofcb.secondParagraph.text_2}
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="max-h-64 overflow-hidden rounded-otherCustom flex justify-center items-center select-none pointer-events-none">
                        <Image
                            src={data.experience.strongwood.img.src}
                            alt={data.experience.strongwood.img.alt}
                            width={2560}
                            height={1127}
                            priority
                            quality={100}
                            placeholder="blur"
                            blurDataURL={data.experience.strongwood.img.blurData}
                        />
                    </div>
                    <div>
                        <p className="text-2xl">{dict.experience.strongwood.title}</p>
                        <p className="text-base text-lightPrimary">{dict.experience.strongwood.subTitle}</p>
                    </div>
                    <p className="text-base">
                        <Link target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/strongwood_ar/"} aria-label={"https://www.instagram.com/strongwood_ar/"}
                            className={`underline-offset-2 underline decoration-[#A0A0A0] font-semibold ${isMobile ? "" : "hover:text-link-hover"}`}>
                            {dict.experience.strongwood.firstParagraph.link}
                        </Link>
                        {dict.experience.strongwood.firstParagraph.text}
                    </p>
                    <ul className="text-base">
                        <li>
                            {dict.experience.strongwood.secondParagraph.text}
                            <Link target="_blank" rel="noopener noreferrer" href={"https://www.strongwood.com.ar/"} aria-label={"https://www.strongwood.com.ar/"}
                                className={`underline-offset-2 underline decoration-[#A0A0A0] font-semibold ${isMobile ? "" : "hover:text-link-hover"}`}>
                                {dict.experience.strongwood.secondParagraph.link}
                            </Link>
                            {dict.experience.strongwood.secondParagraph.otherText}<br></br>
                            {dict.experience.strongwood.secondParagraph.otherOtherText}
                        </li>
                    </ul>
                    <p>
                        {dict.experience.strongwood.secondParagraph.text_1}
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="max-h-64 overflow-hidden rounded-otherCustom flex justify-center items-center select-none pointer-events-none">
                        <Image
                            src={data.experience.watts.img.src}
                            alt={data.experience.watts.img.alt}
                            width={1920}
                            height={847}
                            priority
                            quality={100}
                            placeholder="blur"
                            blurDataURL={data.experience.watts.img.blurData}
                        />
                    </div>
                    <div>
                        <p className="text-2xl">{dict.experience.watts.title}</p>
                        <p className="text-base text-lightPrimary">{dict.experience.watts.subTitle}</p>
                    </div>
                    <p>
                        {dict.experience.watts.firstParagraph.text}
                        <Link target="_blank" rel="noopener noreferrer" href={"https://25watts.com.ar/"} aria-label={"https://25watts.com.ar/"}
                            className={`underline-offset-2 underline decoration-[#A0A0A0] font-semibold ${isMobile ? "" : "hover:text-link-hover"}`}>
                            {dict.experience.watts.firstParagraph.link}
                        </Link>
                        {dict.experience.watts.firstParagraph.otherText}
                    </p>
                    <ul className="text-base">
                        {dict.experience.watts.list.map((text: string, index: number) => {
                            return <li key={index}>{text}</li>
                        })}
                    </ul>
                    <p>
                        {dict.experience.watts.secondParagraph.text}
                    </p>
                </div>
            </div>
        </section>
    )
}