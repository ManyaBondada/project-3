import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import LocationsAPI from '../services/LocationsAPI'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([{}])

    useEffect(() => {
        (async () => {
            try {
                // get the location clicked on
                let eventsByLocation = await LocationsAPI.getLocation(index) // pulls all the events with that particular location
                console.log(eventsByLocation.data)
                setEvents(eventsByLocation.data) 
                console.log(events)

                // set the info for the location
                switch(index) {
                    case "1":
                      setLocation({"name": "Echo Lounge","image": "https://th.bing.com/th/id/OIP.65po_i_ey-tYsZXrOUndiQHaFj?pid=ImgDet&rs=1","address": "1234 forest lane","city": "Dallas","state": "Texas"})
                      break;
                    case "2":
                      setLocation({"name": "House of Blues","image": "https://p.turbosquid.com/ts-thumb/Sv/RgKJpZ/H3/onizleqa/jpg/1610541926/1200x1200/fit_q99/9d9fe0c265cf39fcf4301ab8a9f486899dc7b544/onizleqa.jpg","address": "2468 beach lane","city": "Dallas","state": "Texas"})
                      break;
                    case "3":
                      setLocation({"name": "Pavilion","image": "https://th.bing.com/th/id/R.d4594f31c99c75a19d31d099c5e8a049?rik=gAlZHNGeScTDrA&riu=http%3a%2f%2fwww.odell.com%2fwp-content%2fgallery%2fpnc-music-pavilion%2fpnc-music-pavilion1920.jpg&ehk=G70fD5c8zquixiu9f9iRV5RHR%2freGkGlVj%2fSBszpSiU%3d&risl=&pid=ImgRaw&r=0", "address": "3692 mountain lane","city": "Dallas","state": "Texas"})
                      break
                    default:
                      setLocation({"name": "American Airlines Center","image": "https://th.bing.com/th/id/OIP.oMjcX-afDEivf9an8FY-SAHaE8?pid=ImgDet&rs=1","address": "4826 tundra lane","city": "Dallas","state": "Texas"})
                  }
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    
    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents