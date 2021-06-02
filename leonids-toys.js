const dolls = [
    {
        id: 1,
        name: 'Kendall',
        maker: 'American Girl',
        type: 'WellieWishers',
        soldBy: 'amazon',
        price: 24,
    },
    {
        id: 2,
        name: 'Samantha 1905',
        maker: 'American Girl',
        type: 'historical characters',
        soldBy: 'ebay',
        price: 150,
    },
    {
        id: 3,
        name: 'Courtney 1986',
        maker: 'American Girl',
        type: 'historical characters',
        soldBy: 'aliexpress',
        price: 110,
    },
];

// adding new toys
const bittyBaby = {
    id: 4,
    name: 'bitty baby',
    maker: 'American Girl',
    type: 'bitty baby',
    soldBy: 'amazon',
    price: 60,
};

const kira = {
    id: 5,
    name: 'Kira',
    maker: 'American Girl',
    type: 'Girl of the Year 2021',
    soldBy: 'amazon',
    price: 32,
};

// added loop function
for (const doll of dolls) {
    console.log(
        `${doll.name} the ${doll.type} doll is on sale for $${doll.price} on ${doll.soldBy}!`
    );
}
