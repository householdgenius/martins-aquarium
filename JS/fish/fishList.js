/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getFish } from "./FishData.js";
import { Fish } from "./fish.js";
import { getMostHolyFish } from "./FishData.js";
import { getSoldierFish } from "./FishData.js";
import { getUnworthy } from "./FishData.js";

export const FishList = () => {
    const holyFish = getMostHolyFish();
    addFishToDom(holyFish);
    const soldierFish = getSoldierFish();
    addFishToDom(soldierFish);
    const unworthyFish = getUnworthy();
    addFishToDom(unworthyFish);
}
const addFishToDom = (arrayOfFish) => {
    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList");

    let fishHTMLRepresentation = "";
    for (const oneFishObject of arrayOfFish) {
        fishHTMLRepresentation += Fish(oneFishObject);
    }
    contentElement.innerHTML += `${fishHTMLRepresentation}`
}

