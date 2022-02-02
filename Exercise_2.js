let address = createAddress('a','b','c');

// console.log(address);

// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}


//Constructor Function - uses Pascal case notation
function Address (street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

let address1 = new Address('a','b','c');
console.log(address1);