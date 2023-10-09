import axios from 'axios'

const getAllLocations = () => axios.get(`/api/location`)
const getLocation = (location) => axios.get(`/api/location/${location}`)


export default{
    getAllLocations,
    getLocation
}