import Image from 'next/image'
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UserIcon} from '@heroicons/react/solid'


export default function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5
        md:px-10">

            {/* left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src='https://links.papareact.com/qd3' 
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                /> 
            </div>

            {/* middle - searchbar */}
            <div className="flex items-center rounded-full py-2
            md:border-2 md:shadow-sm">
                <input type="text" placeholder="Start yout search" className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"/>
                <SearchIcon className="hidden h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer
                md:inline-flex md:mx-2"/>
            </div>

            {/* right */}
            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p className="hidden cursor-pointer
                md:inline
                ">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className="flex items-center space-x-2 border-2 rounded-full p-2">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>

            </div>

        </header>
    )
}
