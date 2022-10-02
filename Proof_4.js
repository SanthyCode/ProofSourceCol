let Car = [
    {   brand: 'xasd',
        model: 2017,
        color: 'black'
    },
    {   brand: 'aartge',
        model: 2004,
        color: 'blue'
    },
    {   brand: 'poañigdf',
        model: 2022,
        color: 'green'
    },
    {   brand: 'ñodsig',
        model: 2020,
        color: 'black'
    },
    {   brand: 'pweaig',
        model: 2005,
        color:'white'
    },
]


const list = car => {
    return car.filter(cars => cars.model >= 2017)

}

list(Car)