import { Component } from 'react';

import ContactForm from './ContactForm';
import ContactsList from './ContactsList';

export default class App extends Component {
  state = {
    contacts: [],
  };

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handleCheckUnique = name => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find(contact => contact.name === name);
    isExistContact && alert('Conract is already exist');
    return !isExistContact;
  };

  handleRemoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  render() {
    return (
      <>
        <h2>Form Contact</h2>
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUnique}
        />
        <ContactsList contacts={contacts} onRemove={this.handleRemoveContact} />
      </>
    );
  }
}
