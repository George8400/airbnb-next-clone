import Image from 'next/image'
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid'
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

export default function Header({placeholder}) {

    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();

    function handleSelect(ranges) {
        /* console.log(ranges) */
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setSearchInput('');
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests
            }
        });
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5
        md:px-10">

            {/* left */}
            <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src='https://links.papareact.com/qd3' 
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                /> 
            </div>

            {/* middle - searchbar */}
            <div className="flex items-center rounded-full py-2
            md:border-2 md:shadow-sm">
                <input value={searchInput} onChange={(e) => { setSearchInput(e.target.value);}} 
                type="text" placeholder={placeholder || "Start your search"} className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"/>
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

            {searchInput && 
                <div className="flex flex-col col-span-3 mx-auto mt-10"> 
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />

                    <div className="flex items-center border-b">
                        <h2 className="text-2xl font-semibold pl-2 flex-grow">Number of Guest</h2>
                        
                        <UsersIcon className="h-5"/>

                        <input 
                            type="number" 
                            value={noOfGuests} 
                            onChange={(e) => {setNoOfGuests(e.target.value)}}
                            min={1}
                            className="w-12 pl-2 text-lg outline-none text-red-400 font-semibold" />
                    </div>

                    <div className="flex mt-2">
                        <button onClick={resetInput} className="flex-grow">Cancel</button>
                    
                        <button onClick={search} className="flex-grow text-red-600">Search</button>
                    </div>

                </div>
            }


        </header>
    )
}
