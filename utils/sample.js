import Ahemdabad from '../public/cities/ahemdabad.json' with {type: "json"};
import Indore from '../public/cities/indore.json' with {type: "json"};
import Delhi from '../public/cities/delhi.json' with {type: "json"};
import Bombay from '../public/cities/bombay.json' with {type: "json"};
import offersData from '../public/offers.json' with {type: "json"};
import beverages from '../public/food-and-drinks/beverages.json' with {type: "json"};
import combos from '../public/food-and-drinks/combos.json' with {type: "json"};
import snacks from '../public/food-and-drinks/snacks.json' with {type: "json"};
import popcorns from '../public/food-and-drinks/popcorns.json' with {type: "json"};



import { Cinema } from '../models/cinema.js'; 
import { Offer } from '../models/offer.js'; 
import { Beverage } from '../models/beverage.js';
import { Combo } from '../models/combo.js';
import { Snack } from '../models/snack.js';
import { Popcorn } from '../models/popcorn.js';

export async function pushSampleCities() {
    // Sample city data (you can expand this for other cities like Indore, Delhi, etc.)
    const cities = {
        Ahemdabad,
        Indore,
        Delhi,
        Bombay
    };

    // Loop over the cities and their cinema data
    for (const [city, cinemas] of Object.entries(cities)) {
        // Loop through each cinema for the city
        for (const cinema of cinemas) {
            const { name, phoneNo, location } = cinema;

            // Create a new cinema document based on the schema
            const newCinema = new Cinema({
                name,
                phoneNo,
                location,
                city,
                timestamp: new Date().getTime() // Add the timestamp field
            });

            // Save the cinema to the database
            try {
                await newCinema.save();
                console.log(`Cinema added: ${name} in ${city}`);
            } catch (error) {
                console.error(`Error adding cinema ${name}: ${error}`);
            }
        }
    }
}


export async function pushSampleOffers() {
    try {
        for (let category in offersData) {
            const categoryOffers = offersData[category];

            for (let offer of categoryOffers) {
                const newOffer = new Offer({
                    name: offer.name,
                    category: category,
                    validity: new Date(offer.validity),
                });

                await newOffer.save();
                console.log(`Offer '${offer.name}' saved successfully.`);
            }
        }
    } catch (error) {
        console.error("Error saving offers:", error);
    }
};



export const pushBeverages = async () => {
    try {
        for (const beverage of beverages) {
            await Beverage.create({
                name: beverage.name,
                info: beverage.info,
                price: parseInt(beverage.price, 10),
                temp: String(beverage.temp).toLowerCase(),
            });
        }
        console.log("Beverages successfully pushed to MongoDB.");
    } catch (error) {
        console.error("Error pushing beverages:", error.message);
    }
};




export const pushCombos = async () => {
    try {
        const comboData = combos.map(combo => ({
            ...combo,
            price: parseInt(combo.price, 10) // Convert price to integer
        }));

        await Combo.insertMany(comboData);
        console.log("Combos inserted successfully!");
    } catch (error) {
        console.error("Error inserting combos:", error.message);
    }
};


export const pushPopcorns = async () => {
    try {
        const formattedPopcorns = popcorns.popcorns.map(popcorn => ({
            ...popcorn,
            price: parseInt(popcorn.price, 10) // Convert price to integer
        }));

        await Popcorn.insertMany(formattedPopcorns);
        console.log("Popcorns inserted successfully!");
    } catch (error) {
        console.error("Error inserting popcorns:", error.message);
    }
};
export const pushSnacks = async () => {
    try {
        const formattedSnacks = snacks.Snacks.map(snack => ({
            ...snack,
            price: parseInt(snack.price, 10) // Convert price to integer
        }));

        await Snack.insertMany(formattedSnacks);
        console.log("Snacks inserted successfully!");
    } catch (error) {
        console.error("Error inserting snacks:", error.message);
    }
};

