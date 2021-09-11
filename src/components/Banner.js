import Image from "next/dist/client/image"

export default function Banner() {
    return (
        <div className="relative h-[300px]
        sm:h-[400px]
        lg:h-[500px]
        xl:h-[600px]
        2xl:h-[700px]" >
            <Image src="https://links.papareact.com/0fm" 
            layout="fill"
            objectFit="cover"
            objectPosition="top" />

            <div className="absolute top-1/2 w-full text-center" >
                <p className="text-sm font-semibold
                sm:text-lg" >Not sure where to go? Perfect.</p>
            
                <button className="font-bold text-purple-500 bg-white px-10 py-4 rounded-full shadow-md my-3
                hover:shadow-xl active:scale-90 transition duration-100">I'm flexible</button>

            </div>


        </div>
    )
}
