const Products = [
    {
        itemName: "Watch",
        price: 1999,
        itemCode: "W001",
        discount: 10
    },
    {
        itemName: "Earbuds",
        price: 2199,
        itemCode: "E001",
        discount: 15
    },
    {
        itemName: "Specs",
        price: 1499,
        itemCode: "S001",
        discount: 8
    },
    {
        itemName: "Monitor",
        price: 10499,
        itemCode: "M001",
        discount: 10
    },
    {
        itemName: "Laptop",
        price: 49999,
        itemCode: "L001",
        discount: 15
    }
]

const nameArray = Products.map(element => {
    return {
        name: element.itemName,
        price: element.price,
    }
})
console.log(nameArray);
totalPrice = 0
const priceArray = Products.map(element => {
    totalPrice = totalPrice + element.price;
    return totalPrice
})

console.log(totalPrice);

const a = Products.filter(element => element.price > 2000)
console.log(a);

Products.sort((first, second) => {
    const name1 = first.itemName
    const name2 = second.itemName
    if (name1 < name2) {
        return -1
    }else if (name1 > name2){
        return 1
    }
    return 0
})

console.log(Products);                         