const dolls = [
    {
        id: 1,
        name: 'Kendall',
        maker: 'American Girl',
        type: 'WellieWishers',
        soldBy: 'aliexpress',
        price: 60,
    },
    {
        id: 2,
        name: 'Samantha 1904',
        maker: 'American Girl',
        type: 'Historical Characters',
        soldBy: 'amazon',
        price: 150,
    },
    {
        id: 3,
        name: 'Courtney 1986',
        maker: 'American Girl',
        type: 'Historical Characters',
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
    price: 110,
};

dolls.push(bittyBaby, kira);

const addy = {
    name: 'Addy 1864',
    maker: 'American Girl',
    type: 'Historical Characters',
    soldBy: 'amazon',
    price: 150,
};

const addDollToInventory = (dollObject) => {
    const lastIndex = dolls.length - 1;
    const currentLastDoll = dolls[lastIndex];
    const maxId = currentLastDoll.id;
    const idForNewDoll = maxId + 1;

    dollObject.id = idForNewDoll;
    dolls.push(dollObject);
};

addDollToInventory(addy);

// price increase of 5%
for (const doll of dolls) {
    doll.price = doll.price * 1.05;
}
// doll finder function
const dollToFind = 6;

// added loop function
for (const doll of dolls) {
    if (doll.id === dollToFind) {
        console.log(
            `${doll.name} the ${doll.type} doll is on sale for $${doll.price} on ${doll.soldBy}!`
        );
    }
}
