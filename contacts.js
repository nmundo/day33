const { v4: uuidv4 } = require('uuid');

let contacts = [
    {
        id: uuidv4(),
        firstName: "Alice",
        lastName: "Johnson",
        phoneType: 1,
        phoneNumber: "555-1234",
        email: "alice.johnson@example.com"
    },
    {
        id: uuidv4(),
        firstName: "Bob",
        lastName: "Smith",
        phoneType: 2,
        phoneNumber: "555-5678",
        email: "bob.smith@example.com"
    },
    {
        id: uuidv4(),
        firstName: "Charlie",
        lastName: "Brown",
        phoneType: 0,
        phoneNumber: "555-8765",
        email: "charlie.brown@example.com"
    },
    {
        id: uuidv4(),
        firstName: "Dana",
        lastName: "White",
        phoneType: 1,
        phoneNumber: "555-4321",
        email: "dana.white@example.com"
    },
    {
        id: uuidv4(),
        firstName: "Eli",
        lastName: "Walker",
        phoneType: 2,
        phoneNumber: "555-8761",
        email: "eli.walker@example.com"
    },
    {
        id: uuidv4(),
        firstName: "Fiona",
        lastName: "Green",
        phoneType: 2,
        phoneNumber: "555-1235",
        email: "fiona.green@example.com"
    },
    {
        id: uuidv4(),
        firstName: "George",
        lastName: "King",
        phoneType: 2,
        phoneNumber: "555-4322",
        email: "george.king@example.com"
    },
    {
        id: uuidv4(),
        firstName: "Hannah",
        lastName: "Scott",
        phoneType: 1,
        phoneNumber: "555-5679",
        email: "hannah.scott@example.com"
    },
    {
        id: uuidv4(),
        firstName: "Ian",
        lastName: "Taylor",
        phoneType: 2,
        phoneNumber: "555-8766",
        email: "ian.taylor@example.com"
    },
    {
        id: uuidv4(),
        firstName: "Jenna",
        lastName: "Adams",
        phoneType: 2,
        phoneNumber: "555-4323",
        email: "jenna.adams@example.com"
    }
];

module.exports = contacts;