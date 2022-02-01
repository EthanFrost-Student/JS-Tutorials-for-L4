console.log("Examples of objects");


//const means it wont change
//let means it will

//var is another way to say let
const car = 
{
    make: "Ford",
    model: "Fiesta Ghia",
    engine: "1.4",
    fuel: "Unleaded",
    colour: "Hot Pink",
    Price: 1200
};

//print car
console.log(car);

//print car details
console.log(car.Price);

//array of objects
const cars = 
[
    {
        make: "Ford",
        model: "Fiesta Ghia",
        engine: "1.4",
        fuel: "Unleaded",
        colour: "Hot Pink",
        Price: 1200
    },
    {
        make: "BMW",
        model: "Thingy",
        engine: "2.2",
        fuel: "Unleaded",
        colour: "Red",
        Price: 4000
    },
    {
        make: "SEAT",
        model: "Ibiza",
        engine: "1.1",
        fuel: "Unleaded",
        colour: "blue",
        Price: 1200
    }
]

console.log(cars[1].model);

//search for a specific element
function SearchObject(search)
{
    const result = cars.find(car => car.make == search);
    console.log(result)
    return result
}

function VagueSearch(search)
{
    const result = cars.filter(items => items.name.container)
}