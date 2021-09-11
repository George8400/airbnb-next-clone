import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router"
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";


export default function Search({searchResults}) {

    const router = useRouter();
    const {location, startDate, endDate, noOfGuests} = router.query;

    //Formattazione date
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`
    
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>

            <main className="flex">
                <section className="flex-grow pt-14 px-6 ">
                    <p className="text-xs">300+ Stay - {range} -  for {noOfGuests} guests</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                
                    <div className="mb-5 hidden space-x-3 text-gray-800 whitespace-nowrap
                    lg:inline-flex ">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>                    
                        <p className="button">Price</p>                    
                        <p className="button">Rooms and Beds</p>                    
                        <p className="button">More filters</p>                    
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map((item, index) => {
                            return(
                                <InfoCard 
                                    key={index} 
                                    card={item}
                                />
                            )
                        })}
                    </div>

                </section>
            </main>


            <Footer/>
        </div>
    )
}


export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz')
    .then(res => res.json());

    return ({
        props: {
            searchResults,
        }
    })
}