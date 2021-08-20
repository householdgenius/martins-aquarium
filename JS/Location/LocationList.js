import { getLocation } from './LocationData.js'
import { Location } from './Location.js'

export const LocationList = () => {
    const contentElement = document.querySelector(".locationList")
    const locations = getLocation()
    let locationHTML = "";
    // Add to the existing HTML in the content element
    for (const i of locations) {
        locationHTML += Location(i)
    }
    contentElement.innerHTML += `${locationHTML}`
}
