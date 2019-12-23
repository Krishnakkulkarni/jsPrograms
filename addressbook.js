var readline = require('readline-sync');
var read = require("fs");

function addPerson(object) {
    try {
        let personObject = object.person;
        let fName = inputFirstName();
        let lName = inputLastName();
        let city = inputCity();
        let state = inputState();
        let zipcode = inputZipcode();
        let phNo = inputPhoneNo();
        let address = inputAddress();

        personObject.push({
            firstName: fName,
            lastName: lName,
            city: city,
            state: state,
            zipcode: zipcode,
            phoneNumber: phNo,
            address: address
        })
        console.log(personObject);

    } catch (error) {
        console.log(error.message);
    }
}

function editPerson(object) {
    try {
        let val = -1;
        let personObj = object.person;
        let name = inputFirstName();
        let mob = inputPhoneNo();

        for (var key in personObj) {
            if (personObj[key].firstName == name && personObj[key].phoneNumber == mob) {
                val = key;
            }
        }
        if (val === -1) {
            console.log("record not present ");
            return;

        }
        console.log(personObj);

        var ch = readline.questionInt("choose from the given options \n " +
            "1.edit address \n 2.edit city \n 3.edit zipcode \n 4.edit phone number \n");
        if (isNaN(ch)) throw "enter a valid input"

        switch (ch) {
            case 1: var address = inputAddress();
                personObj[val].address = address;
                break;
            case 2: var city = inputCity();
                personObj[val].city = city;
                break;
            case 3: var zip = inputZipcode();
                personObj[val].zipcode = zip;
                break;
            case 4: var mobile = inputPhoneNo();
                personObj[val].phoneNumber = mobile;
                break;
            default: console.log("wrong input ");
                break;
        }
    } catch (error) {
        console.log(error.message);
    }
}

function deletePerson(object) {
    try {
        var val = -1;
        var personObj = object.person;
        var name = inputFirstName();
        var mob = inputPhoneNo();

        for (var key in personObj) {
            if (personObj[key].firstName == name && personObj[key].phoneNumber == mob) {
                val = key;
            }
        }
        if (val === -1) {
            console.log("record not present ");
            return;
        }
        var ch = readline.questionInt("are you sure? \n " +
            "1.Delete \n2.exit \n");

        if (ch === 1) {
            personObj.splice(val, 1);
        }
        else
            return;
    } catch (error) {
        console.log(error.message);

    }
}

function saveFile(object) {
    read.writeFileSync("address.json", JSON.stringify(object));
    console.log("save successful :) ");
}

function display(object) {
    var personObj = object.person;
    for (var key in personObj) {
        console.log(personObj[key]);

    }
}

function personAddressBook(object) {
    try {
        let number = readline.question(`\nEnter 1 to add a person \nEnter 2 to edit a person  \nEnter 3 to remove a person \nEnter 4 to save file \nEnter 5 to print all persons \n`);
        switch (number) {
            case '1':
                addPerson(object);
                return personAddressBook(object);
            case '2':
                editPerson(object);
                return personAddressBook(object);
            case '3':
                deletePerson(object, file);
                return personAddressBook(object);
            case '4':
                saveFile(object);
                return personAddressBook(object, file);
            case '5':
                display(object);
                return personAddressBook(object);
            case '6':
                break;
            default:
                console.log(`Entered wrong number`)
                break;
        }

    } catch (error) {
        console.log(error.message);
    }
}

// To read a json file
let file = read.readFileSync("addressbook.json");
let object = JSON.parse(file);
personAddressBook(object);

function inputFirstName() {
    try {
        let fName = readline.question('Enter your first name: ');
        return fName;
    } catch (error) {
        console.log(error.message);

    }
}

function inputLastName() {
    try {
        let lName = readline.question('Enter your last name: ');
        return lName;
    } catch (error) {
        console.log(error.message);

    }
} function inputCity() {
    try {
        let city = readline.question('Enter your city: ');
        return city;
    } catch (error) {
        console.log(error.message);

    }
} function inputState() {
    try {
        let state = readline.question('Enter your state: ');
        return state;
    } catch (error) {
        console.log(error.message);

    }
} function inputZipcode() {
    try {
        let zipcode = readline.questionInt('Enter your zipcode: ');
        return zipcode;
    } catch (error) {
        console.log(error.message);

    }
} function inputPhoneNo() {
    try {
        let phNo = readline.questionInt('Enter your phone number: ');
        return phNo;
    } catch (error) {
        console.log(error.message);

    }
} function inputAddress() {
    try {
        let address = readline.question('Enter your address: ');
        return address;
    } catch (error) {
        console.log(error.message);

    }
}
