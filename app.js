const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const contacts = require('./contacts');

const app = express();
const port = 3002;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/contacts', (req, res) => {
    const phoneType = req.query.phoneType;
    if (!phoneType) res.json(contacts);
    console.log(phoneType);
    const filteredContacts = contacts.filter(c => c.phoneType === parseInt(phoneType));
    console.log(filteredContacts);
    res.json(filteredContacts);
});

app.get('/contacts/:id', (req, res) => {
    const contact = contacts.find(c => c.id === req.params.id);
    if (!contact) res.status(404).send('Contact not found.');
    res.status(200).json(contact);
})

app.post('/contacts', (req, res) => {
    const newContact = {
        id: uuidv4(),
        ...req.body
    }
    contacts.push(newContact);
    res.status(201).json(newContact);
});

app.delete('/contacts/:id', (req, res) => {
    const contactIndex = contacts.findIndex(c => c.id === req.params.id);
    if (contactIndex === -1) res.status(404).send('Contact not found.');

    const deletedContact = contacts.splice(contactIndex, 1);
    res.status(200).json(deletedContact);
});

app.patch('/contacts/:id', (req, res) => {
    const contactIndex = contacts.findIndex(c => c.id === req.params.id);
    if (contactIndex === -1) res.status(404).send('Contact not found.');

    const newContact = { ...contacts[contactIndex], ...req.body };
    
    contacts[contactIndex] = newContact;

    res.status(200).json(newContact);
});




app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});