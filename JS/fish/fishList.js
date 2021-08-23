/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import {getFish} from "./FishData.js";
import {Fish} from "./fish.js";
import {getMostHolyFish} from "./FishData.js";

export const FishList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList");
    const contentElement2 = document.querySelector(".fishList");
    const allFishes = getFish();
    const  fishCollection = getMostHolyFish();
    

    // // Add to the existing HTML in the content element
	let fishHTMLRepresentation = "";
	for (const oneThingFromTheSea of allFishes) {
		fishHTMLRepresentation += Fish(oneThingFromTheSea);
	}
    let fishHTMLRepresentation2 = "";
	for (const object of fishCollection) {
		fishHTMLRepresentation2 += Fish(object.length);
	}
	
    contentElement.innerHTML += `${fishHTMLRepresentation}`
    contentElement2.innerHTML += `${fishHTMLRepresentation2}`
}