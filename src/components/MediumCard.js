import Image from "next/dist/client/image"

export default function MediumCard({img, title}) {
    return (
        <div className="cursor-pointer hover:scale-105 transition ease-out duration-200">
            <div className="relative h-80 w-80 ">
                <Image src={img} layout="fill" className="rounded-xl"/>
            </div>
            <h3 className="font-bold text-lg text-black ">{title}</h3>
        </div>
    )
}
