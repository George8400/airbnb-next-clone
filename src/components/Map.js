import { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import { LocationMarkerIcon } from '@heroicons/react/solid';

export default function Map({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({});

    // Transform the search results object into the 
    // { latitude: ..., longitude: ... } object
    const coordinates = searchResults.map(item => ({
        longitude: item.long,
        latitude: item.lat,
    }));

    // The latitude and longitude of the center of locations coordinates
    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/george84/cktijt07o66w717n75jcksjzz'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport) }
        >
            {searchResults.map((item, index) => (
                <div key={index}>
                    <Marker
                        longitude={item.long}
                        latitude={item.lat}
                        offsetTop={-10}
                        offsetLeft={-20}
                    >
                        <LocationMarkerIcon
                            onClick={()=>setSelectedLocation(item)} 
                            className="text-2xl h-10 w-10 text-red-600 hover:animate-bounce cursor-pointer"
                        />
                    </Marker>

                    {/* The popup that should show if we click on a Marker */}
                    {selectedLocation.long === item.long ? (
                        <Popup 
                            closeOnClick={true}
                            onClose={() => setSelectedLocation({})}
                            latitude={item.lat}
                            longitude={item.long}
                            className="z-10"
                        >
                            {item.title}
                        </Popup>
                    ) : ( false )}

                </div>
            ))}
        </ReactMapGL>
    )
}
