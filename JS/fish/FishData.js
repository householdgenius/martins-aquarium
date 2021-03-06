/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const myName = "Emily";
let myFavoriteColor = "Purple";

export const getFish = () => {
    return fishCollection
}

const fishCollection = [

    {
        name: "Bart",
        food: "crustaceans",
        image: "blue.jpg",
        species: "trigger",
        length: 7,
        waterType: "salt",
        harvestLocation: "Costa Rica"

    },
    {
        name: "Mr Freeze",
        food: "Meal Worms",
        image: "red.jpg",
        species: "tang",
        length: 3,
        waterType: "salt",
        harvestLocation: "Florida"

    },
    {
        name: "Karen",
        food: "Algae",
        image: "yellow.jpg",
        species: "Siamese algae eater",
        length: 5,
        waterType: "salt",
        harvestLocation: "Puerto Rico"

    },
    {
        name: "Nemo",
        food: "Goldfish",
        image: "nemo.jpg",
        species: "Clown",
        length: 3,
        waterType: "Salt-water",
        harvestlocation: "Florida"
    },
    {
        name: "Don Julio",
        food: "snails",
        image: "stingray.jpg",
        species: "Stingray",
        length: 9,
        waterType: "Salt",
        harvestLocation: "Dominican Republic"

    },
    {
        name: "Robin Gilliams",
        food: "Bee Moths",
        image: "orange.jpg",
        species: "Clownfish",
        length: 2,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
    {
        name: "Bruce",
        food: "not fish",
        image: "bruce.jpg",
        species: "greatWhite",
        length: 130,
        waterType: "salt",
        harvestLocation: "Sydney"
    },
    {
        name: "Bloat",
        food: "shrimp",
        image: "bloat.jpg",
        species: "Blow Fish",
        length: 5,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
    {
        name: "Gordon",
        food: "Krill",
        image: "pink.jpg",
        species: "Blowfish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Asia"
    }
]

export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFishArray.push(fish)
        }
    }

    return holyFishArray
}
export const getSoldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiersArray = [];
    for (const fish of fishCollection) {
        if (fish.length % 5 === 0)
            soldiersArray.push(fish);
    }
    return soldiersArray
}

export const getUnworthy = () => {
    // Any fish not a multiple of 3 or 5
    const unworthyArray = [];
    for (const fish of fishCollection) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            unworthyArray.push(fish);
        }


    }
    return unworthyArray
}