class Contact {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.number = params[6];
        this.email = params[7];
    }
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let regName = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regName.test(firstName)) {
            this._firstName = firstName;
        }
        else throw 'Wrong Firstname!!!';
    }
    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let regName = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regName.test(lastName)) {
            this._lastName = lastName;
        }
        else throw 'Wrong Lastname!!!';
    }
    get address() { return this._address; }
    set address(address) {
        let regName = RegExp('^[A-Za-z0-9]{4,}$');
        if (regName.test(address)) {
            this._address = address;
        }
        else throw 'Wong Address!!!';
    }
    get city() { return this._city; }
    set city(city) {
        let regName = RegExp('^[A-Za-z]{4,}$');
        if (regName.test(city)) {
            this._city = city;
        }
        else throw 'Wrong city!!!';
    }
    get state() { return this._state; }
    set state(state) {
        let regName = RegExp('^[A-Za-z]{4,}$');
        if (regName.test(state)) {
            this._state = state;
        }
        else throw 'Wong state!!!';
    }
    get zip() { return this._zip; }
    set zip(zip) {
        let regEx = RegExp('^\\d{3}(\\s{0,1}\\d{3})$');
        if (regEx.test(zip)) {
            this._zip = zip;
        }
        else throw 'Wrong zip!!!';

    }

    get number() { return this._number; }
    set number(number) {
        let regEx = RegExp('^\\d{2}(\\s{1}\\d{10})$');
        if (regEx.test(number)) {
            this._number = number;
        }
        else throw 'Wrong number!!!';
    }

    get email() { return this._email; }
    set email(email) {
        let regEx = RegExp('^[a-zA-Z]+([._+-]{0,1}[a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[(com)|(co)|(net)]+(?:\\.[a-z]{2,}){0,1}$');
        if (regEx.test(email)) {
            this._email = email;
        }
        else throw 'Wrong email!!!';

    }
    toString() {
        return '\nFirstname: ' + this.firstName + ' Lastname: ' + this.lastName + ' Address: ' + this.address +
            ' City: ' + this.city + ' State: ' + this.state + ' Zip: ' + this.zip + ' Number: ' + this.number +
            ' Email: ' + this.email;
    }

}
function addContact(addressBook, newContact) {
    if (addressBook.find(contact => contact.firstName == newContact.firstName)) {
        console.log("Contact Already Exists!!!");
    }
    else
        addressBook.push(newContact);
}
function displayContact(addressBook) {
    addressBook.forEach(contact => console.log(contact.toString()));
}
function findAndUpdateContact(addressBook, oldName, newName) {
    addressBook.filter(contact => contact.firstName == oldName).forEach(contact => contact.firstName = newName);
}
function findAndDeleteContact(addressBook, firstname) {
    var index = addressBook.map(contact => contact.firstName).indexOf(firstname);
    addressBook.splice(index, 1);
}
function findTotalContacts(addressBook) {
    return addressBook.length;
}
function searchContact(cityOrStateFlag, cityOrStateValue, addressBook) {
    let contacts;
    switch (cityOrStateFlag) {
        case "City":
            contacts = addressBook.filter(contact => contact.city == cityOrStateValue);
            break;
        case "State":
            contacts = addressBook.filter(contact => contact.state == cityOrStateValue);
            break;
    }
    return contacts;
}
function viewContact(attribute, addressBook) {
    let contactMap = new Map();
    switch (attribute) {
        case "City":
            addressBook.forEach(contact => {
                if (!contactMap.get(contact.city)) {
                    contactMap.set(contact.city, [contact]);
                } else {
                    contactMap.get(contact.city).push(contact);
                }
            });
            break;
        case "State":
            addressBook.forEach(contact => {
                if (!contactMap.get(contact.state)) {
                    contactMap.set(contact.state, [contact]);
                } else {
                    contactMap.get(contact.state).push(contact);
                }
            });
            break;
    }
    return contactMap;
}
function countByCityOrState(cityOrStateFlag, addressBook) {
    let countMap = new Map();
    switch (cityOrStateFlag) {
        case "City":
            contactMap = viewContact("City", addressBook);
            contactMap.forEach((key, value) => {
                countMap.set(value, key.length);
            });
            break;
        case "State":
            contactMap = viewContact("State", addressBook);
            contactMap.forEach((key, value) => {
                countMap.set(value, key.length);
            });
            break;
    }
    return countMap;
}
function sortByFirstname(addressBook) {
    return addressBook.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
}
function sortByCityStateOrZip(cityStateOrZipFlag, addressBook) {
    switch (cityStateOrZipFlag) {
        case "City":
            return addressBook.sort((a, b) => (a.city > b.city) ? 1 : -1);
            break;
        case "State":
            return addressBook.sort((a, b) => (a.state > b.state) ? 1 : -1);
            break;
        case "Zip":
            return addressBook.sort((a, b) => (a.zip > b.zip) ? 1 : -1);
            break;
    }

}
try {

    let contactObjectOne = new Contact("Ritu", "Biswas", "Orchid", "Mumbai", "Maharashtra", 400088, '91 1234567890', 'abc@gmail.com');
    let contactObjectTwo = new Contact("Riya", "Srivastava", "Neelkhant", "Hazribagh", "Jharkhand", 700013, '91 2233445566', 'dd@gmail.com');
    console.log('UC1&2');
    let addressBook = new Array();
    addContact(addressBook, contactObjectOne);
    displayContact(addressBook);
    addContact(addressBook, contactObjectTwo);
    displayContact(addressBook);
    console.log('UC3');
    firstname = 'Ritu';
    newFirstname = 'Rituparna';
    findAndUpdateContact(addressBook, firstname, newFirstname);
    displayContact(addressBook);
    console.log('UC4');
    findAndDeleteContact(addressBook, newFirstname);
    displayContact(addressBook);
    console.log('UC5');
    addContact(addressBook, contactObjectOne);
    let totalContacts = findTotalContacts(addressBook);
    console.log('Total Contacts in AddressBook At Present: ' + totalContacts);
    console.log('UC6');
    addContact(addressBook, contactObjectTwo);
    displayContact(addressBook);
    console.log('UC7');
    let contactsSearchByCity = searchContact("City", "Hazribagh", addressBook);
    displayContact(contactsSearchByCity);
    console.log('UC8');
    let contactMap = viewContact("State", addressBook);
    displayContact(contactMap);
    console.log('UC9');
    countMap = countByCityOrState("City", addressBook)
    displayContact(contactMap);
    console.log('UC10');
    let addressBookSorted = sortByFirstname(addressBook);
    displayContact(addressBookSorted);
    console.log('UC11');
    let addressBookZipSort = sortByCityStateOrZip("Zip", addressBook);
    displayContact(addressBookZipSort);
    console.log('UC12');
}
catch (e) {
    console.error(e);
} 