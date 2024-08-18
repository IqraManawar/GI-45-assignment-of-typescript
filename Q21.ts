/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/// Define an interface for the country object
interface Country {
    name: string;
    capital: string;
    population: number;
    continent: string;
}

// Create an array of country objects
const countries: Country[] = [
    {
        name: "Canada",
        capital: "Ottawa",
        population: 37742154,
        continent: "North America"
    },
    {
        name: "Brazil",
        capital: "Brasília",
        population: 211000000,
        continent: "South America"
    },
    {
        name: "Japan",
        capital: "Tokyo",
        population: 126300000,
        continent: "Asia"
    },
    {
        name: "Germany",
        capital: "Berlin",
        population: 83166711,
        continent: "Europe"
    },
    {
        name: "Australia",
        capital: "Canberra",
        population: 25499884,
        continent: "Australia"
    }
];

// Print the list of countries
console.log("List of Countries:");
countries.forEach(country => {
    console.log(`Name: ${country.name}, Capital: ${country.capital}, Population: ${country.population}, Continent: ${country.continent}`);
});

