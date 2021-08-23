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
    // const fishCollection = [7,3,5,3,9,2,130,5,3]
    const holyFishArray = []
    for (const object of fishCollection) 
        if (object.length % 3 === 0) {
            holyFishArray.push(object.length)
    }

    return holyFishArray
    }
   