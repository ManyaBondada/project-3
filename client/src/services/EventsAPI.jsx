import axios from 'axios'
const eventsURL = '/api/events'

const getAllEvents = () => axios.get(eventsURL)
const getEventById = (eventId) => axios.get(`${eventsURL}/${eventId}`)

export default{
    getAllEvents,
    getEventById
}
